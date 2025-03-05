ENTITY FRAMEWORK
*****************
https://www.tutorialspoint.com/entity_framework/index.htm

https://www.entityframeworktutorial.net/entityframework6/what-is-entityframework.aspx


from the above two links only take theoretical knowledge And understand the concepts and its architecture of entity framework

DBFirst apprach i am doing it 
---------------------------------

now open visual studi 2022 and add new asp.net core mvc project here let it be .net core 8.0 version only 
  
right clik on dependencies and manage nugget packages and go to browse and type this packages and install  it in your application 

which version i will tell wait so  cann use laetst one 9.0.2 if any issues comes i will change the version as i am using latest 8.0 core so  here in entity framework also 

i can use latest only 

Microsoft.EntityFrameworkCore  
Microsoft.EntityFrameworkCore.SqlServer
Microsoft.EntityFrameworkCore.Tools 

and then in package manager console fire this command 

Tools--->Nugget package manager--->package manager console 

so below command u have to type here 

Scaffold-DbContext 'Data Source=LAPTOP-4G8BHPK9\SQLEXPRESS;Initial Catalog=NORTHWND;Integrated Security=True;TrustServerCertificate=True;' Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models

data source keep your sql server name so now what i am doing is what and all tables are there in Nothwind dataabse For all those tables I'm creating classes in the
 models folder using this command

keep your sql server open also now 


so you can see in my Models folder by doing reverse enineering i can see all the classes generated for all the tables in northwind database 
EntityFrameworkDemo1
│── Connected Services
│── Dependencies
│   │── Analyzers
│   │── Frameworks
│   │   │── Packages
│   │   │   │── Microsoft.EntityFrameworkCore (9.0.2)
│   │   │   │── Microsoft.EntityFrameworkCore.SqlServer (9.0.2)
│   │   │   │── Microsoft.EntityFrameworkCore.Tools (9.0.2)
│── Properties
│── wwwroot
│── Controllers
│   │── HomeController.cs
│── Models
│   │── AlphabeticalListOfProduct.cs
│   │── Category.cs
│   │── CategorySalesFor1997.cs
│   │── Course.cs
│   │── CurrentProductList.cs
│   │── Customer.cs
│   │── CustomerAndSuppliersByCity.cs
│   │── CustomerDemographic.cs
│   │── Customerordersview.cs
│   │── Employee.cs
│   │── ErrorViewModel.cs
│   │── Hi.cs
│   │── Invoice.cs
│   │── NorthwndContext.cs
│   │── Order.cs
│   │── OrderDetail.cs
│   │── OrderDetailsExtended.cs
│   │── OrdersQry.cs
│   │── OrderSubtotal.cs
│   │── Post.cs
│   │── Product.cs
│   │── ProductsAboveAveragePrice.cs
│   │── ProductSalesFor1997.cs
│   │── ProductsByCategory.cs
│   │── QuarterlyOrder.cs
│   │── Region.cs
│   │── SalesByCategory.cs


so something like this will be genenated in Models folder of project in solution explorere

so below commands are for just exta knowledge dont use it 

In the models folder if u want to generate only single table so belwo command is used 
Scaffold-DbContext 'Data Source=DESKTOP-IIH2P8R\SQLEXPRESS;Initial Catalog=NORTHWND;Integrated Security=true;TrustServerCertificate=true;' Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -Tables [dbo].[Customers]

If u want to genrate with force if it is not getting genrated u can use below command 
Scaffold-DbContext 'Data Source=SUPRAJA\SQLEXPRESS;Initial Catalog=NORTHWND;Integrated Security=true;TrustServerCertificate=true;' Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -Tables [dbo].[Products] -Force



so next thing  is 
Now create  an contoller of mvc type  with the name NorthWindController emoty only create it 
which will look like this 


  using Microsoft.AspNetCore.Mvc;

namespace EntityFrameworkDemo1.Controllers
{
    public class NorthWindController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}





and do this 

in db :
----------
-- give me all the customers who are living in spain Country

select CustomerID,CompanyName ,ContactName from [dbo].[Customers] where 
Country='Spain'


in front end 
---------------
using Microsoft.AspNetCore.Mvc;
using EntityFrameworkDemo1.Models;

namespace EntityFrameworkDemo1.Controllers
{
    public class NorthWindController : Controller
    {

        NorthwndContext cnt=new NorthwndContext();

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult spainCustomers()
        {
            var spaincustomers = from cust in cnt.Customers
                                 where cust.Country == "Spain"
                                 select new Customer
                                   {
                                      CustomerId= cust.CustomerId,
                                     ContactName=  cust.ContactName,
                                     CompanyName=  cust.CompanyName
                                   };
            return View(spaincustomers);
        }
    }
}

now i have to genrate view for this collection of spain customers

right click on the action mehod and add view --->razor view --->template as list --->which  model Customers and conext u have to select  NorthwndContext

and after geenrating view it will look like this i had added ids also as it was not showing in screen 

  @model IEnumerable<EntityFrameworkDemo1.Models.Customer>

@{
    ViewData["Title"] = "spainCustomers";
}

<h1>spainCustomers</h1>

<p>
    <a asp-action="Create">Create New</a>
</p>
<table class="table">
    <thead>
        <tr>
            <th>
                @Html.DisplayNameFor(model => model.CustomerId)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.CompanyName)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.ContactName)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.ContactTitle)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.Address)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.City)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.Region)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.PostalCode)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.Country)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.Phone)
            </th>
            <th>
                @Html.DisplayNameFor(model => model.Fax)
            </th>
            <th></th>
        </tr>
    </thead>
    <tbody>
@foreach (var item in Model) {
        <tr>
                <td>
                    @Html.DisplayFor(modelItem => item.CustomerId)
                </td>
            <td>
                @Html.DisplayFor(modelItem => item.CompanyName)
            </td>
            <td>
                @Html.DisplayFor(modelItem => item.ContactName)
            </td>
            <td>
                @Html.DisplayFor(modelItem => item.ContactTitle)
            </td>
            <td>
                @Html.DisplayFor(modelItem => item.Address)
            </td>
            <td>
                @Html.DisplayFor(modelItem => item.City)
            </td>
            <td>
                @Html.DisplayFor(modelItem => item.Region)
            </td>
            <td>
                @Html.DisplayFor(modelItem => item.PostalCode)
            </td>
            <td>
                @Html.DisplayFor(modelItem => item.Country)
            </td>
            <td>
                @Html.DisplayFor(modelItem => item.Phone)
            </td>
            <td>
                @Html.DisplayFor(modelItem => item.Fax)
            </td>
            <td>
                <a asp-action="Edit" asp-route-id="@item.CustomerId">Edit</a> |
                <a asp-action="Details" asp-route-id="@item.CustomerId">Details</a> |
                <a asp-action="Delete" asp-route-id="@item.CustomerId">Delete</a>
            </td>
        </tr>
}
    </tbody>
</table>

Now u say port/NorthWind/spainCustomers u will get some data in view

now Write and action method to search customer based on contact name where again I need customer table only

now again in Db 
--------------

--searching customer 

select CustomerID,CompanyName ,ContactName from [dbo].[Customers] where 
ContactName='yang Wang'

  in the front end 
  --------------
public IActionResult SearchCustomer(string contactname)
{
    var searchcustomer = from cust in cnt.Customers
                         where cust.ContactName == contactname
                         select new Customer
                         {
                             CustomerId = cust.CustomerId,
                             ContactName = cust.ContactName,
                             CompanyName = cust.CompanyName
                         };

    var query1 = searchcustomer.Single();
    return View(query1);
}

add view -->razor view--->template as details --->which  model Customers and conext u have to select  NorthwndContext


  type below url   
  https://localhost:7133/NorthWind/SearchCustomer/?contactname=yang wang
  
in Db 
------

select * from categories 
select * from Products;

select p1.ProductName,c1.CategoryName from Products p1 join Categories c1
on p1.CategoryID=c1.CategoryID where c1.CategoryName='Beverages'









