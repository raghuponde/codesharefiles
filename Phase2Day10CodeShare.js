Integratng .net core WebApi with react Demo
*********************************************
  create a new project with the name StudentReactWebApIDemo in Day 10 folder  it is an web api project which we are doing use .net core 8.0 version 
and include below namespaces 8.0.13 version you have to use 

 Microsoft.EntityFrameworkCore
 Microsoft.EntityFrameworkCore.SqlServer
 Microsoft.EntityFrameworkCore.Tools

Add one class in Models folders so create one folder Models 

public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
}

Now add one folder Data in project and add class AppDbConext which is like this below

using Microsoft.EntityFrameworkCore;
using StudentReactWebApIDemo.Models;

namespace StudentReactWebApIDemo.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<Student> Students { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
    }
}


in ap settings configure database 

{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=LAPTOP-4G8BHPK9\\SQLEXPRESS;Database=StudentCRUDDatabase;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True;"
  }
}

udate in program.cs 

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
    
    
once build the application 
    
addd migrations 

Add-Migration "InitialCreate"
Update-Database

Now create a StudentsController and below code is presented use empty api contoller only 


[Route("api/[controller]")]
[ApiController]
public class StudentsController : ControllerBase
{
    private readonly AppDbContext _context;

    public StudentsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
    {
        return await _context.Students.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Student>> GetStudent(int id)
    {
        var student = await _context.Students.FindAsync(id);
        if (student == null)
        {
            return NotFound();
        }
        return student;
    }

    [HttpPost]
    public async Task<ActionResult<Student>> PostStudent(Student student)
    {
        _context.Students.Add(student);
        await _context.SaveChangesAsync();
        return CreatedAtAction("GetStudent", new { id = student.Id }, student);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutStudent(int id, Student student)
    {
        if (id != student.Id)
        {
            return BadRequest();
        }
        _context.Entry(student).State = EntityState.Modified;
        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Students.Any(e => e.Id == id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteStudent(int id)
    {
        var student = await _context.Students.FindAsync(id);
        if (student == null)
        {
            return NotFound();
        }
        _context.Students.Remove(student);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}


o allow access from the React frontend, enable CORS in Program.cs:(after   builder.Services.AddSwaggerGen();)
--------------------------------------------------------------
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", builder =>
    {
        builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

app.UseCors("AllowAllOrigins");(this after app.UseHttpsRedirection();)

so above coding i had done in program.cs because any external resouce or application wants to consume my web api writing this code means 
i am giving permission to use my web api a seperate project is trying to use my back end web api if i dont keeep this then CORS error 
i will get when i go and check in inspect of browser so CORS full form is 

Cross-origin resource sharing (CORS) is a mechanism for integrating applications. CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain.

so my program.cs file in total will look like this 

program.cs
------------
  
using Microsoft.EntityFrameworkCore;
using StudentReactWebApIDemo.Data;

namespace StudentReactWebApIDemo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);


            builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));




            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins", builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
                });
            });


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors("AllowAllOrigins");

            app.UseAuthorization();


            app.MapControllers(); 

            app.Run();
        }
    }
}
so this is all about back end later on again i will add images also but first let us finish basic coding

so now front end we have to go in Day10 folder only create a new react app with name studentapp 

do intial set up which we do 

You’ll use Axios to communicate with the API:

npm install axios


in the src folder create one folder with the name services and in that add one class StudentService.js 

and chnage the port number as per your web api go to proerties and in that launch settings and in the profiles and use https port here 

import axios from 'axios';

const API_URL = 'https://localhost:7272/api/students/';

class StudentService {
  getAllStudents() {
    return axios.get(API_URL);
  }

  getStudentById(id) {
    return axios.get(API_URL + id);
  }

  createStudent(student) {
    return axios.post(API_URL, student);
  }

  updateStudent(id, student) {
    return axios.put(API_URL + id, student);
  }

  deleteStudent(id) {
    return axios.delete(API_URL + id);
  }
}

export default new StudentService();



Now create one folder in src which is components and in that add StudentForm.js and also add StudentList.js files 

now go to StudentForm .js and write the below code 
import React, { useState } from "react";
import StudentService from '../services/StudentService';


const StudentForm = () => {

    const [student, setStudent] = useState({ name: "", email: "", address: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        StudentService.createStudent(student).then(() => {
            alert("Student added succesfully");

        })
    }
    return (
        <form onSubmit={handleSubmit}>

            <input name="name" placeholder="Name" onChange={handleInputChange} />
            <input name="email" placeholder="Email" onChange={handleInputChange} />
            <input name="address" placeholder="Address" onChange={handleInputChange} />

            <input type="submit" >Submit</input>
        </form>


    )


}

export default StudentForm;






