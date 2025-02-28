
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

  

 
