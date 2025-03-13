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

next is 



