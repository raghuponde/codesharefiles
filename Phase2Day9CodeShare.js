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

go to app settings and add the configuration like this 

{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Server=LAPTOP-4G8BHPK9\\SQLEXPRESS;Database=UserMgDB;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}

add a new class in Models folder in ApplicationDbContext

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace IdentityDemowithTokeninCore.Models
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>
        options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}

in progam cs file 
-------------------
 builder.Services.AddDbContext<ApplicationDbContext>
     (options =>options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

 // For Identity
 builder.Services.AddIdentity<IdentityUser, IdentityRole>()
 .AddEntityFrameworkStores<ApplicationDbContext>()
 .AddDefaultTokenProviders();

 // adding basic authentication
 builder.Services.AddAuthentication(options =>
 {
     options.DefaultAuthenticateScheme =
     JwtBearerDefaults.AuthenticationScheme;
     options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
     options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
 });

Now run the migrations 

build the solution once then run migration 
add-migration 'intiasetup'
update-database 

so like this some empty  identity tables will be created

now in ApplicationDbContext add roles and agin run migration and update database to see the roles in aspnetroles table okay 

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace IdentityDemowithTokeninCore.Models
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>
        options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            SeedRoles(builder);
        }

        private static void SeedRoles(ModelBuilder builder)
        {
            builder.Entity<IdentityRole>().HasData
            (
            new IdentityRole()
            {
                Name = "Admin",
                ConcurrencyStamp = "1",
                NormalizedName = "Admin"
            },
            new IdentityRole()
            {
                Name = "User",
                ConcurrencyStamp = "2",
                NormalizedName = "User"
            },
            new IdentityRole()
            {
                Name = "HR",
                ConcurrencyStamp = "3",
                NormalizedName = "HR"
            }
            );
        }
    }
}
so roles are added now next users i have to create and login i have to do 

and add one class into the Models folder with the name Response.cs

namespace IdentityDemowithTokeninCore.Models
{
    public class Response
    {
        public string? Status { get; set; }
        public string? Message { get; set; }

    }
}

next add AuthController in controller folder of empty of api type only add it 


 private readonly UserManager<IdentityUser> _userManager;
 private readonly SignInManager<IdentityUser> _signInManager;
 private readonly RoleManager<IdentityRole> _roleManager;

 private readonly IConfiguration _configuration;

 public AuthController(UserManager<IdentityUser> userManager,
     RoleManager<IdentityRole> roleManager,
     SignInManager<IdentityUser> signInManager, IConfiguration configuration)
 {
     _userManager = userManager;
     _roleManager = roleManager;
     _signInManager = signInManager;

     _configuration = configuration;
 }


 [HttpPost]
 public async Task<IActionResult> Register([FromBody] RegisterUser registerUser, string role)
 {
     //Check User Exist 
     var userExist = await _userManager.FindByEmailAsync(registerUser.Email);
     if (userExist != null)
     {
         return StatusCode(StatusCodes.Status403Forbidden,
             new Response { Status = "Error", Message = "User already exists!" });
     }

     //Add the User in the database
     IdentityUser user = new()
     {
         Email = registerUser.Email,
         SecurityStamp = Guid.NewGuid().ToString(),
         UserName = registerUser.Username

     };
     if (await _roleManager.RoleExistsAsync(role))
     {
         var result = await _userManager.CreateAsync(user, registerUser.Password);
         if (!result.Succeeded)
         {
             return StatusCode(StatusCodes.Status500InternalServerError,
                 new Response { Status = "Error", Message = "User Failed to Create" });
         }
         //Add role to the user....

         await _userManager.AddToRoleAsync(user, role);





         return StatusCode(StatusCodes.Status200OK,
             new Response { Status = "Success", Message = $"User created SuccessFully" });

     }
     else
     {
         return StatusCode(StatusCodes.Status500InternalServerError,
                 new Response { Status = "Error", Message = "This Role Doesnot Exist." });
     }


 }






