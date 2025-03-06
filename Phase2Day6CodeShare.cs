
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


  note here in classes when i give Id then idnentity columns wil be generated for primary keys in tables 


so now step 3 i need to do 
  
  Now add another class which is EventContext which is ef class which will hold all other classes 

using Microsoft.EntityFrameworkCore;

namespace codefirstentityframeworkdemo.Models
{
    public class EventContext:DbContext
    {
    }
}

and this  class will inherit DbContext class i am in step 3 only 
next add or register the classes which u have created in EventContext class 

  using Microsoft.EntityFrameworkCore;

namespace codefirstentityframeworkdemo.Models
{
    public class EventContext:DbContext
    {
        public EventContext()
        {

        }

        public EventContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Author> authors { get; set; }

        public DbSet<Course> courses { get; set; }

        public DbSet<Student> students { get; set; }


    }
}

When you are working with DB first approach the classes were created automatically along with this context class but here as
you are in code first approach you need to create the classes and also you need to create the context class here where u register other classes 

I'm in step three only now I will configure the database in app settings file and
  in programme cs file I will inject  the context file which I have created of event context

  appsetting code 
  -------------
 go to app settings and put comma and then paste this code and modify as per your system settinggs

 "ConnectionStrings": {
   "constring": "Data Source=LAPTOP-4G8BHPK9\SQLEXPRESS;initial catalog=EventDatabase;Integrated Security=true;TrustServerCertificate=True;"
 }


so will look like this my appsetting file 

{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "constring": "Data Source=LAPTOP-4G8BHPK9\\SQLEXPRESS;initial catalog=EventDatabase;Integrated Security=true;TrustServerCertificate=True;"
  }

}



 Now go to program.cs file 
 
 and inject the connection string name after add controllers with views 
 
 
 
 
 builder.Services.AddDbContext<EventContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("constring")));

now i am going to step 4 

  Build the application 


Now go to step 5 and add below commands in package manager console 

tools--->Nugget package manager --->package manager console 

add-migration 'initaldbcreated'    (after this command a migration folder will be created telling how it is going to create db tables ) 
update-database 

 Now i want to add some more classes into the same program but with annotations which will provide valdiation to me according constraints will be imposed on the table from 
 the classe and I also want to impose fleunt api to provide realtionship .
 
 so some classes i will be adding and again same commands i will be using 
 
 so now add classes Author1 ,Course1 ,Employee ,UserDetail into the models folder 
 
 
 namespace codefirstentityframeworkdemo.Models
{
    public class Author1
    {

        public int Id { set; get; }
        public string Name { set; get; }
        public IList<Course1> Courses { set; get; }
    }
}


using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace codefirstentityframeworkdemo.Models
{
    public class Course1
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { set; get; }// not an identity column 

        [Required]
        [Column("Stitle", TypeName = "varchar")]
        public string Title { set; get; }

        [Required]
        [MaxLength(220)]
        public string Description { set; get; }


        public float fullprice { set; get; }


        [ForeignKey("Author")]
        public int AuthorId { set; get; }

        public Author1 Author { set; get; }

    }
}


using System.ComponentModel.DataAnnotations;

namespace codefirstentityframeworkdemo.Models
{
    public class Employee
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter your firstname")]
        public string? FirstName { set; get; }

        [Required(ErrorMessage = "Please enter your lastname")]
        public string? LastName { set; get; }

        [Required(ErrorMessage = "Please enter email id")]
        [EmailAddress(ErrorMessage = "Please enter valid email id")]
        public string? Email { set; get; }

        [Required(ErrorMessage = "Please enter your age")]
        [Range(0, 100, ErrorMessage = "Please enter your age betwen 1 to 100 only ")]

        public int Age { set; get; }
    }
}


using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace codefirstentityframeworkdemo.Models
{
    public class UserDetail
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "User Name is Required")]
        [StringLength(15, ErrorMessage = "User Name cannot be more than 15 characters")]
        public string? UserName { get; set; }

        [Required(ErrorMessage = "Password Required")]
        [StringLength(11, MinimumLength = 5, ErrorMessage = "Minimum Length of Password is 5 letters or Max Length is of 11 letters..")]
        [DataType("password")]
        public string? NewPassword { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm new password")]
        [System.ComponentModel.DataAnnotations.Compare("NewPassword", ErrorMessage = "The new password and confirmation password do not match.")]
        public string? ConfirmPassword { get; set; }

        [Required(ErrorMessage = "Date Of Birth is Required")]
        [DisplayName("Date of Birth")]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:d}", ApplyFormatInEditMode = true)]
        public DateTime DateOfBirth { get; set; }

        [Required(ErrorMessage = "Email is Required")]
        [EmailAddress(ErrorMessage = "Please enter valid Email Id")]
        public string? Email { get; set; } 

        [Required(ErrorMessage = "Postal Code is Required")]
        [Range(100, 1000, ErrorMessage = "Must be between 100 and 1000")]
        public int PostalCode { get; set; }

        [Required(ErrorMessage = "Phone Number is Required")]
        [DisplayName("Phone Number")]
        public int PhoneNo { get; set; }

        [Required(ErrorMessage = "Profile is Required")]
        [DataType(DataType.MultilineText)]
        public string Profile { get; set; }
    }
}

now register new classes  in eventcontext class like this 

  using Microsoft.EntityFrameworkCore;

namespace codefirstentityframeworkdemo.Models
{
    public class EventContext:DbContext
    {
        public EventContext()
        {

        }

        public EventContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Author> authors { get; set; }

        public DbSet<Course> courses { get; set; }

        public DbSet<Student> students { get; set; }

        public DbSet<UserDetail> userdetails { get; set; }

        public DbSet<Employee> employees { get; set; }

        public DbSet<Author1> authors1 { get; set; }

        public DbSet<Course1> courses1 { get; set; }


    }
}


build the solution agin now 
now afte this again run migrations like this in package manager console 


add-migration 'threetablesadded'
update-database 

Now i want to use fluent api and do the work which was done by data annotations and also i need to seed the data into some table by default
 by usinng fluent api so let us add some tables and provide relationship and include annotaions using fluent api 
 
 
 
 Now add 3 classes liek this Author2 ,Course2 and UserDetail2 and in that add previous proepties only 
 but remove all annotoations from top of proeprties 


namespace codefirstentityframeworkdemo.Models
{
    public class Author2
    {
        public int Id { set; get; }
        public string Name { set; get; }
        public IList<Course2> Courses { set; get; }
    }
}

namespace codefirstentityframeworkdemo.Models
{
    public class Course2
    {
        public int Id { set; get; }// not an identity column 


        public string Title { set; get; }


        public string Description { set; get; }


        public float fullprice { set; get; }


        public int Author2Id { set; get; }

        public Author2 Author { set; get; }
    }
}


namespace codefirstentityframeworkdemo.Models
{
    public class UserDetail2
    {
        public int Id { get; set; }

        public string? UserName { get; set; }

        public string? NewPassword { get; set; }


        public string? ConfirmPassword { get; set; }


        public DateTime DateOfBirth { get; set; }


        public string? Email { get; set; }


        public int PostalCode { get; set; }


        public int PhoneNo { get; set; }


        public string Profile { get; set; }
    }
}

Again register in EventConext like this 

  using Microsoft.EntityFrameworkCore;

namespace codefirstentityframeworkdemo.Models
{
    public class EventContext:DbContext
    {
        public EventContext()
        {

        }

        public EventContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Author> authors { get; set; }

        public DbSet<Course> courses { get; set; }

        public DbSet<Student> students { get; set; }

        public DbSet<UserDetail> userdetails { get; set; }

        public DbSet<Employee> employees { get; set; }

        public DbSet<Author1> authors1 { get; set; }

        public DbSet<Course1> courses1 { get; set; }

        public DbSet<Course2> courses2 { get; set; }

        public DbSet<Author2> authors2 { get; set; }

        public DbSet<UserDetail2> userdetails2 { get; set; }


    }
}

Now  in event context only i will wreite fluent api for doing validations 


using Microsoft.EntityFrameworkCore;

namespace codefirstentityframeworkdemo.Models
{
    public class EventContext:DbContext
    {
        public EventContext()
        {

        }

        public EventContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Author> authors { get; set; }

        public DbSet<Course> courses { get; set; }

        public DbSet<Student> students { get; set; }

        public DbSet<UserDetail> userdetails { get; set; }

        public DbSet<Employee> employees { get; set; }

        public DbSet<Author1> authors1 { get; set; }

        public DbSet<Course1> courses1 { get; set; }

        public DbSet<Course2> courses2 { get; set; }

        public DbSet<Author2> authors2 { get; set; }

        public DbSet<UserDetail2> userdetails2 { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {



            // Fluent API for Author2
            modelBuilder.Entity<Author2>(entity =>
            {



                entity.HasKey(a => a.Id); // Primary Key
                entity.Property(a => a.Name).IsRequired().HasMaxLength(100);

                // Relationship with Course2
                entity.HasMany(a => a.Courses)
                      .WithOne(c => c.Author)
                      .HasForeignKey(c => c.Author2Id)
                      .OnDelete(DeleteBehavior.Cascade); // Cascade delete
            });

            // Fluent API for Course2
            modelBuilder.Entity<Course2>(entity =>
            {
                entity.HasKey(c => c.Id); // Primary Key

                entity.Property(c => c.Id)
                      .ValueGeneratedNever(); // Not an identity column

                entity.Property(c => c.Title)
                      .IsRequired()
                      .HasMaxLength(255)
                      .HasColumnName("Stitle")
                      .HasColumnType("varchar");

                entity.Property(c => c.Description)
                      .IsRequired()
                      .HasMaxLength(220);

                entity.Property(c => c.fullprice)
                      .HasColumnType("float")
                      .IsRequired();

                // Foreign Key to Author1
                entity.HasOne(c => c.Author)
                      .WithMany(a => a.Courses)
                      .HasForeignKey(c => c.Author2Id);
            });


            // Fluent API for UserDetail
            modelBuilder.Entity<UserDetail2>(entity =>
            {
                entity.HasKey(u => u.Id); // Primary Key

                entity.Property(u => u.UserName)
                      .IsRequired()
                      .HasMaxLength(15);

                entity.Property(u => u.NewPassword)
                      .IsRequired()
                      .HasMaxLength(11);

                entity.Property(u => u.DateOfBirth)
                      .IsRequired()
                      .HasColumnType("date");

                entity.Property(u => u.Email)
                      .IsRequired()
                      .HasMaxLength(100)
                      .HasColumnType("varchar");

                entity.Property(u => u.PostalCode)
                      .IsRequired()
                      .HasColumnType("int");

                entity.Property(u => u.PhoneNo)
                      .IsRequired();

                entity.Property(u => u.Profile)
                      .IsRequired()
                      .HasColumnType("nvarchar(max)");
            });

            // Seed data for Author1 and Course1
            modelBuilder.Entity<Author2>().HasData(
                new Author2 { Id = 1, Name = "Author One" },
                new Author2 { Id = 2, Name = "Author Two" }
            );

            modelBuilder.Entity<Course2>().HasData(
                new Course2 { Id = 1, Title = "Course A", Description = "Description A", fullprice = 100, Author2Id = 1 },
                new Course2 { Id = 2, Title = "Course B", Description = "Description B", fullprice = 200, Author2Id = 2 }
            );
        }



    }
} 

now once Build the applciation and then run the migrations 

add-migration '3moretablesaddedwithfleuntvalidation'
update-database

If you have done some mistake like data type data types wrongly entered for some properties then you can do the modification in those classes and then again run the migration and update the database if you are not satisfied with the migrations you can delete the migration folder itself and again you can generate the migration folder by writing again the migration command it is not necessary that you have to step by step do changes and add migrations many times all the things you can do at one time and in 1 go you can write the 1 migration also that is also ok

check whetther seeded values are there in Author2 and Course 2 are there or not 

CRUD using code first and also will use repository pattern 
--------------------------------------------------------------
here one interface we define methods and and one class will implment that interface and that class will be used by a contoller which is nothing but repsoitory pattern 


Add one class Post like this on Models folder 

using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace codefirstentityframeworkdemo.Models
{
    public class Post
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { set; get; }
        [Required]
        public DateTime DatePublished { set; get; }
        [Required]
        public string Title { set; get; }
        [Required]
        public string Body { set; get; }
    }
}



add in EventContext the the DBSet 

public DbSet<Post> posts { get; set; }

build the solution 

add migrations 

see the table in db it will be there 

create one folder Repositories in the Project u create 

in that add one inetface IPost and and one class PostRepository


using codefirstentityframeworkdemo.Models;

namespace codefirstentityframeworkdemo.Repositories
{
    public interface IPost
    {
        List<Post> GetPosts();

        Post GetPostByID(int postid);

        void InsertPost(Post post);

        void DeletePost(int postid);

        void UpdatePost(Post post);

        void save();
    }
}

and got to PostRepsoitry class and implement interface like this right click and say implement interface some boiler plate code comes like this 

  using codefirstentityframeworkdemo.Models;

namespace codefirstentityframeworkdemo.Repositories
{
    public class PostRepository : IPost
    {
        public void DeletePost(int postid)
        {
            throw new NotImplementedException();
        }

        public Post GetPostByID(int postid)
        {
            throw new NotImplementedException();
        }

        public List<Post> GetPosts()
        {
            throw new NotImplementedException();
        }

        public void InsertPost(Post post)
        {
            throw new NotImplementedException();
        }

        public void save()
        {
            throw new NotImplementedException();
        }

        public void UpdatePost(Post post)
        {
            throw new NotImplementedException();
        }
    }
}

now Updated code of above 
----------------------------

using codefirstentityframeworkdemo.Models;
using Microsoft.EntityFrameworkCore;

namespace codefirstentityframeworkdemo.Repositories
{
    public class PostRepository : IPost
    {

        private EventContext context;

        public PostRepository(EventContext cnt)
        {
            this.context = cnt;
        }
        public void DeletePost(int postid)
        {
            Post post = context.posts.Find(postid);
            context.posts.Remove(post);
        }

        public Post GetPostByID(int postid)
        {
            return context.posts.Find(postid);
        }

        public List<Post> GetPosts()
        {
            return context.posts.ToList();
        }

        public void InsertPost(Post post)
        {
           context.posts.Add(post);
        }

        public void save()
        {
            context.SaveChanges();
        }

        public void UpdatePost(Post post)
        {
            context.Entry(post).State = EntityState.Modified;
        }
    }
}

register this in Program.cs file 
----------------------------------
after the EventContext of buider u add this below line 

builder.Services.AddScoped<IPost,PostRepository>();  

now add PostController and it shoud be empty mvc Post controller and in that add this code 
so namespaces Respsootoreis and Models is must heree 

Post Contoller 
-------------
using CodeFirstEntityFrameworkDemo.Models;
using CodeFirstEntityFrameworkDemo.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CodeFirstEntityFrameworkDemo.Controllers
{
    public class PostController : Controller
    {
        private readonly IPost _postRepository;

        public PostController(IPost postRepository)
        {
            _postRepository = postRepository;
        }

        // GET: Post
        public IActionResult Index()
        {
            var posts = _postRepository.GetPosts();
            return View(posts);
        }

        // GET: Post/Details/5
        public IActionResult Details(int id)
        {
            var post = _postRepository.GetPostByID(id);
            if (post == null)
            {
                return NotFound();
            }
            return View(post);
        }

        // GET: Post/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Post/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Post post)
        {
            if (ModelState.IsValid)
            {
                _postRepository.InsertPost(post);
                _postRepository.save();
                return RedirectToAction(nameof(Index));
            }
            return View(post);
        }

        // GET: Post/Edit/5
        public IActionResult Edit(int id)
        {
            var post = _postRepository.GetPostByID(id);
            if (post == null)
            {
                return NotFound();
            }
            return View(post);
        }

        // POST: Post/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, Post post)
        {
            if (id != post.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _postRepository.UpdatePost(post);
                    _postRepository.save();
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
                return RedirectToAction(nameof(Index));
            }
            return View(post);
        }

        // GET: Post/Delete/5
        public IActionResult Delete(int id)
        {
            var post = _postRepository.GetPostByID(id);
            if (post == null)
            {
                return NotFound();
            }
            return View(post);
        }

        // POST: Post/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            _postRepository.DeletePost(id);
            _postRepository.save();
            return RedirectToAction(nameof(Index));
        }
    } 
}




  

  
  
