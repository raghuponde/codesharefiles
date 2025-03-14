
I am doing expense splitter app for that clases are like this 

public class Group
{
    public int GroupId { get; set; }
    public string GroupName { get; set; }

    // One-to-Many: A Group can have multiple Users
    public ICollection<User> Users { get; set; }
}

public class User
{
    public int UserId { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }

    // Foreign Key to Group
    public int GroupId { get; set; }
    public Group Group { get; set; }

    // One-to-Many: A User can have multiple Expenses
    public ICollection<Expense> Expenses { get; set; }
}

public class Expense
{
    public int ExpenseId { get; set; }
    public decimal Amount { get; set; }
    public string Description { get; set; }
    public DateTime CreatedDate { get; set; }

    // Foreign Key to User
    public int UserId { get; set; }
    public User User { get; set; }
}

now for the above class i want  to create tables using  web api using code first approach develop controllers for each classes and also give me the method in expense controller to find out expenses done by a group 

