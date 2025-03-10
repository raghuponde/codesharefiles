first create three folders like this one is Boilerplatecode ,passedcodeinlocal,mycodechatgpt

and after this open the notes of saturday ...code share notes to keep it side by  handy 

so copy the downloads of milsteonquestionssample of the folder boilerplatecode and boilerplatewrittencode and passedcodeinlocal into fodler boilerplatecode in day 9 and written
in chatgpt fodler and passedccodeinlocal2 copy it 

now do npm install in local2 and chatgpt folder

now copy the content of boiler plate App.test.js into both chatgpt and also locla2 fodler and run npm test 

you can see that local all test cases are passing but chatgpt it is not passing eventhoug he has not written the code for categaory add into the task

open questin description from drive or if u have local open it and then open test file of boilerplate app.test.js 
and also open in notepad++ the open day 8 code share file as well 


IdentityDemoWithTokens in web api 
-------------------------------------
Now Open one asp.net core  web api application of net core of 8.0 version

Add these depencies of version 8.0.13 

Microsoft.EntityFrameworkCore.SqlServer
Microsoft.EntityFrameworkCore.Tools
Microsoft.AspNetCore.Identity.EntityFrameworkCore
Microsoft.AspNetCore.Authentication.JwtBearer


after installing this once build the project once
add one folder into the project with the name Models in that add Authentication folder and in
that add one Login and SignUp folder again

Solution 'User.Management.API' (2 of 2 projects)
└── User.Management.API
    ├── Connected Services
    ├── Dependencies
    ├── Properties
    ├── Controllers
    ├── Migrations
    ├── Models
    │   ├── Authentication
    │   │   ├── Login
    │   │   │   └── LoginModel.cs
    │   │   ├── SignUp
    │   │   │   └── RegisterUser.cs
    │   ├── ApplicationDbContext.cs
    │   ├── Response.cs
    ├── .editorconfig
    ├── appsettings.json
    ├── GlobalSuppressions.cs
    ├── Program.cs
└── User.Management.Service
    ├── Dependencies
    ├── Models
    │   ├── EmailConfiguration.cs
    │   ├── Message.cs
    ├── Services
    │   ├── GlobalSuppressions.cs



then create a class with the name RegisterUser.cs 
using System.ComponentModel.DataAnnotations;

namespace IdentityDemowithTokeninCore.Models.Authentication.SignUp
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



