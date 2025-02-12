
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


create one folder Day11Projects opem the folder in vs code ..


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

StandardMessages.cs 
-----------------------


using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace srpdemo
{
    public class StandardMessages
    {
        public static void WelcomeMessage()
        {
            Console.WriteLine("Welcome to my application!");
        }

        public static void EndApplication()
        {
            Console.Write("Press enter to close...");
            Console.ReadLine();
        }

        public static void DisplayValidationError(string fieldName)
        {
            Console.WriteLine($"You did not give us a valid {fieldName}!");
        }
    }
}

PersonDataCapture.cs
---------------------
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace srpdemo
{
    public class PersonDataCapture
    {
        public static Person Capture()
        {
            // Ask for user information
            Person output = new Person();

            Console.Write("What is your first name: ");
            output.FirstName = Console.ReadLine();

            Console.Write("What is your last name: ");
            output.LastName = Console.ReadLine();

            return output;
        }
    }
}


AccountGenerator.cs
----------------------

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace srpdemo
{
    public class AccountGenerator
    {
        public static void CreateAccount(Person user)
        {
            // Create a username for the person
            Console.WriteLine($"Your username is {user.FirstName.Substring(0, 1)} {user.LastName}");
        }
    }
}


PersonValidator.cs
------------------

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace srpdemo
{
    public class PersonValidator
    {
        public static bool Validate(Person person)
        {
            // Checks to be sure the first and last names are valid
            if (string.IsNullOrWhiteSpace(person.FirstName))
            {
                StandardMessages.DisplayValidationError("first name");
                return false;
            }

            if (string.IsNullOrWhiteSpace(person.LastName))
            {
                StandardMessages.DisplayValidationError("last name");
                return false;
            }

            return true;
        }
    }
}


Now program .cs file will chnage like this 


  namespace srpdemo;

class Program
{
    static void Main(string[] args)
    {
        StandardMessages.WelcomeMessage();

        Person user = PersonDataCapture.Capture();

        bool isUserValid = PersonValidator.Validate(user);

        if (isUserValid == false)
        {
            StandardMessages.EndApplication();
            return;
        }

        AccountGenerator.CreateAccount(user);

        StandardMessages.EndApplication();
    }
}

so imagine this you are doing it for one person suppose 100 persons are there in it will be very much cubersome to make a note of 100 students in the main method only okay .

The Open/Closed Principle (OCP), one of the SOLID principles, states that a class should be open for extension but closed for modification. This means that the behavior of a class should be extendable without modifying its source code. In real-world applications, this is achieved by using abstraction, inheritance, and interfaces.


Now consider below program which is here like this 

  write a new command from main folder day11prjects 

dotnet new console -o ocp --use-program-main

and paste the follwing code in main program 

version 1 of ocp 
-----------------
  namespace ocp;
class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }



    public Employee()
    {

    }

    public Employee(int id, string name)
    {
        this.Id = id;
        this.Name = name;

    }

    public override string ToString()
    {
        return string.Format($"Employee Id is : {Id} and Name : {Name}");
    }

}
class Program
{
    static void Main(string[] args)
    {
        Employee e1 = new Employee(101, "ravi");
        Employee e2 = new Employee(102, "mahesh");
        Console.WriteLine(e1);
        Console.WriteLine(e2);
    }
}



new requiremnt has come which based on emptype provide the employee bonus if he is permenant  employee 
provide 10% bonus and if he is temperory employee provide 5% bonus 

Now i will try to mdifify the above code like this for the requiemnt 


namespace ocp;

public enum EmpType
{
    permenant,
    temperory
}
class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }

    public EmpType EmployeeType { get; set; }

    public Employee()
    {

    }

    public Employee(int id, string name, EmpType empType)
    {
        this.Id = id;
        this.Name = name;
        this.EmployeeType = empType;
    }

    public decimal CalculateBonus(decimal salary)
    {
        if (this.EmployeeType == EmpType.permenant)
        {
            return salary * 0.1M;
        }
        else
        {
            return salary * 0.05M;
        }
    }

    public override string ToString()
    {
        return string.Format($"Employee Id is : {Id} and Name : {Name}");
    }

}
class Program
{
    static void Main(string[] args)
    {
        Employee e1 = new Employee(101, "ravi",EmpType.permenant);
        Employee e2 = new Employee(102, "mahesh",EmpType.temperory);
        Console.WriteLine($"{e1} and bonus:{e1.CalculateBonus(30000)}");
        Console.WriteLine($"{e2} and bonus:{e2.CalculateBonus(30000)}");
    }
}


But above i am violating ocp princile i am modifyng my code my class for new change of request 
follwing OCP
--------------
namespace ocp;

public enum EmpType
{
    permenant,
    temperory
}
public abstract class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }


    public Employee()
    {

    }

    public Employee(int id, string name)
    {
        this.Id = id;
        this.Name = name;

    }

    public abstract decimal CalculateBonus(decimal salary);


    public override string ToString()
    {
        return string.Format($"Employee Id is : {Id} and Name : {Name}");
    }

}

class temperaoryemp : Employee
{


    public temperaoryemp()
    {

    }
    public temperaoryemp(int id, string name) : base(id, name)
    {

    }
    public override decimal CalculateBonus(decimal salary)
    {
        return salary * 0.05M;
    }
}

class Permenantemp : Employee
{
    public Permenantemp()
    {

    }
    public Permenantemp(int id, string name) : base(id, name)
    {

    }
    public override decimal CalculateBonus(decimal salary)
    {
        return salary * 0.1M;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Employee e1 = new Permenantemp(101, "ravi");
        Employee e2 = new temperaoryemp(102, "mahesh");
        Console.WriteLine($"{e1} and bonus:{e1.CalculateBonus(30000)}");
        Console.WriteLine($"{e2} and bonus:{e2.CalculateBonus(30000)}");
    }
}


Liskov Sustitution Principle
-----------------------------
The Liskov Substitution Principle (LSP), one of the SOLID principles, states that subtypes must be substitutable for their base types without affecting the correctness of the program. In other words, objects of a derived class should be able to replace objects of the base class without altering the desirable properties of the program.

Real-Time Scenario: Vehicle and Transportation System
Imagine a transportation system where we have different types of vehicles, such as cars and bicycles. Both vehicles can perform operations like starting the engine or driving, but some vehicles (e.g., bicycles) do not have an engine.

In this case, violating the Liskov Substitution Principle (LSP) might involve creating a base Vehicle class with an engine-related method and forcing all vehicles (even those without an engine, like bicycles) to implement it. The correct approach is to ensure that subclasses only inherit functionality that makes sense for them.


Step 1: Violating the Liskov Substitution Principle (LSP)
In this example, let's see what happens when we force all vehicle types (including bicycles) to implement engine-related methods, even though not all vehicles have engines.




From the above program if any new employee who is contract employee  is coming and he dont want bonus then i am changing the program like this 

  class contractemp : Employee
    {

        public contractemp()
        {
                
        }
        public contractemp(int id, string name) : base(id, name)
        {

        }
        public override decimal caluclateBonus(decimal salary)
        {
            throw new NotImplementedException();
        }
    }


Then at run time only i will know that he dont want bonus i will excute the code as usual here in main also 
so above code i take and will execute like this below 

namespace ocp;

public enum EmpType
{
    permenant,
    temperory
}
public abstract class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }


    public Employee()
    {

    }

    public Employee(int id, string name)
    {
        this.Id = id;
        this.Name = name;

    }

    public abstract decimal CalculateBonus(decimal salary);


    public override string ToString()
    {
        return string.Format($"Employee Id is : {Id} and Name : {Name}");
    }

}

class temperaoryemp : Employee
{


    public temperaoryemp()
    {

    }
    public temperaoryemp(int id, string name) : base(id, name)
    {

    }
    public override decimal CalculateBonus(decimal salary)
    {
        return salary * 0.05M;
    }
}

class Permenantemp : Employee
{
    public Permenantemp()
    {

    }
    public Permenantemp(int id, string name) : base(id, name)
    {

    }
    public override decimal CalculateBonus(decimal salary)
    {
        return salary * 0.1M;
    }
}
// dont want bonus 
class contractemp : Employee
{

    public contractemp()
    {

    }
    public contractemp(int id, string name) : base(id, name)
    {

    }
    public override decimal CaluclateBonus(decimal salary)
    {
        throw new NotImplementedException();
    }
}
class Program
{
    static void Main(string[] args)
    {
        Employee e1 = new Permenantemp(101, "ravi");
        Employee e2 = new temperaoryemp(102, "mahesh");
        Employee e3 = new contractemp(103, "kiran");
        Console.WriteLine($"{e1} and bonus:{e1.CalculateBonus(30000)}");
        Console.WriteLine($"{e2} and bonus:{e2.CalculateBonus(30000)}");
        Console.WriteLine($"{e3} and bonus:{e3.CalculateBonus(30000)}");
    }
}
so when i build the applicaiton i am getting error at run time i am getting it not showing any compile time error 
but why run time i am getting beasue code is not implemnted and i will know at run time so here 
class e3 object is not proeprly substituted in base class employee so what to do in code change 

add one interface like this 

    interface  EmpBonus
    {
         decimal caluclateBonus(decimal salary);
         void displayemp();
    }

and implemnt this for contract employee 

 class contractemp : EmpBonus
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public contractemp()
        {

        }
        public contractemp(int id, string name)
        {
            Id = id;
            Name = name;

        }
        public decimal caluclateBonus(decimal salary)
        {
            return 0;

        }
      public void displayemp()
    {
        Console.WriteLine($"Employee Id is :{this.Id}  and Name : {this.Name}");
    }
    }



so final code is like here i am making the e3 object to be substiutitateble into employee using interface 

namespace ocp;

public enum EmpType
{
    permenant,
    temperory
}
public abstract class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }


    public Employee()
    {

    }

    public Employee(int id, string name)
    {
        this.Id = id;
        this.Name = name;

    }

    public abstract decimal CalculateBonus(decimal salary);


    public override string ToString()
    {
        return string.Format($"Employee Id is : {Id} and Name : {Name}");
    }

}

class temperaoryemp : Employee
{


    public temperaoryemp()
    {

    }
    public temperaoryemp(int id, string name) : base(id, name)
    {

    }
    public override decimal CalculateBonus(decimal salary)
    {
        return salary * 0.05M;
    }
}

class Permenantemp : Employee
{
    public Permenantemp()
    {

    }
    public Permenantemp(int id, string name) : base(id, name)
    {

    }
    public override decimal CalculateBonus(decimal salary)
    {
        return salary * 0.1M;
    }
}
interface EmpBonus
{
    decimal caluclateBonus(decimal salary);
    void displayemp();
}
class contractemp : EmpBonus
{

    public int Id { get; set; }
    public string Name { get; set; }

    public contractemp()
    {

    }
    public contractemp(int id, string name)
    {
        Id = id;
        Name = name;

    }
    public decimal caluclateBonus(decimal salary)
    {
        return 0;

    }

    public void displayemp()
    {
        Console.WriteLine($"Employee Id is :{this.Id}  and Name : {this.Name}");
    }
}
class Program
{
    static void Main(string[] args)
    {
        Employee e1 = new Permenantemp(101, "ravi");
        Employee e2 = new temperaoryemp(102, "mahesh");
        EmpBonus e3 = new contractemp(103, "kiran");
        Console.WriteLine($"{e1} and bonus:{e1.CalculateBonus(30000)}");
        Console.WriteLine($"{e2} and bonus:{e2.CalculateBonus(30000)}");
        e3.displayemp();
        Console.WriteLine($" bonus: {e3.caluclateBonus(30000)} ");
    }
}

  
