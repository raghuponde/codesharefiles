
 Data sources means which provides data 

Types of data sources :

--->flat files like .txt,xml etc they provide data (file hanlding) 

--->collection objects also contains data like array ,arraylist etc (programming like for loops and for each loop etc  )

--->tables also contain data (to reqtrive data sql is used,ado.net etc )

The same data u want to access from different data sources provided in easy way 
then u will use linq 

if u are using linq to access objects in memory objects then it is called linqtoobjects

if u are using linq to access sql then it is called as linq to sql 

thrid party softwares access linq to amazon is also there 



The acronym LINQ stands for Language Integrated Query.

Microsoft’s query language is
fully integrated and offers easy data access from in-memory objects, databases, XML
documents, and many more. 

syntax will be like sql way but 
 select comes last and from comes first and in between where ,order by and other functionalities can be used .

create one fodler with the name Day1 and create a new console .net core prject with the name linqdemo using visual studio 2022 
.net 8.0 use it 

 same thing in vs code what u have to do 

  dotnet new console -o linqdemo --use-program-main

  and then do dotnet build and dotnet run 

namespace LinqDemo
{
     class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = new int[] { 12, 3, 45, 67, 99, 103, 51, 22, 61 };

            string[] names = new string[] { "ravi", "suresh", "sita", "mahesh", "kishore " };


            // give me all the number less than 30 in array numbers 

            // using query syntax 

            var lessthan30 = from number in numbers where number < 30 select number;

            Console.WriteLine("priting numbers less than 30 using query syntax  ");
            foreach(int num1 in lessthan30)
            {
                Console.Write($"{num1}  ");
            }

            // using method syntax 

            var lessthan30_2 = numbers.Where(x => x < 20);//lambda expression
            Console.WriteLine("\npriting numbers less than 30 using method syntax  ");
            foreach (int num1 in lessthan30_2)
            {
                Console.Write($"{num1}  ");
            }

            // give me all the numbers which are odd using method and query syntax 

            var oddnums = numbers.Where(x => x % 2 != 0);
            var oddnums2=from number in numbers where number % 2 != 0 select number;
            Console.WriteLine("\ndisplayng odd nums ");
            foreach (int num1 in oddnums)
            {
                Console.Write($"{num1} ");
            }
            Console.WriteLine("\ndisplayng odd nums usng query syntax ");
            foreach (int num1 in oddnums2)
            {
                Console.Write($"{num1} ");
            }

            //sum of elements in a array 

            var sumquery = (from number in numbers select number).Sum();
            var sumquery2 = numbers.Sum();
            Console.WriteLine($"\nThe sum is {sumquery} \n with method syntax {sumquery2}");

            // give me all the names starting with s

            var nameswiths = from name in names where name.StartsWith("s") select name;
            var namewiths_2 = names.Where(x => x.StartsWith("s"));

            Console.WriteLine("Names starting with s are ...");
            foreach(string name in nameswiths)
            {
                Console.WriteLine($"{name}");
            }
            Console.ReadLine();
        } 
    }
}

  Now create one class Customer like this in the namespace not inside the class and put the methods here as given below 
namespace LinqDemo
{

    public class Customer
    {
        public int CustomerID { set; get; }
        public string FirstName { set; get; }
        public string LastName { set; get; }
        public string City { set; get; }


        public static List<Customer> Retrive()
        {
            List<Customer> custlist = new List<Customer>
            {
                new Customer { CustomerID = 101, FirstName = "suresh", LastName = "babu", City = "Hyderabad" },
                new Customer { CustomerID = 102, FirstName = "Mahesh", LastName = "naidu", City = "Mysore" },
                new Customer { CustomerID = 103, FirstName = "Kranthi", LastName = "kumari", City = "Bangalore" },
                new Customer { CustomerID = 104, FirstName = "Narendra", LastName = "Jha", City = "Delhi" },
                new Customer { CustomerID = 101, FirstName = "Vithal", LastName = "Kumar", City = "Hyderabad" }
            };

            return custlist;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = new int[] { 12, 3, 45, 67, 99, 103, 51, 22, 61 };

            string[] names = new string[] { "ravi", "suresh", "sita", "mahesh", "kishore " };


            // give me all the number less than 30 in array numbers 

            // using query syntax 

            var lessthan30 = from number in numbers where number < 30 select number;

            Console.WriteLine("priting numbers less than 30 using query syntax  ");
            foreach(int num1 in lessthan30)
            {
                Console.Write($"{num1}  ");
            }

            // using method syntax 

            var lessthan30_2 = numbers.Where(x => x < 20);//lambda expression
            Console.WriteLine("\npriting numbers less than 30 using method syntax  ");
            foreach (int num1 in lessthan30_2)
            {
                Console.Write($"{num1}  ");
            }

            // give me all the numbers which are odd using method and query syntax 

            var oddnums = numbers.Where(x => x % 2 != 0);
            var oddnums2=from number in numbers where number % 2 != 0 select number;
            Console.WriteLine("\ndisplayng odd nums ");
            foreach (int num1 in oddnums)
            {
                Console.Write($"{num1} ");
            }
            Console.WriteLine("\ndisplayng odd nums usng query syntax ");
            foreach (int num1 in oddnums2)
            {
                Console.Write($"{num1} ");
            }

            //sum of elements in a array 

            var sumquery = (from number in numbers select number).Sum();
            var sumquery2 = numbers.Sum();
            Console.WriteLine($"\nThe sum is {sumquery} \n with method syntax {sumquery2}");

            // give me all the names starting with s

            var nameswiths = from name in names where name.StartsWith("s") select name;
            var namewiths_2 = names.Where(x => x.StartsWith("s"));

            Console.WriteLine("Names starting with s are ...");
            foreach(string name in nameswiths)
            {
                Console.WriteLine($"{name}");
            }

            // retrive customer list and dislay full name by concateninating first name and last name
            var custlist = Customer.Retrive();

            var fullnames=from cust in custlist select cust.FirstName+ " "+cust.LastName;
            Console.WriteLine("The complete name of customers ");
            Console.WriteLine("**********************************");
            foreach(var c in fullnames)
            {
                Console.WriteLine($"{c}");

            }
            var fullnames2=custlist.Select(x=>x.FirstName+ " "+x.LastName);//method syntax 
            Console.WriteLine("The complete name of customers ");
            Console.WriteLine("**********************************");
            foreach (var c in fullnames2)
            {
                Console.WriteLine($"{c}");

            }
            Console.WriteLine("enter customer id to find the details of customer ");
            int custid=Convert.ToInt32(Console.ReadLine());
            var checkuser=from cust in custlist where cust.CustomerID == custid select cust;    
            //imagine two customers are having same id so here chekuser is actually a collection 
            // from that collection u want to get first matched customer then u will use 
            //First 
            
          //  Console.WriteLine(checkuser.FirstName) like this i am not getting it as it is collection
          Customer customerfound=checkuser.First();//but make ids same for two users say vithal nd sureesh
            if (customerfound != null)
            {
                Console.WriteLine(customerfound.FirstName);
            }
            else
            {
                Console.WriteLine("Customer not found");
            }
            //  Console.WriteLine(customerfound.FirstName);

            // and imagine if u have given wrong id then to implement if else i wil use 
            //FirstorDefault i wil do it if u dont use frist or default exception wil come 
            Console.WriteLine("enter customer id to find the details of customer using first or default  ");
            int custid2 = Convert.ToInt32(Console.ReadLine());
            var checkuser2 =custlist.Where(x=>x.CustomerID==custid2);
           Customer  customerfound2 = checkuser2.FirstOrDefault();
            if (customerfound2 != null)
            {
                Console.WriteLine($"{customerfound2.FirstName}");
            }
            else
            {
                Console.WriteLine("Customer not found");
            }

            //i want to project not all columns only few columns if all columns mean u say select customer all columns wil come
            // say first name and city i want to project so in Linq it has some way to write 

            var firstnameAndCity = from cust in custlist
                                   select new
                                   {
                                       cust.FirstName,
                                       cust.City
                                   };

            var firstnameAndCity2=custlist.Select(x=>new  { x.FirstName, x.City });

            Console.WriteLine("\nDisplaying frist name and city ...using query syntax");

            foreach(var cust1 in firstnameAndCity)
            {
                Console.WriteLine($"{cust1.FirstName}--- {cust1.City}");
            }
            Console.WriteLine("\nDisplaying frist name and city ...using method syntax");

            foreach (var cust1 in firstnameAndCity2)
            {
                Console.WriteLine($"{cust1.FirstName}--- {cust1.City}");
            }
            Console.ReadLine();
        }
    }
}

MVC (Model -View -Controller) 
*******************************
it is one kind of desing pattern to develop software application we follow some techniques in this pattern which makes us to write by default a very good programming application  in this .

Model : it is set of domain classes which will act as interface to data which is present behind the application so in this model i apply business rules means validation i can provide to classes so where ever 
this class goes in desing or in business logic its validation it will take it along with it .
so anyting in tables u want to enter through this model class only pass and take values 
 
View: user interface which renders the model in the way the user can interact with .so here for one model there can be many views so multiple views may be associiated with a model this is a presental layer we can say .This view is actually a pure html page there will be no code behind file like windows or asp.net it is pure html means only html controls will be there no asp.net controls and no server controls will be there .


Controller : it will recives the request from the user from the view or user interface and after taking taking the request based on type of request  of the user the controller will do modification in databse using the model and after doing the modification the response which it will get will be submitted to end user . it handles complex operations .

 it is one type of class we can say which is having a suffix as controller and in that class some methods which we can action methods are written as per the request .

In controllers two methods we will use more which is get and post 

get means just showing the form is get means just  displaying the form 

for example : insert form in that one form will be shown with text boxex etc and save option button 

post measn after filling the data when u click save button post metod is called 

they will be having same name but one attibute on the top of the function will be there which tells 
whether it is post or get ...
[get]
insertcustomer()
{



}



http://localhost/featured3/index.html

http :yahoo.com /xyz/pqr  in web application it means in yahoo server go the website xyz and in that open page pqr.html 

in mvc 

above url means 

xyz is controller class and pqr is not a html page but it is a function inside a controller class 

class  xyz
{

public return type pqr(23)
{

here logic code u will write in the function 

and u will return some value 

}

}

right now i am interacting by using a url where i specify controlername /actionmetod /paramter going inside the 
method  

i am not providing any link or button to the user so that he can interact with the application 

I am calling a function of controller using a url and and i am seeing a correspnding view generated by controller 

now i will provide a view in that view user will request some thing and based on request the function is called and and its view is executed like that i want to do 


now open a visual studio mvc project in Pahse1day1proejts only 

right click on solution --->add new project ---> C #  allprlotform and web ---->asp.net core web (model-view controllr) select this template 
and give name MVCDemo1 and let it be .net core 8.0 and say create 


so some boiler plate code i will get here with default some fodlers like model ,view and controllers 


same thing in vs code u want to do means in one folder go an write this command 

dotnet new mvc -n MYCDemo1 --framework net8.0

 and then go to the folder and same commands dotnet build and run u can do 

  u can add some extensions if u want for better readablity in sp.net core mvc 

  Add Required Extensions (Optional)
To make development easier in VS Code, install these extensions:

C# Dev Kit (for IntelliSense & Debugging)
C# (for .NET development)
ASP.NET Helper (for better Razor syntax highlighting)

 now come to visual studio 2022 

 now come to controller 

in  Home controller write thes 3 methods like this  

 public string sampledemo1()
        {
            return "My first MVC Application ";
        }
        
        public string sampledemo2(int age ,string name)
        {
      
        return "The name of the person is: " + name + " is having age :" + age;
        
        }
        
          public string  sampledemo3(int age, string name,string loc)
        {
       return "The name of the person is: " + name + " is having age :" + age+"  living in : "+loc;
        }


here i am running the applciation and after the port i am writing controller name and its method like this 
 
https://localhost:7257/Home/sampledemo3?age=23&name=ravi&loc=chennai
https://localhost:7257/Home/sampledemo2?age=23&name=ravi
https://localhost:7257/Home/sampledemo
 
The methods which i have written above are just returning a string so i am not seeing desing when i say view page source in the web page 
but when i do this url 

https://localhost:7257/Home/Index
https://localhost:7257/Home/privacy 

and say view page source i can see the desing because these methods have a return type of IActionResult which says that i will always return a view 
which is there in mehtods

 public IActionResult Index()
 {
     return View();
 }

 public IActionResult Privacy()
 {
     return View();
 }

for everyIAction method there i a view present in Views fodler ---->Home fodler --->Index, in the same manner Prvacy view will be there 

now write a methd whose return type is IActionresult 
 public IActionResult sampledemo4()
 {

     return View();
 }
here above if dont write return View()  i will get error so 

we have to write it like that because return type is now IActionResult

Now i want to tranfer some infromation from controller to view view is not create i will create it later on 

so to tranfer some data from contorller to view viewbag is used it is dynamic property or variable which can store

public IActionResult sampledemo4()
{
    int age = 23;
    string name = "kiran";

    ViewBag.age1 = age;
    ViewBag.name1 = name;
    return View();
}

now right clikcng on the sampledemo4 create a view now 

right click -->add view --->razor view --->one window will come showing default name as that of function sampledemo4 if u want to ue layout dont uncheck anyhting
and just say add


@{
    ViewData["Title"] = "sampledemo4";
}

<h1>sampledemo4</h1>

<h2>@ViewBag.age1</h2>
<h2>@ViewBag.name1</h2>

and now call the page u can see the output and say view page souce u can see the desing also means in the desinig your data is kept and given to you 

Now let us include models also in the programing 

so in Models folder add Employee and Department classes like this

namespace MVCDemo1.Models
{
    public class Employee
    {
        public int EmployeeID { get; set; }
        public string? EmpName { get; set; }

        public int Salary { set; get; }
    }
}
namespace MVCDemo1.Models
{
    public class Department
    {
        public int Deptid { set; get; }
        public string? DeptName { set; get; }
    }
}

now i want to pass single object of employee class and also want to pass multiple objects of employee class 

 so write the action methods like this 





