Now i am opening yesterdays program only of MVCDemo1 so you also open yesterdays project as i am adding some small code in it 

Now what i want to do is in a single view means in a single page of design i want to use muliple models earleir i used either single model or colllection of same model 
but i have not used multiple models in the same page of .cshmtl so let us do that 

There will be situation where for generating reports you may need data from multiple models as all data is not present in single model .

  write a actionmethod in Home controller again 

  on top of the action method first deine Deparment collection like this 
  
 List<Department> deptlist = new List<Department>()
     {
         new Department{Deptid=10,DeptName="Sales"},
         new Department{Deptid=20,DeptName="HR"},
         new Department{Deptid=30,DeptName="Software"}
     };

 public IActionResult EmpDeptViewModelDemo(int empid)
 {
     var query1 = deptlist.ToList();
     Employee emp=emplist.Where(x=>x.EmployeeID == empid).FirstOrDefault();
     var query2 = emp;

     return View(query1,query2);

 }

Above i want to send two models one is collection of depts and another is single empooyee based on what i pass empid 

but above code is givng error means i cannot pass multiple object to view from the cotroller so what to do now ????

so you have to create a model which will take other models as proepties into them 

go go to Models folder and add one class with the name EmpDeptViewModel 

  and the class shoudl be liek this 

namespace MVCDemo1.Models
{
    public class EmpDeptViewModel
    {

        public List<Department> deptlist { set; get; }

        public Employee emp { set; get; }

        public DateTime date { set; get; }
    }
}


and now the action method will be liek this i will send single objet only but that single objec will be other objects in then 

 public IActionResult EmpDeptViewModelDemo(int empid)
 {
     var query1 = deptlist.ToList();
     Employee emp=emplist.Where(x=>x.EmployeeID == empid).FirstOrDefault();
     var query2 = emp;

     // return View(query1,query2);
     EmpDeptViewModel empdeptobj = new EmpDeptViewModel()
     {
         deptlist = query1,
         emp=query2,
         date=DateTime.Now
     };
     return View(empdeptobj);

 }
    
Now add a view add view -->razor view -->add 

  and in the razor view put this code like this 



  
