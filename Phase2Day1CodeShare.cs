
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
        }
    }
}

  

 
