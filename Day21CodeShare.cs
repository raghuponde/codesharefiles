 
open one visual studio project 2022 C#--- all plarforms-- web 

select asp.net core web api 

create a project .net 8.0 you can select 


 so default controller will be there the code will look like this I had chnaged the url like this for method 

 using Microsoft.AspNetCore.Mvc;

namespace Webapidemo.Controllers
{
    [ApiController]
    [Route("[controller]")]  // base url 
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
    
        [Route("weather1")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}

run and see the effect here how the url is changed 
in web we have some methods like get ,post,put ,delete etc 

when u are doing insert,update or delete then get and post both will come why ???


 when you say get form is shown to you imagine when you say yahoo.com login form is shown to you that is get 

 what is post when u fill the form and press login button that is post your details are sent to some home page of any thing 

 post means adding data or inserting will be there 

 names of method will be same but on the top one attribyte wil come that is get and post which differentates one method from other 

 put means modifying the data udating 

 delete means deleting the data


right now i am a default weatherforcest controller which is havinh  a get method what it does just gives me the values 

here design is not there only console is there so we will concentrate on web api only right now 


the above default method i can chnage like this also means i will write the route and mehtod in one line only like this 

 
        [HttpGet("weather2")]   // route and method both clubbed here 
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }

Now right clikc on controller folder and add new controller how to do it 


right click --->add-->controller ---> left side go to api section -->select api empty controller and give name as EmpController and add it 

you have to give suffix as Controller it is a convention means some rule to follow 

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace Webapidemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {
    }
}

so i am seeing one contoller it is telling that base url is you have to write api/Emp to get the output of function 
insdie the namespace add one class Employee like this 

 using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webapidemo.Controllers
{


    public class Employee
    {

        public int? Id { set; get; }

        public string? Name { set; get; }

        public string  Place { set; get; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {
    }
}


now i had told web api means online function so first generally i will write one function and return some employees from that function 

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webapidemo.Controllers
{


    public class Employee
    {

        public int? Id { set; get; }

        public string? Name { set; get; }

        public string  Place { set; get; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {

        [HttpGet]
        public List<Employee> Employees()
        {
            var emps = new List<Employee>()
            {
                new Employee{Id=1,Name="kiran",Place="bangalore"},
                 new Employee{Id=2,Name="sita",Place="chennai"},
                  new Employee{Id=3,Name="mohan",Place="Hyderabad"},
            };

            return emps;
        }

        [HttpGet("Emp2")]
        public List<Employee> Employees2()
        {
            var emps = new List<Employee>()
            {
                new Employee{Id=1,Name="kiran",Place="bangalore"},
                 new Employee{Id=2,Name="sita",Place="chennai"},
                  new Employee{Id=3,Name="mohan",Place="Hyderabad"},
            };

            return emps;
        }


    }
}

if u dont write on the top  [HttpGet] then swagger is unable to identity your function 

now taking out the employee code collection outside 

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webapidemo.Controllers
{


    public class Employee
    {

        public int? Id { set; get; }

        public string? Name { set; get; }

        public string  Place { set; get; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {

        private static List<Employee> emps = new List<Employee>()
            {
                new Employee{Id=1,Name="kiran",Place="bangalore"},
                 new Employee{Id=2,Name="sita",Place="chennai"},
                  new Employee{Id=3,Name="mohan",Place="Hyderabad"},
            };

        [HttpGet]
        public List<Employee> Employees()
        {
            
            return emps;
        }

        [HttpGet("Emp2")]
        public List<Employee> Employees2()
        {
           
            return emps;
        }


    }
}

now adding post method here and that method is returing empoyee only which i had inserted 

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webapidemo.Controllers
{


    public class Employee
    {

        public int? Id { set; get; }

        public string? Name { set; get; }

        public string  Place { set; get; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {

        private static List<Employee> emps = new List<Employee>()
            {
                new Employee{Id=1,Name="kiran",Place="bangalore"},
                 new Employee{Id=2,Name="sita",Place="chennai"},
                  new Employee{Id=3,Name="mohan",Place="Hyderabad"},
            };

        [HttpGet]
        public List<Employee> Employees()
        {
            
            return emps;
        }

        [HttpGet("Emp2")]
        public List<Employee> Employees2()
        {
           
            return emps;
        }

        [HttpPost]
        public Employee AddEmployee(Employee emp1)
        {
            emps.Add(emp1);
            return emp1;
        }


    }
}


now same add method i will write but it will return collectionof emps 

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webapidemo.Controllers
{


    public class Employee
    {

        public int? Id { set; get; }

        public string? Name { set; get; }

        public string  Place { set; get; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {

        private static List<Employee> emps = new List<Employee>()
            {
                new Employee{Id=1,Name="kiran",Place="bangalore"},
                 new Employee{Id=2,Name="sita",Place="chennai"},
                  new Employee{Id=3,Name="mohan",Place="Hyderabad"},
            };

        [HttpGet]
        public List<Employee> Employees()
        {
            
            return emps;
        }

        [HttpGet("Emp2")]
        public List<Employee> Employees2()
        {
           
            return emps;
        }

        [HttpPost]
        public Employee AddEmployee(Employee emp1)
        {
            emps.Add(emp1);
            return emp1;
        }

        [HttpPost("emppost2")]// same add but after adding returning list of employees
        public List<Employee> AddEmployee2(Employee emp1)
        {
            emps.Add(emp1);
            return emps;
        }
    }
}

Adding update method 

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webapidemo.Controllers
{


    public class Employee
    {

        public int? Id { set; get; }

        public string? Name { set; get; }

        public string  Place { set; get; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {

        private static List<Employee> emps = new List<Employee>()
            {
                new Employee{Id=1,Name="kiran",Place="bangalore"},
                 new Employee{Id=2,Name="sita",Place="chennai"},
                  new Employee{Id=3,Name="mohan",Place="Hyderabad"},
            };

        [HttpGet]
        public List<Employee> Employees()
        {
            
            return emps;
        }

        [HttpGet("Emp2")]
        public List<Employee> Employees2()
        {
           
            return emps;
        }

        [HttpPost]
        public Employee AddEmployee(Employee emp1)
        {
            emps.Add(emp1);
            return emp1;
        }

        [HttpPost("emppost2")]// same add but after adding returning list of employees
        public List<Employee> AddEmployee2(Employee emp1)
        {
            emps.Add(emp1);
            return emps;
        }

        [HttpPut]
        public Employee UpdateEmployee(Employee emp1)
        {
            var employee1=emps.Find(x=>x.Id==emp1.Id);
            if (employee1 == null)
            {
                return new Employee { Name = "Error", Place = "Employee not found" }; // Returning an Employee object with a message
            }
            employee1.Name = emp1.Name;
            employee1.Place=emp1.Place;
            return employee1;
                 
        }

      
    }
}

Now i am puttng all the methods in put ,delete and post methds two versions i had provied one is after doing insert ,update and delete 
i am return single employee and another is return collection 

just url i had changed 

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webapidemo.Controllers
{


    public class Employee
    {

        public int? Id { set; get; }

        public string? Name { set; get; }

        public string  Place { set; get; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {

        private static List<Employee> emps = new List<Employee>()
            {
                new Employee{Id=1,Name="kiran",Place="bangalore"},
                 new Employee{Id=2,Name="sita",Place="chennai"},
                  new Employee{Id=3,Name="mohan",Place="Hyderabad"},
            };

        [HttpGet]
        public List<Employee> Employees()
        {
            
            return emps;
        }

        [HttpGet("Emp2")]
        public List<Employee> Employees2()
        {
           
            return emps;
        }

        [HttpPost]
        public Employee AddEmployee(Employee emp1)
        {
            emps.Add(emp1);
            return emp1;
        }

        [HttpPost("emppost2")]// same add but after adding returning list of employees
        public List<Employee> AddEmployee2(Employee emp1)
        {
            emps.Add(emp1);
            return emps;
        }

        [HttpPut]
        public Employee UpdateEmployee(Employee emp1)
        {
            var employee1=emps.Find(x=>x.Id==emp1.Id);
            if (employee1 == null)
            {
                return new Employee { Name = "Error", Place = "Employee not found" }; // Returning an Employee object with a message
            }
            employee1.Name = emp1.Name;
            employee1.Place=emp1.Place;
            return employee1;
                 
        }
        [HttpPut("empput2")]
        public List<Employee> UpdateEmployee2(Employee emp1)
        {
            var employee1 = emps.Find(x => x.Id == emp1.Id);
            if (employee1 == null)
            {
                // Return a list with a single Employee object containing the error message
                return new List<Employee>
                {
                    new Employee { Name = "Error", Place = "Employee not found" }
                };
            }
            employee1.Name = emp1.Name;
            employee1.Place = emp1.Place;
            return emps;

        }
        [HttpDelete]
        public Employee DeleteEmployee(int id)
        {
            var employee1 = emps.Find(x => x.Id == id);
            if (employee1 == null)
            {
                return new Employee { Name = "Error", Place = "Employee not found" }; // Returning an Employee object with a message
            }

            emps.Remove(employee1);
            return employee1;

        }

        [HttpDelete("empdelete2")]
        public List<Employee> DeleteEmployee2(int id)
        {
            var employee1 = emps.Find(x => x.Id == id);
            if (employee1 == null)
            {
                // Return a list with a single Employee object containing the error message
                return new List<Employee>
                {
                    new Employee { Name = "Error", Place = "Employee not found" }
                };
            }


            emps.Remove(employee1);
            return emps;

        }

    }
}
finall code with finding employeed search based on id

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Webapidemo.Controllers
{


    public class Employee
    {

        public int? Id { set; get; }

        public string? Name { set; get; }

        public string  Place { set; get; } = string.Empty;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {

        private static List<Employee> emps = new List<Employee>()
            {
                new Employee{Id=1,Name="kiran",Place="bangalore"},
                 new Employee{Id=2,Name="sita",Place="chennai"},
                  new Employee{Id=3,Name="mohan",Place="Hyderabad"},
            };

        [HttpGet]
        public List<Employee> Employees()
        {
            
            return emps;
        }

        [HttpGet("Emp2")]
        public List<Employee> Employees2()
        {
           
            return emps;
        }

        [HttpPost]
        public Employee AddEmployee(Employee emp1)
        {
            emps.Add(emp1);
            return emp1;
        }

        [HttpPost("emppost2")]// same add but after adding returning list of employees
        public List<Employee> AddEmployee2(Employee emp1)
        {
            emps.Add(emp1);
            return emps;
        }

        [HttpPut]
        public Employee UpdateEmployee(Employee emp1)
        {
            var employee1=emps.Find(x=>x.Id==emp1.Id);
            if (employee1 == null)
            {
                return new Employee { Name = "Error", Place = "Employee not found" }; // Returning an Employee object with a message
            }
            employee1.Name = emp1.Name;
            employee1.Place=emp1.Place;
            return employee1;
                 
        }
        [HttpPut("empput2")]
        public List<Employee> UpdateEmployee2(Employee emp1)
        {
            var employee1 = emps.Find(x => x.Id == emp1.Id);
            if (employee1 == null)
            {
                // Return a list with a single Employee object containing the error message
                return new List<Employee>
                {
                    new Employee { Name = "Error", Place = "Employee not found" }
                };
            }
            employee1.Name = emp1.Name;
            employee1.Place = emp1.Place;
            return emps;

        }
        [HttpDelete]
        public Employee DeleteEmployee(int id)
        {
            var employee1 = emps.Find(x => x.Id == id);
            if (employee1 == null)
            {
                return new Employee { Name = "Error", Place = "Employee not found" }; // Returning an Employee object with a message
            }

            emps.Remove(employee1);
            return employee1;

        }

        [HttpDelete("empdelete2")]
        public List<Employee> DeleteEmployee2(int id)
        {
            var employee1 = emps.Find(x => x.Id == id);
            if (employee1 == null)
            {
                // Return a list with a single Employee object containing the error message
                return new List<Employee>
                {
                    new Employee { Name = "Error", Place = "Employee not found" }
                };
            }


            emps.Remove(employee1);
            return emps;

        }

        [HttpGet("{id}")]
        public Employee GetEmployees(int id)
        {
            var employee1 = emps.Find(x => x.Id == id);
            if (employee1 == null)
            {
                return new Employee { Name = "Error", Place = "Employee not found" }; // Returning an Employee object with a message
            }

            return employee1;

        }


    }
}


go to sql server  and create one sammple database with the name EmpDatabase


create database EmployeeDataDb

use EmployeeDataDb

CREATE TABLE Employee (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(50),
    Place NVARCHAR(50)
);

insert into Employee values('sohan','bangalore');
insert into Employee values('sita','chennai');
insert into Employee values('suresh','Delhi');


select * from Employee

 now add new controller into Controllers folder 
right click --->add-->controller ---> left side go to api section -->select api empty controller and give name as Emp2Controller and add it 

you have to give suffix as Controller it is a convention means some rule to follow 
 

go to app settings file and thee after AllowedHosts :"*" put , and write this code 

as per your sql server configuration 

{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=LLAPTOP-4G8BHPK9\SQLEXPRESS;Database=EmployeeDataDb;Trusted_Connection=True;TrustServerCertificate=True;"
  }

}


so change server name and dataabase name as per your sql server 

now go to dependencies and write install Microsoft.Data.sqlclient  from nugget manage nugget packages and browse type this and install 

and then write the first method to get employees from database to web api 

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;  // namespace include 
namespace Webapidemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Emp2Controller : ControllerBase
    {

        private readonly string connectionString = "Server=LAPTOP-4G8BHPK9\\SQLEXPRESS;Database=EmployeeDataDb;Trusted_Connection=True;TrustServerCertificate=True;";

        // ✅ GET All Employees
        [HttpGet]
        public List<Employee> GetEmployees()
        {
            List<Employee> employees = new List<Employee>();
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();

            SqlCommand cmd = new SqlCommand("SELECT * FROM Employee", conn);
            SqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                employees.Add(new Employee
                {
                    Id = reader.GetInt32(0),
                    Name = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Place = reader.GetString(2)
                });
            }

            reader.Close();
            conn.Close();

            return employees;
        }

    }
}


in this namespace   namespace Webapidemo.Controllers only Employee class is there so i am able to use it in Emp2 conteoller as well
 

remaining methods
---------------------
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
namespace Webapidemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Emp2Controller : ControllerBase
    {

        private readonly string connectionString = "Server=LAPTOP-4G8BHPK9\\SQLEXPRESS;Database=EmployeeDataDb;Trusted_Connection=True;TrustServerCertificate=True;";

        // ✅ GET All Employees
        [HttpGet]
        public List<Employee> GetEmployees()
        {
            List<Employee> employees = new List<Employee>();
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();

            SqlCommand cmd = new SqlCommand("SELECT * FROM Employee", conn);
            SqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                employees.Add(new Employee
                {
                    Id = reader.GetInt32(0),
                    Name = reader.IsDBNull(1) ? null : reader.GetString(1),
                    Place = reader.GetString(2)
                });
            }

            reader.Close();
            conn.Close();

            return employees;
        }


        // ✅ POST Add Employee
        [HttpPost]
        public void AddEmployee(Employee emp)
        {
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();

            SqlCommand cmd = new SqlCommand("INSERT INTO Employee (Name, Place) VALUES (@Name, @Place); SELECT SCOPE_IDENTITY();", conn);
            cmd.Parameters.AddWithValue("@Name", emp.Name ?? (object)DBNull.Value);
            cmd.Parameters.AddWithValue("@Place", emp.Place);
            cmd.ExecuteNonQuery();

            

            conn.Close();

           
        }


        // ✅ PUT Update Employee
        [HttpPut]
        public void UpdateEmployee(Employee emp)
        {
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();

            SqlCommand cmd = new SqlCommand("UPDATE Employee SET Name = @Name, Place = @Place WHERE Id = @Id", conn);
            cmd.Parameters.AddWithValue("@Id", emp.Id);
            cmd.Parameters.AddWithValue("@Name", emp.Name ?? (object)DBNull.Value);
            cmd.Parameters.AddWithValue("@Place", emp.Place);

            cmd.ExecuteNonQuery();

            conn.Close();

           
        }

        // ✅ DELETE Employee
        [HttpDelete("{id}")]
        public void DeleteEmployee(int id)
        {
          
            SqlConnection conn = new SqlConnection(connectionString);
            conn.Open();
 
            SqlCommand deleteCmd = new SqlCommand("DELETE FROM Employee WHERE Id = @Id", conn);
            deleteCmd.Parameters.AddWithValue("@Id", id);
            deleteCmd.ExecuteNonQuery();

           

           
        }

    }
}

Micro service demo
-------------------
you have to go with a new solution not Day21Projects so go with new solution 


file new project in search type Blank solution 

so create one solution of blank with the name MicroService Example

Now add one new web api project with the name ProductService   

in the same manner add another project OrderService same web api project  only 


In the both the projects add folder Models into it and add the following classes in both the projects into their respective models folder 

namespace ProductService.Models
{
    public class Product
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }
}



namespace OrderService.Models
{
    public class Order
    {

        public int Id { get; set; }
        public string ProductName { get; set; }
        public int Quantity { get; set; }
    }
}


Now add ProductsController and OrdersController into respective seeprate projects both empty controller only and then add the belowc codes which i have given 
Note API section only go and create not mvc 



using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductService.Models;

namespace ProductService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private static readonly List<Product> Products = new()
        {
            new Product { Id = 1, Name = "Product A", Price = 100 },
            new Product { Id = 2, Name = "Product B", Price = 200 }
        };

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            return Ok(Products);
        }

        [HttpGet("{id}")]
        public IActionResult GetProductById(int id)
        {
            var product = Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }
    }
}






using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OrderService.Models;

namespace OrderService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private static readonly List<Order> Orders = new()
        {
            new Order { Id = 1, ProductName = "Product A", Quantity = 2 },
            new Order { Id = 2, ProductName = "Product B", Quantity = 1 }
        };

        [HttpGet]
        public IActionResult GetAllOrders()
        {
            return Ok(Orders);
        }

        [HttpGet("{id}")]
        public IActionResult GetOrderById(int id)
        {
            var order = Orders.FirstOrDefault(o => o.Id == id);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }
    }
}





