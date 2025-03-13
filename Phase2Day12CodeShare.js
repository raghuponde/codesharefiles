open the web api of student in day 10 folder only web api so in this web api i want to include Authcontroller 

and want to provide Authentication and Authoriztion using tokens in this web api this is frist task 

Add these depencies of version 8.0.13 

Microsoft.AspNetCore.Identity.EntityFrameworkCore
Microsoft.AspNetCore.Authentication.JwtBearer


once build the project and now in Models folder which is already there just add these classes into it 
using System.ComponentModel.DataAnnotations;

namespace StudentReactWebApIDemo.Models
{
    public class RegisterUser
    {

        [Required(ErrorMessage = "User Name is required")]
        public string? Username { get; set; }
        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string? Email { get; set; }
        [Required(ErrorMessage = "Password is required")]
        public string? Password { get; set; }
    }
}
