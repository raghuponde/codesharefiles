
Code First Approach
***********************
The C# classes (models) are created first.
EF generates the corresponding database and tables based on these classes.
Uses Migrations to update the database schema.

  When to use?

---->When you want full control over your database structure.
---->When starting a new project from scratch. 

  you will only generate the database from the front end into the database server 
  means you will follow some steps to do that 

  
code first approach steps :
---------------------------
1)Installing packages core package ,tools,sql server 9.0.2 version install these dependencies 
     Microsoft.EntityFrameworkCore
    Microsoft.EntityFrameworkCore.SqlServer
    Microsoft.EntityFrameworkCore.Tools
2)creating classes in Models folder which will later will be converted to db tables as i am using code first apprach 

3)context class also u need to create and in that u have to add all classes 
   and set the path in app  settings file and also in program.cs file also inject the dependency 

4)Build the application 

5)add migrations to convert your classes into table in package manager console..
    add-migration 'anytaskname'
    update-database 
    
    again any change you are doing in classes in the fron end again add those above commands 
    if u are not happy with the migrations which u have done by mistake u can delete migrations folder which 
    will be automaticcally generated and again u can run same above two commands

so now let us open one new application and start the code first approach 

  Create a new application with the name codefirstentityframeworkdemo in day 6 folder It is aasp.net core mvc application
  use .net core 8.0 version as usual 


step 1 i done now 

now as per step 2 :

add some classes with the name Author ,Course and Student class and include the properties like this 

Here Student and Course are having between them many to many realtionship means both side both collecction property will be there when both sides 
collection proeprty is there then in database junction table will be created which we will see later 

and there is one to many relationship between Author and course means one author can write many  courses but that  course belong to 
one author who has written means here Author is master table and course is child table of Author and it is having refercne navigation to Author table

and there is no Relationship between Author and student 

so remember here master table will have collection navigation proeprty and child table will have reference navigation property 

it is not compuslory to provide collection property in the master class it is understood for our understanding and for the system to understand 

i am providing navigation properties in both master and child class so that sytem can see and properly genrate the database with proper related tables


  namespace codefirstentityframeworkdemo.Models
{
    public class Author
    {
        public int Id { get; set; } // it will create identity column
        public string? AuthorName { set; get; }

        public IList<Course> Courses { get; set; }
    }
}


namespace codefirstentityframeworkdemo.Models
{
    public class Course
    {
        public int Id { get; set; }

        public string? Title { get; set; }

        public string? CourseDescription { get; set; }

        public float? fullprice { get; set; }

        public Author? Author { get; set; }

        public List<Student> Students { get; set; }

    }
}

 
namespace codefirstentityframeworkdemo.Models
{
    public class Student
    {
        public int Id { get; set; }

        public List<Course> Courses { get; set; }
    }
}


so now step 3 i need to do 

  note here in classes when i give Id then idnentity columns wil be generated for primary keys in tables 

  


  
  
