
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
            // and imagine if u have given wrong id then to implement if else i wil use 
            //FirstorDefault i wil do it and checkit both now 

          //  Console.WriteLine(checkuser.FirstName) like this i am not getting it as it is collection
          Customer customerfound=checkuser.First();//but make ids same for two users say vithal nd sureesh

            Console.WriteLine(customerfound.FirstName);

         

            Console.ReadLine();
        }
    }
}
