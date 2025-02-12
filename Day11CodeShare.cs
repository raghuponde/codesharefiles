
Developers build applications with good and tidy designs using their knowledge and experience. But over time, applications 
  might develop bugs. The application design must be altered for every change request or new feature request. 
  After some time, we might need to put in a lot of effort, even for simple tasks, and it might require a full working knowledge of the entire system. But we can't blame change or new feature requests. They are part of software development. We can't stop them or refuse them either. So who is the culprit here? It is the design of the application.

The following are the design flaws that cause damage to software, mostly.

Putting more stress on classes by assigning more responsibilities to them. (A lot of functionality not related to a class.)
Forcing the classes to depend on each other. If classes depend on each other (in other words, tightly coupled), then a change in one will affect the other.
Spreading duplicate code in the system/application.

SOLID principles are the design principles that enable us to manage several software design problems. Robert C. Martin compiled these principles in the 1990s. These principles provide us with ways to move from tightly coupled code and little encapsulation to the desired results of loosely coupled and encapsulated real business needs properly. SOLID is an acronym for the following.

S: Single Responsibility Principle (SRP)
O: Open-closed Principle (OCP)
L: Liskov substitution Principle (LSP)
I: Interface Segregation Principle (ISP)
D: Dependency Inversion Principle (DIP)


OOAD means object oriented analysis and design here design means DRY ,divide and conquer and change of request 



Single Responsibility Principle (SRP) - Real-Time Example in C#
-------------------------------------------------------------------
The Single Responsibility Principle (SRP) is one of the SOLID principles, which states that a class should have only one reason to change, meaning it should only have one job or responsibility. If a class has more than one responsibility, it can lead to code that is difficult to maintain and modify.


create one folder Day11Projects 


and write the first commnd like this 

dotnet new console -o srpdemo --use-program-main

add one class into the projet right click and c# and select class and drop down write Person and press enter then namespaes will come automatically 

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace srpdemo
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}

and in the main program the code is like this 

namespace srpdemo;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Welcome to my application!");

        // Ask for user information
        Person user = new Person();

        Console.Write("What is your first name: ");
        user.FirstName = Console.ReadLine();

        Console.Write("What is your last name: ");
        user.LastName = Console.ReadLine();

        // Checks to be sure the first and last names are valid
        if (string.IsNullOrWhiteSpace(user.FirstName))
        {
            Console.WriteLine("You did not give us a valid first name!");
            Console.ReadLine();
            return;
        }

        if (string.IsNullOrWhiteSpace(user.LastName))
        {
            Console.WriteLine("You did not give us a valid last name!");
            Console.ReadLine();
            return;
        }

        // Create a username for the person
        Console.WriteLine($"Your username is {user.FirstName.Substring(0, 1)} {user.LastName}");

        Console.WriteLine("Press Enter to Close the Application ");
        Console.ReadLine();


    }
}


Now i am dividing the responsiblities like this into seperate classes means i am adding some classes like how i added Person class

