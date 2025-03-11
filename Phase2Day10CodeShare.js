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

    const [student, setStudent] = useState({ name: '', email: '', address: '' });

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

            <input name="name" type="text"  placeholder="Name" onChange={handleInputChange} /> <br/>
            <input name="email" type="email" placeholder="Email" onChange={handleInputChange} /> <br/>
            <input name="address"  type="text" placeholder="Address" onChange={handleInputChange} /><br/>

            <button type="submit" >Submit </button>
        </form>


    )


}

export default StudentForm;

StudentList.js 
-----------------
  import React, { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';

const StudentList = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        StudentService.getAllStudents().then((response) => {

            setStudents(response.data)
        })

    }, [])

    return (
        <div>
            <h2>Students List</h2>
            <ul>
                {
                    students.map((student) => (

                        <li key={student.id} >
                            {student.name}--{student.email}
                        </li>

                    ))


                }

            </ul>
        </div>


    )

}

export default StudentList;

App.js 
---------
  
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
function App() {
  return (
  
    <>
      <h1>Student portal form </h1>
        <StudentForm />
        <StudentList/>
    </>
  );
}

export default App;

web api should be running otherwise you cannot insert and see the list here okay 

Well I want to edit and delete the student so from App.js I will pass them properties or functions to the child components

so something is there in Student Form which is submit which is adding that i want to chnage as edit 

so App.js 
-----------

import { useState } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const refreshStudents=()=>
  {
    selectedStudent(null);
    setEditMode(false);
  }

  return (
  
    <>
      <h1>Student portal form </h1>
      <StudentForm selectedStudent={selectedStudent} setEditMode={setEditMode} refreshStudents={refreshStudents} />
      <StudentList setSelectedStudent={setSelectedStudent} setEditMode={setEditMode} refreshStudents={refreshStudents} />
    </>
  );
}

export default App;

now go to StudentForm.js 
---------------------------
and first change submit button liek this 

import React, { useState } from "react";
import StudentService from '../services/StudentService';


const StudentForm = ({selectedStudent,setEditMode,refreshStudents}) => {

    const [student, setStudent] = useState({ name: '', email: '', address: '' });

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

            <input name="name" type="text"  placeholder="Name" onChange={handleInputChange} /> <br/>
            <input name="email" type="email" placeholder="Email" onChange={handleInputChange} /> <br/>
            <input name="address"  type="text" placeholder="Address" onChange={handleInputChange} /><br/>

            <button type="submit" >
                {selectedStudent?'UpdateStudent':'Add Student'}
            </button>
        </form>


    )


}

export default StudentForm;

now go to StudentList.js 
-----------------------
  from here u have to show that effect 

import React, { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';

const StudentList = ({ setSelectedStudent, setEditMode, refreshStudents }) => {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        StudentService.getAllStudents().then((response) => {

            setStudents(response.data)
        })

    }, [])

    const handleEdit = (student) =>
    {
        setSelectedStudent(student);

    }
    return (
        <div>
            <h2>Students List</h2>
            <ul>
                {
                    students.map((student) => (

                        <li key={student.id} >
                            {student.name}--{student.email}
                            <button onClick={()=>handleEdit(student)}>Edit</button>
                        </li>

                    ))


                }

            </ul>
        </div>


    )

}

export default StudentList;
  
now again come to studentForm.js when it is updated student u have to use axios of update methd 

StudentForm.js 
-----------------
import React, { useEffect, useState } from "react";
import StudentService from '../services/StudentService';


const StudentForm = ({ selectedStudent, setEditMode, refreshStudents }) => {

    const [student, setStudent] = useState({ name: '', email: '', address: '' });

    useEffect(() => {

        if (selectedStudent) {
            setStudent(selectedStudent);
        }

    }, [selectedStudent])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedStudent) {
            //udpate exsisting student 
            StudentService.updateStudent(selectedStudent.id, student).then(() => {
                alert("student updated stuccesfully");
                refreshStudents();
                setEditMode(false);//exiting edit mode

            }
            )
        }
        else {
            StudentService.createStudent(student).then(() => {
                alert("Student added succesfully");
                refreshStudents();

            })
        }
        setStudent({ name: '', email: '', address: '' }) //after add or update empty textboxes 
    }
    return (
        <form onSubmit={handleSubmit}>

            <input name="name" type="text" value={student.name} placeholder="Name" onChange={handleInputChange} /> <br />
            <input name="email" type="email" value={student.email} placeholder="Email" onChange={handleInputChange} /> <br />
            <input name="address" type="text" value={student.address} placeholder="Address" onChange={handleInputChange} /><br />

            <button type="submit" >
                {selectedStudent ? 'UpdateStudent' : 'Add Student'}
            </button>
            {selectedStudent &&
                (
                    <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
                )}
        </form>


    )


}

export default StudentForm;

upto this check the basic functionality is working or not 


StudentList.js 
----------------
 import React, { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';

const StudentList = ({ setSelectedStudent, setEditMode, refreshStudents }) => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        refreshStudentList();
    }, []);

    const refreshStudentList = () => {
        StudentService.getAllStudents().then((response) => {
            setStudents(response.data);
        });
    };

 

    const handleDelete = (id) =>
    {
        if (window.confirm("Are you sure you want to delete this student?"))
        {
            StudentService.deleteStudent(id).then(() => {

                alert("student deleted succesfully");
                refreshStudentList();//refershe the list after deletion 
                
            })
        }
    }
    const handleEdit = (student) =>
    {
        setSelectedStudent(student);
        setEditMode(true)//enable edit mode to true 

    }
    return (
        <div>
            <h2>Students List</h2>
            <ul>
                {
                    students.map((student) => (

                        <li key={student.id} >
                            {student.name}--{student.email}--{student.address}
                            <button onClick={() => handleEdit(student)}>Edit</button>
                            <button onClick={() => handleDelete(student.id)}>Delete</button>
                        </li>

                    ))


                }

            </ul>
        </div>


    )

}

export default StudentList;

  
App.js code 
----------------
  
import { useState } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
function App() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const refreshStudents=()=>
  {
    setSelectedStudent(null);
    setEditMode(false);
  }

  return (
  
    <>
      <h1>Student portal form </h1>
      <StudentForm selectedStudent={selectedStudent} setEditMode={setEditMode} refreshStudents={refreshStudents} />
      <StudentList setSelectedStudent={setSelectedStudent} setEditMode={setEditMode} refreshStudents={refreshStudents} />
    </>
  );
}

export default App;

To add image upload functionality to each student, we need to update both the ASP.NET Core Web API and the React frontend to handle file uploads 
(specifically images). Here's how to modify the code:

Part 1: Update ASP.NET Core Web API
Step 1: Add a Property for Image URL in the Student Model
Add an ImageUrl property to the Student model to store the path of the uploaded image:

go to web api add one proeprty like this 

public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
    public string ImageUrl { get; set; } // New property for storing image URL
}



and then run migrations once and se whether extra column came into db or not 


Now add one class in Models folder with the name StudentDto 

public class StudentDto
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
    public IFormFile ImageFile { get; set; } // Handles file uploads
}
why i am using this  class is because i directly dont want to add or update  in student table through this class StudentDto only i want to add or update
  to externalclient i dont want to expose my model so dto mean data tranfer object i am using it 

  
in the project create one folder wwwroot and in that add another folder images here when i type wwwwroot globe symbol will come which is also a folder 


update Studentscontroller like this mainly Post and Put methods of it 

 [HttpPost]
 public async Task<ActionResult<Student>> PostStudent([FromForm] StudentDto studentDto)
 {
     var student = new Student
     {
         Name = studentDto.Name,
         Email = studentDto.Email,
         Address = studentDto.Address
     };

     if (studentDto.ImageFile != null)
     {
         var filePath = Path.Combine("wwwroot/images", Guid.NewGuid() + Path.GetExtension(studentDto.ImageFile.FileName));
         using (var stream = new FileStream(filePath, FileMode.Create))
         {
             await studentDto.ImageFile.CopyToAsync(stream);
         }
         student.ImageUrl = filePath.Replace("wwwroot", "");
     }

     _context.Students.Add(student);
     await _context.SaveChangesAsync();
     return CreatedAtAction("GetStudent", new { id = student.Id }, student);
 }

 [HttpPut("{id}")]
 public async Task<IActionResult> PutStudent(int id, [FromForm] StudentDto studentDto)
 {
     var student = await _context.Students.FindAsync(id);
     if (student == null)
     {
         return NotFound();
     }

     student.Name = studentDto.Name;
     student.Email = studentDto.Email;
     student.Address = studentDto.Address;

     if (studentDto.ImageFile != null)
     {
         var filePath = Path.Combine("wwwroot/images", Guid.NewGuid() + Path.GetExtension(studentDto.ImageFile.FileName));
         using (var stream = new FileStream(filePath, FileMode.Create))
         {
             await studentDto.ImageFile.CopyToAsync(stream);
         }
         student.ImageUrl = filePath.Replace("wwwroot", "");
     }

     await _context.SaveChangesAsync();
     return NoContent();
 }


In Program.cs, enable the server to serve static files like images:

app.UseStaticFiles(); (befoe app.UseHttpsRedirection();)


Now coome to react and copy this updated StudentService.js and then StudentForm.js and StudentList.js

in studnet list also change port 


import axios from 'axios';

const API_URL = 'https://localhost:7273/api/students/';

class StudentService {
  getAllStudents() {
    return axios.get(API_URL);
  }

  getStudentById(id) {
    return axios.get(API_URL + id);
  }

  createStudent(formData) {
    return axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  updateStudent(id, formData) {
    return axios.put(API_URL + id, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  deleteStudent(id) {
    return axios.delete(API_URL + id);
  }
}

export default new StudentService();




