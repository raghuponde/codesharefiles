open the web api of student in day 10 folder only web api so in this web api i want to include Authcontroller 

and want to provide Authentication and Authoriztion using tokens in this web api this is frist task 

Add these depencies of version 8.0.13 

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


