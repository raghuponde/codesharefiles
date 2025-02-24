 
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
