right click on database and say restore dataabse 

click device and three dots 

then say add 

copy the path from the above highlighted text box into the notepad only the path u copy 

C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\Backup  

after copying the path close all widows 

and in that path u put these two .bak files 

then again follow the same steps and select the database say  ok and then in window select the file path and say ok and again ok 

-- i want to practise some commands like some select commands i want to practise 
use AdventureWorks2017
--This is the command to accept all values from a table.
select * from HumanResources.Employee
--when u want to accept particular columns just list out...like this.
select JobTitle ,Gender,LoginID from HumanResources.Employee
--using the Department table...

select * from HumanResources.Department

--These are the 3 ways to change the column names....

select 'Department Number'=DepartmentID,'DepartmentName'=Name from HumanResources.Department

select DepartmentID as 'Department Number',Name as 'Department Name' from HumanResources.Department



--suppose we want to make results more explanatory...in such a case u can add more text to the value..
--displayed by columns using literals...

select BusinessEntityID ,'Desgination: ',JobTitle from HumanResources.Employee

--suppose u want to view results in different manner...u may want to display the 
--values of multiple columns in a single column
--also to improve readability...u use concatenation operator...
--second thing is they are used only for strings...not for numbers


select Name + '   department comes under  '+ GroupName +'  group   ' as Department from HumanResources.Department
--sometimes u need to find out the columns operation also...

select * from HumanResources.EmployeePayHistory

select BusinessEntityID,Rate,per_day_rate=8*Rate from HumanResources.EmployeePayHistory

--there may be situation where u want to retrive the selected rows...

select * from HumanResources.Department where groupname='research and development'

--inside where clause u can use comaprison operators to specify condtions...

--again let us see table do some operation...

select * from HumanResources.Employee
--here relational operators are used...to check condition
select BusinessEntityID ,NationalIDNumber,JobTitle,VacationHours from 
HumanResources.Employee where VacationHours >
20
--to use logiccal operators...

--because to check for more conditions...

select * from humanresources.Department where Groupname='Manufacturing' or Groupname='Inventory management'

select * from Humanresources.Employee where JobTitle='production Technician - wc60' and Gender='M'

select * from HumanResources.Department where Groupname='Manufacturing' or NOT GroupName='quality Assurance'

--just now we have seen logial operators....
--now between and not between oprator is used for the range purpose...

select BusinessEntityID,VacationHours  from Humanresources.Employee
where vacationhours between 20 and 50

select BusinessEntityID,VacationHours from Humanresources.Employee where
vacationhours not between 20 and 80
--when we want to find the value in the given set of values...

select BusinessEntityID,JobTitle,LoginID from HumanResources.Employee where
JobTitle  in('Recruiter','Stocker') 

select BusinessEntityID,JobTitle,LoginID from Humanresources.Employee where
JobTitle not in('recruiter','stocked','janitor')

--retriving records that contain matched pattern
select * from HumanResources.Department where Name Like 'Production [c]%'
select * from HumanResources.Department
select * from HumanResources.Department where Name like 'Pro%'

select * from HumanResources.Department where Name like 'Sale_'

create table hi(
names varchar(10),
rollno int
)


insert into hi values ('Karsen',200)

insert into hi values('Karson',500)
insert into hi values('raghu',62)
insert into hi values ('Carsen',100)
insert into hi values('kiran',46)
insert into hi values ('Carson',300)

select * from hi;
select * from hi where names like '[CK]ars[eo]n'
select * from hi where names like '[^K]ars[eo]n'







-- Retriving record that contain null values

select * from [HumanResources].[EmployeeDepartmentHistory]
select BusinessEntityID,EndDate from 
HumanResources.EmployeeDepartmentHistory where EndDate is null

select BusinessEntityID,Enddate from
HumanResources.EmployeeDepartmentHistory where Enddate is not null

--when u want to retrive records in sequence...
select * from HumanResources.Department
select DepartmentID ,Name from HumanResources.Department order by Name 

--using top keyword....
select * from HumanResources.EmployeeDepartmentHistory 
select top 3 BusinessEntityID,Enddate 
from HumanResources.EmployeeDepartmentHistory where Enddate is not null

select top 50 percent * from HumanResources .EmployeeDepartmentHistory

Aggregate functions 
---------------------
1)count:it will give u no of rows in a table 
eg: select count(*) from HumanResources.EmployeePayHistory
2)sum:it give u sum of all the values in 
column having numeric values
eg:select sum(Rate) from HumanResources.EmployeePayHistory
3)max: it will give me highest value in column
eg: select max(Rate) from HumanResources.EmployeePayHistory
4)min;it will give me the lowest value in column
eg: select min(Rate) from HumanResources.EmployeePayHistory
5)avg: it will give the average of column
 means sum_of_ numbers /total_no_of_values present in a column
eg: select avg(Rate) from HumanResources.EmployeePayHistory


Group By 
----------

-- whatever columns are there in select clause that should be there in 
---group by clause also if not there then apply aggregate functions to the column of select clause 
 -- but when u dont hav much columns like single column only then u can use aggregate function as per the need of the qeustion 
-- when ever they are asking for each ,for every apply group by 
create table id(id int)
insert into id values(1),(2),(1),(1),(1),(2),(3)

-- give me count of 1,2,3 in the table 
select * from id
 select id from id group by id ;-- it will give me the no of groups 

-- i want the count of group then 

select id,count(id) as 'count' from id group by id -- here one columnis there so used as per requirmnt 
 

create table dept1(
  deptno int ,
  dname  varchar(14),
  loc    varchar(13),
  constraint pkk1 primary key(deptno)
);
 
 create table emp1(
  empno    int primary key,
  ename    varchar(10),
  job      varchar(9),
  mgr      int,
  hiredate date,
  sal      int,
  comm     int,
  deptno   int  foreign key  references dept1 (deptno)
);

insert into dept1 values(10, 'ACCOUNTING', 'NEW YORK');
insert into dept1 values(20, 'RESEARCH', 'DALLAS');
insert into dept1
values(30, 'SALES', 'CHICAGO');
insert into dept1
values(40, 'OPERATIONS', 'BOSTON'); 

select * from dept1;
insert into emp1 values( 7839, 'KING', 'PRESIDENT', null,'1981-11-17' , 5000, null, 10);
insert into emp1 values( 7698, 'BLAKE', 'MANAGER', 7839,'1981-05-01',2850, null, 30);
insert into emp1 values( 7782, 'CLARK', 'MANAGER', 7839,'1981-06-09', 2450, null, 10);
insert into emp1 values( 7566, 'JONES', 'MANAGER', 7839,'1981-04-02', 2975, null, 20);
insert into emp1 values( 7788, 'SCOTT', 'ANALYST', 7566,'1987-04-19', 3000, null, 20);
insert into emp1 values( 7902, 'FORD', 'ANALYST', 7566, '1981-12-03', 3000, null, 20);
insert into emp1 values( 7369, 'SMITH', 'CLERK', 7902,'1980-12-17', 800, null, 20);
insert into emp1 values( 7499, 'ALLEN', 'SALESMAN', 7698, '1981-02-20', 1600, 300, 30);
insert into emp1 values(  7521, 'WARD', 'SALESMAN', 7698, '1981-02-22', 1250, 500, 30);
insert into emp1 values( 7654, 'MARTIN', 'SALESMAN', 7698, '1981-09-28', 1250, 1400, 30);
insert into emp1 values(  7844, 'TURNER', 'SALESMAN', 7698, '1981-09-08', 1500, 0, 30);
insert into emp1 values( 7876, 'ADAMS', 'CLERK', 7788, '1987-05-23', 1100, null, 20);
insert into emp1 values( 7900, 'JAMES', 'CLERK', 7698, '1981-12-03', 950, null, 30);
insert into emp1 values( 7934, 'MILLER', 'CLERK', 7782, '1982-01-23', 1300, null, 10);


select * from dept1;
select * from emp1;


-- give me count of employees in each dept 

-- use child table emp only

select deptno from emp1  group by deptno  -- this will give me no of groups 

select deptno ,count(ename) as 'noofemployees' from emp1  group by deptno --follow my stament now 

-- give me count of employyes working in each job and also calulate min and max and sum of salary in 
-- in each job category 
select job, count(ename) as 'noofemps',max(sal) as 'maxsalary',min(sal) as 'minslary' from emp1 group by job ;

-- give me sum of saalries of employees in each job 

select job from emp1 group by job

select job ,sum(sal) from emp1 group by job 

-- now in this i want sum of slaries which is greater than 5000

select job ,sum(sal) from emp1 group by job having sum(sal)>5000


--- joins --
-- i want to join two tables for joining foriengn key is not required is not comulsory 
--- if matching values are there i can do join 

 create table dept3(deptid int primary key ,deptname varchar(30));
insert into dept3 values(10,'sales'),(20,'Marketing'),
(30,'Software'),(40,'HR');
create table emp3(empid int primary key ,empname varchar(30),
worksin int foreign key 
references dept3(deptid));
insert into emp3 values(101,'ravi',10),
(102,'kiran',20),(103,'mahesh',30),(104,'suresh',20),
(105,'satish',null);

select * from dept3;
select * from emp3;

-- wnever i am saying i want something or give me  then apply inner join 
-- but when i say not no then apply left or right join 

-- give me number of employees working in each dept
---empname --deptname 

select e1.empname,d1.deptname from emp3 e1 inner join dept3 d1
on e1.worksin=d1.deptid;

-- give me the employees who have not got the dept 

--version 1 coomand and see where null is coming 
select e1.empname,d1.deptname from emp3 e1 left join dept3 d1
on e1.worksin=d1.deptid;

--version 2 

select e1.empname,d1.deptname from emp3 e1 left join dept3 d1
on e1.worksin=d1.deptid where d1.deptname is null

-- version 3 only name he has asked 

select e1.empname from emp3 e1 left join dept3 d1
on e1.worksin=d1.deptid where d1.deptname is null

or 

select e1.empname from dept3 d1 right join emp3 e1
on e1.worksin=d1.deptid where d1.deptname is null


-- give me the dept where no employee is working 

-- version 1  to find null 

select d1.deptname,e1.empname from dept3 d1 left join 
emp3 e1 on e1.worksin=d1.deptid

-- version 2 to filter the dept 

select d1.deptname,e1.empname from dept3 d1 left join 
emp3 e1 on e1.worksin=d1.deptid where e1.empname is null;

-- he asked only dept 
select d1.deptname from dept3 d1 left join 
emp3 e1 on e1.worksin=d1.deptid where e1.empname is null;

or


select d1.deptname from emp3 e1 right join 
dept3 d1 on e1.worksin=d1.deptid where e1.empname is null;


-- give me count of employees working in each dept but now use both 
-- the tables so here u have to do group by also and also join also 
-- deptname --no of employees like this i want 
-- but like this i dont want means 
---worksin --no of employees i dont want 

--version 1 to project deptname 
select d1.deptname ,e1.empname from emp3 e1 join dept3 d1 on e1.worksin
=d1.deptid  --here deptname is getting repeated  values there apply group by to deptname

select d1.deptname ,count(e1.empname)  from emp3 e1 join dept3 d1 on e1.worksin
=d1.deptid group by d1.deptname;

-- joining with the third table 
 create table Location(locid int primary key ,locname varchar(30),empid int references 
  emp3(empid));

insert into location values (1001,'delhi',102);
insert into location values (1002,'bangalore',103);
insert into location values (1003,'pune',104);
insert into location values(1004,'chennai',105);

select * from dept3;
select * from emp3;
select * from location



-- give me all the employees who have got location and also dept 
select e1.empname,d1.deptname,l1.locname from emp3 e1 join dept3 d1 on e1.worksin=d1.deptid
join location l1 on e1.empid=l1.empid;

-- give me all the employees who got dept but not locaton 
select e1.empname,d1.deptname,l1.locname from emp3 e1 join dept3 d1 on e1.worksin=d1.deptid
left join location l1 on e1.empid=l1.empid;-- to find null values 
select e1.empname,d1.deptname,l1.locname from emp3 e1 join dept3 d1 on e1.worksin=d1.deptid
left join location l1 on e1.empid=l1.empid where l1.locname is null;-- after this filtering

select e1.empname from emp3 e1 join dept3 d1 on e1.worksin=d1.deptid
left join location l1 on e1.empid=l1.empid where l1.locname is null

-- give me all employees who got location but not dept 

select e1.empname,d1.deptname,l1.locname from emp3 e1 left join dept3 d1 on e1.worksin=d1.deptid
 join location l1 on e1.empid=l1.empid;-- to find null values 
select e1.empname,d1.deptname,l1.locname from emp3 e1 left join dept3 d1 on e1.worksin=d1.deptid
 join location l1 on e1.empid=l1.empid where d1.deptname is null;-- after this filtering

select e1.empname from emp3 e1 left join dept3 d1 on e1.worksin=d1.deptid
 join location l1 on e1.empid=l1.empid where d1.deptname is null

SET OPERATORS
-------------
In SQL Server, set operators like UNION, INTERSECT, and EXCEPT or Minus (the SQL Server equivalent of MINUS in other databases like Oracle) are used to combine the results of two or more queries. These set operators return distinct results from the queries involved.

1. UNION
Combines the result sets of two or more queries and removes duplicates.
Returns distinct values from both result sets.
2. INTERSECT
Returns only the rows that are common in both result sets.
3. EXCEPT (Equivalent to MINUS in other databases)
Returns the rows from the first query that are not present in the second query.

Rules for Using Set Operators:

The number of columns and their data types must be the same in both queries.
The order of the columns must be the same.
Example Scenario:
Let's work with two tables, Employees_A and Employees_B, which contain some employee records.

-- Table: Employees_A
CREATE TABLE Employees_A (
    employee_id INT,
    first_name NVARCHAR(50),
    last_name NVARCHAR(50)
);

INSERT INTO Employees_A (employee_id, first_name, last_name)
VALUES (1, 'John', 'Doe'),
       (2, 'Jane', 'Smith'),
       (3, 'Alice', 'Johnson');

-- Table: Employees_B
CREATE TABLE Employees_B (
    employee_id INT,
    first_name NVARCHAR(50),
    last_name NVARCHAR(50)
);

INSERT INTO Employees_B (employee_id, first_name, last_name)
VALUES (2, 'Jane', 'Smith'),
       (3, 'Alice', 'Johnson'),
       (4, 'Bob', 'Brown');


-- Get all distinct employees from both tables
SELECT employee_id, first_name, last_name FROM Employees_A
UNION
SELECT employee_id, first_name, last_name FROM Employees_B;


-- Get the employees that are present in both tables
SELECT employee_id, first_name, last_name FROM Employees_A
INTERSECT
SELECT employee_id, first_name, last_name FROM Employees_B;



-- Get employees that are present in Employees_A but not in Employees_B
SELECT employee_id, first_name, last_name FROM Employees_A
EXCEPT
SELECT employee_id, first_name, last_name FROM Employees_B;


-- Combine UNION, INTERSECT, and EXCEPT in one query
-- Step 1: Find all employees from both tables using UNION
-- Step 2: Find common employees using INTERSECT
-- Step 3: Find employees that are only in Employees_A but not in Employees_B using EXCEPT
SELECT employee_id, first_name, last_name FROM Employees_A
UNION
SELECT employee_id, first_name, last_name FROM Employees_B
INTERSECT
SELECT employee_id, first_name, last_name FROM Employees_A
EXCEPT
SELECT employee_id, first_name, last_name FROM Employees_B;



-- using joins along with set operators 
--------------------------------------------
-- let us take emp1 and dept1 
select * from dept1;
select * from emp1 ;

-- give me all the employees who are working as clerk job or working in dept sales 

select e1.ename from emp1 e1 join dept1 d1 on e1.deptno=d1.deptno where e1.job='CLERK'
union
select e1.ename from emp1 e1 join dept1 d1 on e1.deptno=d1.deptno where d1.dname='SALES'
-- give me all the employees who are working as clerk job and working in dept sales 
select e1.ename from emp1 e1 join dept1 d1 on e1.deptno=d1.deptno where e1.job='CLERK'
intersect 
select e1.ename from emp1 e1 join dept1 d1 on e1.deptno=d1.deptno where d1.dname='SALES'

-- give me all the  employees who are working as clerk job but not in  working in dept sales 
select e1.ename from emp1 e1 join dept1 d1 on e1.deptno=d1.deptno where e1.job='CLERK'
except
select e1.ename from emp1 e1 join dept1 d1 on e1.deptno=d1.deptno where d1.dname='SALES'

some assingment 
-----------------
First create three tables like this one is students and another is classes and another is studentclass 
so there is many to many  relation ship between two tables so i have here one junction table okay so answer the 
 below question using junction when junction table is there never join two tables directly use 
 junction table that is the hint

  create table students(studentid int ,studentname varchar(30));
insert into students values(1,'john'),(2,'Matt'),(3,'James');
create table classes(classid int ,classname varchar(30));
insert into classes values(1,'art'),(2,'history'),(3,'Maths');
create table studentclass(studentid int,classid int );
insert into studentclass values(1,1),(1,2),(3,1),(3,2),(3,3);
 
select * from students;
select * from classes;
select * from studentclass;

Q)what will be best possible join if i want to know all 
the students u have taken classes ?

select distinct s1.studentname  from Students s1 join StudentClass sc on sc.studentid=s1.studentid

Q) what will be the best possible join if we want to retrive 
all the students who have 
not signed for any batches ?

select distinct students.studentname  from 
students left join studentclass on students.studentid=
studentclass.studentid left  join classes on classes.classid 
=studentclass.classid where classes.classid is null; 

or 

SELECT  s.studentname 
FROM students s 
LEFT JOIN studentclass sc 
ON s.studentid = sc.studentid
WHERE sc.studentid IS NULL;
