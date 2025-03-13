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

now change the AppDbContext like this 


using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using StudentReactWebApIDemo.Models;

namespace StudentReactWebApIDemo.Data
{
    public class AppDbContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<Student> Students { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}

and now go to app setting file 

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
  },
  "JWT": {
    "ValidAudience": "https://localhost:3000",
    "ValidIssuer": "https://localhost:7272",
    "Secret": "JWTAuthenticationHIGHsecuredPasswordVVVp1OHsssssdddasd7Xzyrsss"
  }
}

add this jwt settings 


next in program.cs file //here i had added 

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using StudentReactWebApIDemo.Data;
using System.Text;
using System.Configuration;

namespace StudentReactWebApIDemo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);


            builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            // For Identity // here i had added 
            builder.Services.AddIdentity<IdentityUser, IdentityRole>()
            .AddEntityFrameworkStores<AppDbContext>()
            .AddDefaultTokenProviders();




            // Add services to the container.

            builder.Services.AddControllers();

            // adding basic authentication // here i had addded
            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme =
                JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            });

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

            app.UseStaticFiles();

            app.UseCors("AllowAllOrigins");

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}

so this much you do it 

next is build the solution and run the migration now 

add-migration 'iniitsetup'

update-database 


now chek in your database identity tables will be created okay 

StudentCRUDDatabase will have identity tables along with studnets table here okay 

now in AppDbContext add roles and agin run migration and update database to see the roles in aspnetroles table okay 

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using StudentReactWebApIDemo.Models;

namespace StudentReactWebApIDemo.Data
{
    public class AppDbContext : IdentityDbContext<IdentityUser>
    {
        public DbSet<Student> Students { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
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

Then first build the application and do migrations 

    add-migration 'addedroles'

    update-database

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

so righ now AuthControllr will look like tis complete code 

using IdentityDemowithTokeninCore.Models.Authentication.SignUp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using IdentityDemowithTokeninCore.Models;

namespace IdentityDemowithTokeninCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

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


    }
}

once build the solution and then
Run the web api an insert one value of the user
Now i need to work on login method








