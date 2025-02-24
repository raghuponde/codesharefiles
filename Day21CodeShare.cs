 
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


