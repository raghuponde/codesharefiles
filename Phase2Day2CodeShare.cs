Now i am opening yesterdays program only of MVCDemo1 so you also open yesterdays project as i am adding some small code in it 

Now what i want to do is in a single view means in a single page of design i want to use muliple models earleir i used either single model or colllection of same model 
but i have not used multiple models in the same page of .cshmtl so let us do that 

There will be situation where for generating reports you may need data from multiple models as all data is not present in single model .

  write a actionmethod in Home controller again 
  
  on top of the action method first deine Deparment collection like this 
  
 List<Department> deptlist = new List<Department>()
     {
         new Department{Deptid=10,DeptName="Sales"},
         new Department{Deptid=20,DeptName="HR"},
         new Department{Deptid=30,DeptName="Software"}
     };

 public IActionResult EmpDeptViewModelDemo(int empid)
 {
     var query1 = deptlist.ToList();
     Employee emp=emplist.Where(x=>x.EmployeeID == empid).FirstOrDefault();
     var query2 = emp;

     return View(query1,query2);

 }

Above i want to send two models one is collection of depts and another is single empooyee based on what i pass empid 

but above code is givng error means i cannot pass multiple object to view from the cotroller so what to do now ????

so you have to create a model which will take other models as proepties into them 

go go to Models folder and add one class with the name EmpDeptViewModel 

  and the class shoudl be liek this 

namespace MVCDemo1.Models
{
    public class EmpDeptViewModel
    {

        public List<Department> deptlist { set; get; }

        public Employee emp { set; get; }

        public DateTime date { set; get; }
    }
}


and now the action method will be liek this i will send single objet only but that single objec will be other objects in then 

 public IActionResult EmpDeptViewModelDemo(int empid)
 {
     var query1 = deptlist.ToList();
     Employee emp=emplist.Where(x=>x.EmployeeID == empid).FirstOrDefault();
     var query2 = emp;

     // return View(query1,query2);
     EmpDeptViewModel empdeptobj = new EmpDeptViewModel()
     {
         deptlist = query1,
         emp=query2,
         date=DateTime.Now
     };
     return View(empdeptobj);

 }
    
Now add a view add view -->razor view -->add 

  and in the razor view put this code like this 

  EmpViewModelDemo.cshtml
  -------------------------

@model MVCDemo1.Models.EmpDeptViewModel;
@{
    ViewData["Title"] = "EmpDeptViewModelDemo";
}

<h1>EmpDeptViewModelDemo</h1>

so it will look like this and on top i had added new model which i just created 

further chnage in the design will be like this 

  @model MVCDemo1.Models.EmpDeptViewModel;
@{
    ViewData["Title"] = "EmpDeptViewModelDemo";
}

<h1>EmpDeptViewModelDemo</h1>

<h2>Good Morning Todays Date :@Model.date </h2>
<h3>Dept details </h3>
<style>
    table, th, td {
        border: 1px solid black;
    }
</style>
<body>
    <table border="1" cellpadding="1" cellspacing="1">
        <tr>
            <th>DepartmentID </th>
            <th>DepartmentName </th>
           
        </tr>
        @foreach (Department  dept in Model.deptlist)
        {
            <tr>
                <td>@dept.Deptid</td>
                <td>@dept.DeptName</td>
               
            </tr>
        }
    </table>

    
    
        <table border="1" cellpadding="1" cellspacing="1">
            <tr>
                <th>EmployeeID </th>
                <th>EmployeeName </th>
                <th>EmployeeSalary </th>
            </tr>
        @if (Model.emp != null) 
        {
            <tr>
                <td>@Model.emp.EmployeeID</td>
                <td>@Model.emp.EmpName</td>
                <td>@Model.emp.Salary</td>
            </tr>
        }
        else
        {
            <tr>
                <td>There is no employee with this id</td>
            </tr>
        }
        </table>
   
</body>


  https://localhost:7257/Home/EmpDeptViewModelDemo/?empid=101

  Now you can open or create a new proejct in visual studio give solution name as Phase2Day2Projects and project name as TagHelperDemo1 name u can give it 
In ASP.NET Core, Tag Helpers enable server-side code to participate in creating and rendering HTML elements in Razor files. Tag Helpers are designed to make server-side code more maintainable and easier to work with when rendering dynamic content in views.

Here’s a list of some common Tag Helpers used in ASP.NET Core, along with examples:

1. Anchor Tag Helper (<a>)

The Anchor Tag Helper generates hyperlinks. You can use the asp-controller, asp-action, and asp-route attributes to dynamically generate links to different parts of your application.

<a asp-controller="Home" asp-action="Index">Home</a>

This generates 

<a href="/Home/Index">Home</a>


2. Form Tag Helper (<form>)

The Form Tag Helper helps to generate a form element that posts data to the specified action.

<form asp-controller="Account" asp-action="Login" method="post">
    <input asp-for="Username" />
    <input asp-for="Password" type="password" />
    <button type="submit">Login</button>
</form>

and this generates 

<form action="/Account/Login" method="post">
    <input type="text" id="Username" name="Username">
    <input type="password" id="Password" name="Password">
    <button type="submit">Login</button>
</form>


3. Input Tag Helper (<input>)

The Input Tag Helper binds the input field to a model property and handles input validation and value display.

<input asp-for="Email" type="email" class="form-control" />

this generates 

<input type="email" id="Email" name="Email" class="form-control" value="(model value)">

4. Label Tag Helper (<label>)

The Label Tag Helper generates a label element linked to a specific model property.

<label asp-for="Email"></label>

this generates 

<label for="Email">Email</label>


5. Validation Message Tag Helper (<span>)

The Validation Message Tag Helper displays validation error messages for a specific model property.

Example:

<span asp-validation-for="Email" class="text-danger"></span>

this generates 

<span class="text-danger">Email is required</span>


6. Validation Summary Tag Helper
The Validation Summary Tag Helper shows a summary of validation errors for the model.

Example:


<div asp-validation-summary="ModelOnly" class="text-danger"></div>

This generates:


<div class="text-danger">
    <ul>
        <li>Email is required</li>
        <li>Password is required</li>
    </ul>
</div>

7. Select Tag Helper (<select>)

The Select Tag Helper is used to generate a select element bound to a model property.

Example:


<select asp-for="Country" asp-items="Model.CountryList"></select>

This generates:

<select id="Country" name="Country">
    <option value="1">United States</option>
    <option value="2">Canada</option>
</select>

8. TextArea Tag Helper (<textarea>)

The TextArea Tag Helper is used to bind a multi-line text box to a model property.

Example:


<textarea asp-for="Comments" class="form-control"></textarea>

This generates:

<textarea id="Comments" name="Comments" class="form-control"></textarea>


-->what  is validation means checking the data which we write inside the input controls of a form it is nothing filtering the user input

-->the valdiation is of two types :

-->server side :means after filling the form i click submit button then they get applied that is server side validation means the code of checking will go the server and its get valdiated the browser will refreseh once whenever i am doing server side validation

-->client side : here without refreshing the page using javascript within the browser i will do it means it is not that much secure any body can hack your code .

-->in this validation we use different attibutes which we place on top of model here attribute means in built available attiributes 
like required ,maxlength ,minlength,emailaddress etc ..




Now let us go with demo now 
-------------------------------
now create a new mvc asp.net core project 

now go to Models folder and add this class UserViewModel


  using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace TagHelperdemo1.Models
{
    public class UserViewModel
    {
        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "Country is required")]
        public string Country { get; set; }


        public List<SelectListItem> CountryList { get; set; }
    }
}


Then add one Controller of mvc type not api type witht the AccountController and add it 

using Microsoft.AspNetCore.Mvc;

namespace TagHelperdemo1.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}


by default it will look like this 
add one method in controller like ths 

    private List<SelectListItem> GetCountryList()
    {
        return new List<SelectListItem>
        {
            new SelectListItem { Value = "US", Text = "United States" },
            new SelectListItem { Value = "CA", Text = "Canada" },
            new SelectListItem { Value = "IN", Text = "India" }
        };
    }
  
so controller code after addding 
----------------------------------
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace TagHelperdemo1.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        private List<SelectListItem> GetCountryList()
        {
            return new List<SelectListItem>
        {
            new SelectListItem { Value = "US", Text = "United States" },
            new SelectListItem { Value = "CA", Text = "Canada" },
            new SelectListItem { Value = "IN", Text = "India" }
        };
        }
    }
}

Next add one get method of register like this
--------------------------
  [HttpGet]
  public IActionResult Register ()
  {
      // Prepopulate the country list
      var model = new UserViewModel
      {
          CountryList = GetCountryList() // Helper method to get the country list
      };

      return View(model);
  }

now right click and add one razor view for this action metod which will intially will look like this 

  

@{
    ViewData["Title"] = "Register";
}

<h1>Register</h1>

now i want to add a form here in above view 

Register.cshtml
------------------

@model TagHelperdemo1.Models.UserViewModel;
@{
    ViewData["Title"] = "Register";
}

<h1>Register</h1>

@if (ViewBag.status == "registration succesfful")
{
    <div class="alert alert-success">
      <h2>@ViewBag.status</h2>
    </div>
}
else
{
    <div class="alert alert-danger">
        <h2>@ViewBag.status</h2>
    </div>
}


<form asp-controller="Account" asp-action="Register" method="post">

    <div class="form-group">

        <label asp-for="Username"></label>
        <input asp-for="Username" class="form-control"/>
        <span asp-validation-for="Username" class="text-danger"></span>
    </div>
    <div class="form-group">
        <label asp-for="Email"></label>
        <input asp-for="Email" type="email" class="form-control" />
        <span asp-validation-for="Email" class="text-danger"></span>
    </div>

    <div class="form-group">
        <label asp-for="Password"></label>
        <input asp-for="Password" type="password" class="form-control" />
        <span asp-validation-for="Password" class="text-danger"></span>
    </div>

    <div class="form-group">
        <label asp-for="Country"></label>
        <select asp-for="Country" asp-items="Model.CountryList" class="form-control"></select>
        <span asp-validation-for="Country" class="text-danger"></span>
    </div>

    <button type="submit" class="btn btn-primary">Register</button>
 <div asp-validation-summary="ModelOnly" class="text-danger"></div>
</form>
  
  AccountController.cs
  -----------------------
  using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using TagHelperdemo1.Models;

namespace TagHelperdemo1.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Register()
        {
            // Prepopulate the country list
            var model = new UserViewModel
            {
                
                CountryList = GetCountryList() // Helper method to get the country list
            };

            return View(model);
        }


        [HttpPost]
        public IActionResult Register(UserViewModel model)
        {
            // Always repopulate the CountryList before returning the view
           model.CountryList = GetCountryList();
            ModelState.Remove("CountryList");
            if(ModelState.IsValid)
            {
                ViewBag.status = "registration succesfful";
            }
            else
            {
                ViewBag.status = "registration not  succesfful";
            }
            return View(model);

        }
        private List<SelectListItem> GetCountryList()
        {
            return new List<SelectListItem>
        {
            new SelectListItem { Value = "US", Text = "United States" },
            new SelectListItem { Value = "CA", Text = "Canada" },
            new SelectListItem { Value = "IN", Text = "India" }
        };
        }
    }
}





  
