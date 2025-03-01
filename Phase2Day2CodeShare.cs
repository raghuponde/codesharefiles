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

    <div asp-validation-summary="All" asp-validation-summary="ModelOnly" class="text-danger"></div>

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

Now open another application wih the name TagHelperDemo2 and now i will change the model like this 

 in models folder 

 using System.ComponentModel.DataAnnotations;

namespace TagHelperDemo2.Models
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
    }
}

then create Account conttroller again 

using Microsoft.AspNetCore.Mvc;
using TagHelperDemo2.Models;
namespace TagHelperDemo2.Controllers
{
    public class AccountController : Controller
    {
        [HttpGet]
        public IActionResult Register()
        {
            UserViewModel model = new UserViewModel();
            // Render the form for registration
            return View(model);
        }

        [HttpPost]
        public IActionResult Register(UserViewModel model)
        {
            if (ModelState.IsValid)
            {
                TempData["Message"] = "Registration successful!";
                return RedirectToAction("Register");
            }

            // Return the view with validation errors
            return View(model);
        }
    }
}
and now add a view to register 

and code is like this for this 

  @model TagHelperDemo2.Models.UserViewModel
@{
    ViewData["Title"] = "Register";
}

<h1>Register</h1>

@if (TempData["Message"] != null)
{
    <div class="alert alert-success">
        @TempData["Message"]
    </div>
}

<form asp-controller="Account" asp-action="Register" method="post">
    <div class="form-group">
        <label asp-for="Username"></label>
        <input asp-for="Username" class="form-control" />
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
        <select asp-for="Country" class="form-control">
            <option value="">-- Select Country --</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
        </select>
        <span asp-validation-for="Country" class="text-danger"></span>
    </div>

    <button type="submit" class="btn btn-primary">Register</button>

    <div asp-validation-summary="All" asp-validation-summary="ModelOnly" class="text-danger"></div>
</form>


earlier programtically i was filling the drop down now in desing only i am filling the dropdown 


  in the above program i am doing server side validation means after clikcing the register button only red lines or it is validating 
  now i want to do clent side validation to do client side valdiation add theses links on top of the page 

  @model TagHelperDemo2.Models.UserViewModel
@{
    ViewData["Title"] = "Register";
}

<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.5.1.min.js"></script>
<script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.19.2/jquery.validate.min.js"></script>
<script src="https://ajax.aspnetcdn.com/ajax/mvc/5.2.3/jquery.validate.unobtrusive.min.js"></script>
<h1>Register</h1>

@if (TempData["Message"] != null)
{
    <div class="alert alert-success">
        @TempData["Message"]
    </div>
}

<form asp-controller="Account" asp-action="Register" method="post">
    <div class="form-group">
        <label asp-for="Username"></label>
        <input asp-for="Username" class="form-control" />
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
        <select asp-for="Country" class="form-control">
            <option value="">-- Select Country --</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
        </select>
        <span asp-validation-for="Country" class="text-danger"></span>
    </div>

    <button type="submit" class="btn btn-primary">Register</button>

    <div asp-validation-summary="All" asp-validation-summary="ModelOnly" class="text-danger"></div>
</form>


so when after doing frist click of register if i write properly and press tab to move it will go no need to press aagin register 
button because i am doing clinet side valdiation also

CRUD operation using a Model :
-----------------------------------------
Means for a model means for a class any class i want to define insert,update ,delete and read etc methods in Controller function means function for insert and function for update and all i want to write 
here i will use get and post methods and all i will validate the class means business rules also i will apply 

earlier manually i had gone into the view and written html code and embedded the model object s into it 
but now i will ask the visual studio to genrate the code for me in the view that thing is called as scafffolding.

so check program dog on this example ..

Get and Post methods are there for only insert ,update and delete functionalities


now open a new application asp.net core give name CRUDusingModel

in the models folder add one class like this 

  using System.ComponentModel.DataAnnotations;

namespace CRUDusingModel.Models
{
    public class Dog
    {

        [Required(ErrorMessage = "ID is required")]
        public int ID { set; get; }

        [Required(ErrorMessage = "Name is required"), MaxLength(222)]
        public string? Name { set; get; }

        [Required(ErrorMessage = "Age is required"),
            Range(0, 20, ErrorMessage = "Age should be between 0 to 20 only")]
        public int Age { set; get; }

    }
}


Now add one controlelr with the name DogContoller but dont select MVC empty controller with read and write actions u selct and say add 

you will get boilerplate code like this 

  using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CRUDusingModel.Controllers
{
    public class DogController : Controller
    {
        // GET: DogController
        public ActionResult Index()
        {
            return View();
        }

        // GET: DogController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: DogController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: DogController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DogController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: DogController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DogController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: DogController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}

now one by one i will do chnage in above code 

1st chnage 
------------
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CRUDusingModel.Models;
namespace CRUDusingModel.Controllers
{
    public class DogController : Controller
    {

        static private List<Dog> dogs = new List<Dog>();
        // GET: DogController
        public ActionResult Index()
        {
            return View();
        }


now go to get create action method and create a view graphically where include template as create and model as dog and generate the design 

and that desing will look like this 

 @model CRUDusingModel.Models.Dog

@{
    ViewData["Title"] = "Create";
}

<h1>Create</h1>

<h4>Dog</h4>
<hr />
<div class="row">
    <div class="col-md-4">
        <form asp-action="Create">
            <div asp-validation-summary="ModelOnly" class="text-danger"></div>
            <div class="form-group">
                <label asp-for="ID" class="control-label"></label>
                <input asp-for="ID" class="form-control" />
                <span asp-validation-for="ID" class="text-danger"></span>
            </div>
            <div class="form-group">
                <label asp-for="Name" class="control-label"></label>
                <input asp-for="Name" class="form-control" />
                <span asp-validation-for="Name" class="text-danger"></span>
            </div>
            <div class="form-group">
                <label asp-for="Age" class="control-label"></label>
                <input asp-for="Age" class="form-control" />
                <span asp-validation-for="Age" class="text-danger"></span>
            </div>
            <div class="form-group">
                <input type="submit" value="Create" class="btn btn-primary" />
            </div>
        </form>
    </div>
</div>

<div>
    <a asp-action="Index">Back to List</a>
</div>

@section Scripts {
    @{await Html.RenderPartialAsync("_ValidationScriptsPartial");}
}
 
now fill the post method like this 

// POST: DogController/Create
[HttpPost]
[ValidateAntiForgeryToken]
public ActionResult Create(Dog dog)
{
    try
    {
        if(ModelState.IsValid)
        {
            dogs.Add(dog);
            return  RedirectToAction("index");
        }
        else
        {
            return View("Create",dog);
        }
    }
    catch (Exception)
    {

        return View("Create", dog);
    }
}


and in Index metod 

public ActionResult Index()
{
    return View(dogs);
}

Now add a view for index method also means right click on index method and add view --->razor view -->template as List --->model as Dog 
--->geerate the view 

@model IEnumerable<CRUDusingModel.Models.Dog>

@{
    ViewData["Title"] = "Index";
}

<h1>Index</h1>

<p>
    <a asp-action="Create">Create New</a>
</p>
<table class="table">
    <thead>
        <tr>
            <th>
                @Html.DisplayNameFor(model => model.ID)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.Name)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.Age)
            </th>
            <th></th>
        </tr>
    </thead>
    <tbody>
@foreach (var item in Model) {
        <tr>
            <td>
                @Html.DisplayFor(modelItem => item.ID)
            </td>
            <td>
                @Html.DisplayFor(modelItem => item.Name)
            </td>
            <td>
                @Html.DisplayFor(modelItem => item.Age)
            </td>
            <td> 
                @Html.ActionLink("Edit", "Edit", new { /* id=item.PrimaryKey */ }) |
                @Html.ActionLink("Details", "Details", new { /* id=item.PrimaryKey */ }) |
                @Html.ActionLink("Delete", "Delete", new { /* id=item.PrimaryKey */ })
            </td>
        </tr>
}
    </tbody>
</table>


 now i will go the details view 

 // GET: DogController/Details/5
 public ActionResult Details(int id)
 {
     Dog d = new Dog();
     foreach(Dog dog in dogs)
     {
         if(dog.ID==id)
         {
             d.ID = dog.ID;
             d.Name = dog.Name;
             d.Age = dog.Age;
         }
     }
     return View(d);
 }

 now add a view for this details right click add view--->razor view --->drop down select template as details and model as dog and genrate the view 

 which will look like this
 @model CRUDusingModel.Models.Dog

@{
    ViewData["Title"] = "Details";
}

<h1>Details</h1>

<div>
    <h4>Dog</h4>
    <hr />
    <dl class="row">
        <dt class = "col-sm-2">
            @Html.DisplayNameFor(model => model.ID)
        </dt>
        <dd class = "col-sm-10">
            @Html.DisplayFor(model => model.ID)
        </dd>
        <dt class = "col-sm-2">
            @Html.DisplayNameFor(model => model.Name)
        </dt>
        <dd class = "col-sm-10">
            @Html.DisplayFor(model => model.Name)
        </dd>
        <dt class = "col-sm-2">
            @Html.DisplayNameFor(model => model.Age)
        </dt>
        <dd class = "col-sm-10">
            @Html.DisplayFor(model => model.Age)
        </dd>
    </dl>
</div>
<div>
    @Html.ActionLink("Edit", "Edit", new { /* id = Model.PrimaryKey */ }) |
    <a asp-action="Index">Back to List</a>
</div>
then 


 so first create the dog 
https://localhost:7069/Dog/details/2

in the index page view 

 <td>
         @Html.ActionLink("Edit", "Edit", new { id = item.ID }) |
     @Html.ActionLink("Details", "Details", new {  id=item.ID }) |
         @Html.ActionLink("Delete", "Delete", new { id = item.ID })
 </td>

 uncomment the code which as there and put above code 
so that u can jump to details page also through index page also  
 
 
 now come to edit method of dog controller and just genrate a view for it 

 same way sslect template as edit and model as dog 

 but let us fill the code of edit now but for get method of edit no need to write code 


 which will look like this 

 @model CRUDusingModel.Models.Dog

@{
    ViewData["Title"] = "Edit";
}

<h1>Edit</h1>

<h4>Dog</h4>
<hr />
<div class="row">
    <div class="col-md-4">
        <form asp-action="Edit">
            <div asp-validation-summary="ModelOnly" class="text-danger"></div>
            <div class="form-group">
                <label asp-for="ID" class="control-label"></label>
                <input asp-for="ID" class="form-control" />
                <span asp-validation-for="ID" class="text-danger"></span>
            </div>
            <div class="form-group">
                <label asp-for="Name" class="control-label"></label>
                <input asp-for="Name" class="form-control" />
                <span asp-validation-for="Name" class="text-danger"></span>
            </div>
            <div class="form-group">
                <label asp-for="Age" class="control-label"></label>
                <input asp-for="Age" class="form-control" />
                <span asp-validation-for="Age" class="text-danger"></span>
            </div>
            <div class="form-group">
                <input type="submit" value="Save" class="btn btn-primary" />
            </div>
        </form>
    </div>
</div>

<div>
    <a asp-action="Index">Back to List</a>
</div>

@section Scripts {
    @{await Html.RenderPartialAsync("_ValidationScriptsPartial");}
}


add dog from create and from index clcik edit 


 you can see the form of dog to edit it 

 so post methd of edit 

 [HttpPost]
[ValidateAntiForgeryToken]
public ActionResult Edit(Dog d)
{
    try
    {
        if (!ModelState.IsValid)
        {
            return View("Edit", d);

        }
        else
        {
            foreach (Dog dog in dogs)
            {
                if (dog.ID == d.ID)
                {
                    dog.Name = d.Name;
                    dog.Age = d.Age;
                }
            }
            return RedirectToAction("Index");
        }

    }
    catch (Exception)
    {

        return View("Edit", d);
    }
}

now write the code for delete get method 

 // GET: DogController/Delete/5
        public ActionResult Delete(int id)
        {

            Dog d = new Dog();
            foreach (Dog dog in dogs)
            {
                if (dog.ID == id)
                {
                    d.ID = dog.ID;
                    d.Name = dog.Name;
                    d.Age = dog.Age;
                }
            }
            return View(d);
        }
now generate view for delete by going to get method of delete which will look like this 

@model CRUDusingModel.Models.Dog

@{
    ViewData["Title"] = "Delete";
}

<h1>Delete</h1>

<h3>Are you sure you want to delete this?</h3>
<div>
    <h4>Dog</h4>
    <hr />
    <dl class="row">
        <dt class = "col-sm-2">
            @Html.DisplayNameFor(model => model.ID)
        </dt>
        <dd class = "col-sm-10">
            @Html.DisplayFor(model => model.ID)
        </dd>
        <dt class = "col-sm-2">
            @Html.DisplayNameFor(model => model.Name)
        </dt>
        <dd class = "col-sm-10">
            @Html.DisplayFor(model => model.Name)
        </dd>
        <dt class = "col-sm-2">
            @Html.DisplayNameFor(model => model.Age)
        </dt>
        <dd class = "col-sm-10">
            @Html.DisplayFor(model => model.Age)
        </dd>
    </dl>
    
    <form asp-action="Delete">
        <input type="submit" value="Delete" class="btn btn-danger" /> |
        <a asp-action="Index">Back to List</a>
    </form>
</div>

Post method of delete 

    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Delete(Dog d)
    {
        try
        {
            foreach (Dog dog in dogs)
            {
                if (dog.ID == d.ID)
                {
                    dogs.Remove(dog);
                    break;
                }
            }
            return RedirectToAction("Index");
        }
        catch (Exception)
        {

            return View();
        }
    }
}
complete code for dog contoller
---------------------------------
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CRUDusingModel.Models;
namespace CRUDusingModel.Controllers
{
    public class DogController : Controller
    {

        static private List<Dog> dogs = new List<Dog>();
        // GET: DogController
        public ActionResult Index()
        {
            return View(dogs);
        }

        // GET: DogController/Details/5
        public ActionResult Details(int id)
        {
            Dog d = new Dog();
            foreach(Dog dog in dogs)
            {
                if(dog.ID==id)
                {
                    d.ID = dog.ID;
                    d.Name = dog.Name;
                    d.Age = dog.Age;
                }
            }
            return View(d);
        }

        // GET: DogController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: DogController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Dog dog)
        {
            try
            {
                if(ModelState.IsValid)
                {
                    dogs.Add(dog);
                    return  RedirectToAction("index");
                }
                else
                {
                    return View("Create",dog);
                }
            }
            catch (Exception)
            {

                return View("Create", dog);
            }
        }

        // GET: DogController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: DogController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Dog d)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return View("Edit", d);

                }
                else
                {
                    foreach (Dog dog in dogs)
                    {
                        if (dog.ID == d.ID)
                        {
                            dog.Name = d.Name;
                            dog.Age = d.Age;
                        }
                    }
                    return RedirectToAction("Index");
                }

            }
            catch (Exception)
            {

                return View("Edit", d);
            }
        }

        // GET: DogController/Delete/5
        public ActionResult Delete(int id)
        {

            Dog d = new Dog();
            foreach (Dog dog in dogs)
            {
                if (dog.ID == id)
                {
                    d.ID = dog.ID;
                    d.Name = dog.Name;
                    d.Age = dog.Age;
                }
            }
            return View(d);
        }

        // POST: DogController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(Dog d)
        {
            try
            {
                foreach (Dog dog in dogs)
                {
                    if (dog.ID == d.ID)
                    {
                        dogs.Remove(dog);
                        break;
                    }
                }
                return RedirectToAction("Index"); 
            }
            catch (Exception)
            {

                return View();
            }
        }
    }
}

i want to delete directly from index page without going to post metod where i will confirm do u want to delete 
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CRUDusingModel.Models;
namespace CRUDusingModel.Controllers
{
    public class DogController : Controller
    {

        static private List<Dog> dogs = new List<Dog>();
        // GET: DogController
        public ActionResult Index()
        {
            return View(dogs);
        }

        // GET: DogController/Details/5
        public ActionResult Details(int id)
        {
            Dog d = new Dog();
            foreach(Dog dog in dogs)
            {
                if(dog.ID==id)
                {
                    d.ID = dog.ID;
                    d.Name = dog.Name;
                    d.Age = dog.Age;
                }
            }
            return View(d);
        }

        // GET: DogController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: DogController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Dog dog)
        {
            try
            {
                if(ModelState.IsValid)
                {
                    dogs.Add(dog);
                    return  RedirectToAction("index");
                }
                else
                {
                    return View("Create",dog);
                }
            }
            catch (Exception)
            {

                return View("Create", dog);
            }
        }

        // GET: DogController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: DogController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Dog d)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return View("Edit", d);

                }
                else
                {
                    foreach (Dog dog in dogs)
                    {
                        if (dog.ID == d.ID)
                        {
                            dog.Name = d.Name;
                            dog.Age = d.Age;
                        }
                    }
                    return RedirectToAction("Index");
                }

            }
            catch (Exception)
            {

                return View("Edit", d);
            }
        }

        // GET: DogController/Delete/5
        //public ActionResult Delete(int id)
        //{

        //    Dog d = new Dog();
        //    foreach (Dog dog in dogs)
        //    {
        //        if (dog.ID == id)
        //        {
        //            d.ID = dog.ID;
        //            d.Name = dog.Name;
        //            d.Age = dog.Age;
        //        }
        //    }
        //    return View(d);
        //}

        //// POST: DogController/Delete/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Delete(Dog d)
        //{
        //    try
        //    {
        //        foreach (Dog dog in dogs)
        //        {
        //            if (dog.ID == d.ID)
        //            {
        //                dogs.Remove(dog);
        //                break;
        //            }
        //        }
        //        return RedirectToAction("Index");
        //    }
        //    catch (Exception)
        //    {

        //        return View();
        //    }
        //}

        // GET: DogController/Delete/5
        public ActionResult Delete(int id)
        { 
            var dogToDelete = dogs.FirstOrDefault(d => d.ID == id);
            if (dogToDelete != null)
            {
                dogs.Remove(dogToDelete);
            }
            return RedirectToAction("Index");
        }

    }
}

on this model i want to se custom validation 

using System.ComponentModel.DataAnnotations;

namespace CRUDusingModel.Models
{
    public class Dog
    {

        [Required(ErrorMessage = "ID is required")]
        public int ID { set; get; }

        [Required(ErrorMessage = "Name is required"), MaxLength(222)]
        public string? Name { set; get; }

        [Required(ErrorMessage = "Age is required"),
            Range(0, 20, ErrorMessage = "Age should be between 0 to 20 only")]
        public int Age { set; get; }

    }
}


  Means i will enter in text box Age only even numbers if i enter odd number for that also it sholuld say enter age in even numbers
Go to the project and in that add one class with the name EvenValidation 
using System.ComponentModel.DataAnnotations;

namespace CustomvalidationAndmoreTypesinValidation
{
    public class EvenValidation : ValidationAttribute
    {

        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value != null)
            {

                int value1 = Convert.ToInt32(value);

                if (value1 % 2 == 0)
                {
                    return ValidationResult.Success;
                }



            }
            return new ValidationResult("Please enter only age of even numbers ");


        }



    }
}

 
