Introduction to SQL:
____________________ 
SQl means structured query language okay some people say sequel and some people say sql .it was developed in 1970 and still it has not changed much if u see front end programming languages they will  be keep on changing.check slide 58 what is is actulally so in procedural and impartive languages we write algortithms and etc things to get things done .we can do four things with sql as per the slide 59 so when  are working with oracle u will use pl-sql and if u are working with sql server it is called transact sql so almost same but sytax wise the things will differ thats all .


so we store the data in databases and applications will be using those databases okay and the we call those kind of applications as database applications .so u can check slide 60 for this which will show various types of applications going on .

i want to interact with database so that is possible through sql etc .

sql has been subcategorized into 5 parts 

DDL(Data defnition language ) 

For defining structure of objects in database means objects means nothing but tables ,stored procedures ,views constraints etc which we will learning later on .and it privides four commands create,alter,drop,truncate  so these are the commands which completely deals with structure.

DML(Data manipulation language ) 

This is the language which is going to deal with data in database tables which provides following commands like insert,update and delete 

Note : drop will destroy the table and delete will destroy the rows ( data ) and alter means structure is modified and update means data is modified .


DQL(data query language ) 
This language is used to retrive from database using the command select 

DCL ( data control language ) 

It is used for managing the security of data and objects in database so commands are grant ,revoke etc 


TCL(Transaction control language ) 

This language is used for managing the transaction which provides commands like commit,rollback and save transaction etc .


referential integrity constratint which is also called foreign key ...
---------------------------------------------------------------------
Definition : Two Tables are said to related to each other if they are having one common column between them and that common column should act as primary key in the master table and the same column will be called foreign key in child .

The table which i create first is the master table  which is not depending on any table for is exsistence 
but the child table will depend on master table it should contain in the foreign key only the values of master table .


create table Dept(deptid int primary key ,deptname varchar(50));
select * from Dept ;
insert into Dept values (10,'Sales'),(20,'HR'),(40,'Marketing');

create table Emp (empid int primary key ,empname varchar(40),
deptid int foreign key references Dept(deptid));

create table Emp1 (empid int primary key ,empname varchar(40),
worksin int,constraint fwer foreign key(worksin) references Dept(deptid));


insert into Emp values (101,'ravi',20)
insert into Emp values (102,'kiran',40);

select * from Dept;
select * from Emp;

here always the relationship between master table and child table will be one to many which from master to child 

In foreign key column values can be repeated and also null values allowed but value whic is not there in master table should be kept in child table okay .



create table customer(custid int primary key ,custname varchar(40));
insert into customer values(101,'ravi');
insert into customer values(102,'suresh');
create table product(prodid int primary key ,prodname varchar(40),
custid int foreign key references customer(custid));
insert into product values(10,'TV',102);
insert into product values(20,'watch',101);
insert into product values(30,'laptop',101);

-- so here table level and also different column name i can give ..for foreign key column
create table product1(prodid int primary key ,prodname varchar(40),
buyedby int,constraint fks foreign key(buyedby) references customer(custid));

create table doctor(docid int primary key ,
docname varchar(40));
insert into doctor values(101,'ravi');

create table patient(patid int primary key ,patname varchar(50),
treatedby int references doctor(docid));
insert into patient values(1001,'suresh',101);
create table treatment (treatmentid int primary key ,
docid int ,patid int ,
constraint dk foreign key(docid) references doctor(docid),
constraint pk2 foreign key(patid) references patient(patid))

insert into treatment values(10,101,1001);

Truncate and Delete command usage :
------------------------------------
The TRUNCATE and DELETE commands in SQL are both used to remove records from a table, but they differ significantly in how they operate and the effects they have.

Key Differences between TRUNCATE and DELETE

+----------------------+---------------------------+---------------------------+
|       Feature        |         TRUNCATE           |          DELETE            |
+----------------------+---------------------------+---------------------------+
| Operation Type       | DDL (Data Definition)      | DML (Data Manipulation)    |
|----------------------|---------------------------|---------------------------|
| Speed                | Faster                    | Slower                    |
|----------------------|---------------------------|---------------------------|
| Logging              | Minimal logging            | Fully logged              |
|----------------------|---------------------------|---------------------------|
| WHERE Clause         | Not Supported              | Supported                 |
|----------------------|---------------------------|---------------------------|
| Transaction          | Cannot Rollback (mostly)   | Can Rollback              |
|----------------------|---------------------------|---------------------------|
| Triggers             | No triggers are fired      | Triggers are fired        |
|----------------------|---------------------------|---------------------------|
| Resets Identity      | Yes, identity is reset     | No, identity is retained  |
|----------------------|---------------------------|---------------------------|
| Permissions          | ALTER required             | DELETE required           |
|----------------------|---------------------------|---------------------------|
| Space Usage          | Frees space immediately    | Space freed per row       |
|----------------------|---------------------------|---------------------------|
| Constraints          | Cannot truncate if FK exists| Can delete with FK        |
+----------------------+---------------------------+---------------------------+


CREATE TABLE Employees (
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Department VARCHAR(50)
);

-- Insert some sample data
INSERT INTO Employees (FirstName, LastName, Department)
VALUES 
('John', 'Doe', 'HR'),
('Jane', 'Smith', 'Engineering'),
('Mark', 'Brown', 'Sales');

DELETE FROM Employees WHERE Department = 'Engineering';

What happens?
Only the rows where Department = 'Engineering' will be deleted.
This action is fully logged, meaning each deletion is recorded in the transaction log.
The identity column does not reset.
This action can be rolled back if it’s part of a transaction.

SELECT * FROM Employees;(run the query and see what is the result ) 

3. TRUNCATE Command
If you want to remove all the rows from the Employees table without logging each row deletion, 
you would use the TRUNCATE command:

TRUNCATE TABLE Employees;

What happens?
All rows in the Employees table are removed immediately.
The action is minimally logged; it does not log each row deletion, only the deallocation of the data pages.
The identity seed is reset to its original value (if the table has an identity column).
Triggers do not fire, and constraints are not checked.
This action cannot be used with a WHERE clause.

Key Use Cases:
DELETE: Use DELETE when you want to selectively remove rows or need to maintain transaction control and use a WHERE clause.
TRUNCATE: Use TRUNCATE when you want to quickly remove all rows in a table and reset the identity seed, without needing to log individual deletions.


--difference between truncate and delete 

--first diff where clause cannot be used in truncate 

create table EmpInfo(empid int identity(1,1) primary key ,empname varchar(40),
salary int )

insert into EmpInfo values('ravi',34000);
insert into EmpInfo values('suresh',45000)
insert into EmpInfo values('sita',39000)
select * from EmpInfo

delete from EmpInfo where empname='suresh'

delete from Empinfo

insert into EmpInfo values('jyothi',59000)

---again inserting values fresh 
insert into EmpInfo values('satish',34000);
insert into EmpInfo values('monika',45000)
insert into EmpInfo values('madhu',39000)

--now trunate command 
--truncate table EmpInfo where empname='monika' not allowing 

truncate table EmpInfo 

---again inserting values fresh after truncate command 
insert into EmpInfo values('satish1',34000);
insert into EmpInfo values('monika1',45000)
insert into EmpInfo values('madhu1',39000)

-- check the values it will reset to 1 like that ...

where to keep foreign key 
-----------------------
when one to one realtinship is there you can keep foreign key anywhere in the tables here no master and no child table will be there 

when one to many is there put foreign key in the child table and which table u create after master is nothing but child table only 

when many to many relationship is there the table is splitted into two one to many relationships .slide 33 refere 

alter command check in seperate page :
--------------------------------------
--Alter command 
-------------------

--it is used to modify the structure of exsisting table using which u can perform any of the following tasks 

--1)change the datatype of the column 
--2)Increase or Decrese the width of the columnm
--3)change  null to not null and not null to null 
--4)add a new column 
--5)drop an exsisting column 
--6)add a new constraint
--7)drop an exisiting constraint .

--for 1,2,3 
-- alter table <Tname> alter col <colname><dtype>[width][notnull/null]

create table students (sno int,sname varchar(50),class int)

insert into students values (101,'ravi',12)
insert into students values(102,'kumar',4)
insert into students values (103,'senthil',8)

select * from students;

--for 1,2,3 
-- alter table <Tname> alter column <colname><dtype>[width][notnull/null]

-- always change data type in compatible manner only mean  string to string or number to number 

-- change varchar to char or int to decimal like that 

alter table students alter column sname char(60) not null;

sp_help students-- to check type has been chnaged or not 

-- 

 
--adding a new column 

--alter table <Tname> add <colname> <dtype><width>[not null]
--[constraint <cname>] 

alter table students add city varchar(40) not null -- this command is giving error 

-- above command will not work with not null both creation of new column and  filling 
-- the values at a time is not possible 

-- so i will write like ths 

alter table students add city varchar(40)

select * from Students;

--now run select u can see a column added wit null values 

--101	ravi                                                        	12	NULL
--102	kumar                                                       	4	NULL
--103	senthil                                                     	8	NULL

--so a I am getting values like this but u know i want to put not null also along with adding column 
--so updae nulll values then u add frist command which is adding null with change of type which i will not do 

update students set city ='Hyderabad' where sno in (101,102,103)

-- go to first command see above formula 

--alter table <Tname> alter column <colname><dtype>[width][notnull/null]

alter table students alter column city varchar(40) not null -- now it will work 


-- drop an exisiting column 
--alter table <Tname> drop column <colname>

alter table students drop column city 

select * from students

-- adding a new constraint 

--alter table <Tname> add [constraint<const_name>]
--typeofconstraint(<collist>)
-- adding  a constraint on class column 
alter table students add constraint ck12 check(class <=12);

insert into students values(104,'sohan',14);--error


--dropping a constraint
--alter table <table_name> drop constraint <constraint_name>
alter table students drop constraint ck12


insert into students values(104,'sohan',14) -- now no error as constraint is removed


-- can i add primary key for the above which is one type of constraint same formuala

--alter table <Tname> add [constraint<const_name>]
--typeofconstraint(<collist>)

alter table students add constraint pk34 primary key(sno);-- error 

--why because column is nulllable first make the column not null using first formuaa

--alter table <Tname> alter column <colname><dtype>[width][notnull/null]
alter table students alter column sno int not null

-- after making not null now apply that formuals of adding constraint 

alter table students add constraint pk34 primary key(sno) -- now no error 

--now primary key is applied 

sp_help students

-- can  i remove primay key constraint 

alter table students drop constraint pk34;

--yes i can remove 

--so this is all about alter command usage in sql server 



Transaction demo 
------------------
In SQL Server, COMMIT and ROLLBACK are used to manage transactions. A transaction is a unit of work that is either completely applied to the database or completely rolled back, ensuring consistency and integrity.

Key Concepts:
COMMIT: Saves all changes made during the transaction to the database.
ROLLBACK: Undoes all changes made during the transaction.
Example Scenario:
Let’s walk through a practical example where you insert, update, and delete records in a transaction, and either commit or rollback the changes.

-- Create a sample table
CREATE TABLE Employeedata (
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Department VARCHAR(50)
);

--Transaction Demo 

CREATE TABLE Employeedata (
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Department VARCHAR(50)
);
--code for rollback transaction 
-----------------------------------

BEGIN TRANSACTION;
DECLARE @EmpID INT;
-- Insert a new employee and get the generated EmployeeID
INSERT INTO Employeedata (FirstName, LastName, Department) 
VALUES ('ravi1', 'kumar1', 'software1');

SET @EmpID = SCOPE_IDENTITY(); -- Get the last inserted ID

-- Update the inserted employee
UPDATE Employeedata SET Department='Testing' WHERE EmployeeID = @EmpID;

-- Force rollback by checking for an ID that does not exist
IF NOT EXISTS (SELECT * FROM Employeedata WHERE EmployeeID = 9999) -- EmployeeID 9999 does not exist
BEGIN
    PRINT 'Error: Employee not found, rolling back the transaction';
    ROLLBACK TRANSACTION;
END
ELSE
BEGIN
    PRINT 'No errors, committing transaction';
    COMMIT TRANSACTION;
END
--checking ---

select * from Employeedata

-------code for commit transaction ----
BEGIN TRANSACTION;

DECLARE @EmpID1 INT;

-- Insert a new employee and get the generated EmployeeID
INSERT INTO Employeedata (FirstName, LastName, Department) 
VALUES ('ravi1', 'kumar1', 'software1');

SET @EmpID1 = SCOPE_IDENTITY(); -- Get the last inserted ID

-- Update the inserted employee
UPDATE Employeedata SET Department='Testing' WHERE EmployeeID = @EmpID1;

-- Check if the employee exists
IF NOT EXISTS (SELECT * FROM Employeedata WHERE EmployeeID = @EmpID1)
BEGIN
    PRINT 'Error: Employee not found, rolling back the transaction';
    ROLLBACK TRANSACTION;
END
ELSE
BEGIN
    PRINT 'No errors, committing transaction';
    COMMIT TRANSACTION;
END


--chekcing transaction 

select * from Employeedata


---code for savepoint ------

BEGIN TRANSACTION;
DECLARE @EmpID3 INT;

-- Insert a new employee and get the generated EmployeeID
INSERT INTO Employeedata (FirstName, LastName, Department) 
VALUES ('ravi3', 'kumar3', 'software3');
save transaction savepoint1;
SET @EmpID3 = SCOPE_IDENTITY(); -- Get the last inserted ID
-- Update the inserted employee
UPDATE Employeedata SET Department='Testing6' WHERE EmployeeID = @EmpID3;

-- Check if the employee exists
IF NOT EXISTS (SELECT * FROM Employeedata WHERE EmployeeID = 999) -- again rolling back but till save point1
BEGIN
   PRINT 'An error occurred, rolling back only part of the transaction';
    ROLLBACK TRANSACTION savepoint1; 
    PRINT 'Rolled back the error, but Employee is only inserted but that is not updated ';
END
ELSE
BEGIN
    PRINT 'No errors, committing transaction';
    COMMIT TRANSACTION;
END

-- chekcing whether save point is applied or not 

select * from Employeedata ;

Functions
------------
Functions in sql server :
----------------------------------
Function will always return a value but we have seen that a 
stored procedure may or may not return a value .
we have already used many functions in sql server 
like sqrt,sum square ,substring like that but these are system defined
functions ...so now we are going to create 

User Defined functions: The function which are created by end user
is called as user defined  functions .When you cant find a built-in 
function that  meets your needs, you can write your own.

UDFs come in three flavors: 
1)scalar functions
2)in-line table valued functions
3) multi-statement table valued functions. 

Function is always used with select clause....

syntax :
-------

create function <function_name> ( paramters_list)
returns <function_type>
as
begin

------
return ;
------
end

execution : select <function_name> from <table_name>

Scalar function:
------------------
scalar functions accept a  parameter and return a single 
data value of type specified in RETURNS clause
A scalar function can return any data type except
text,ntext,image,cursor and timestamp.

CREATE FUNCTION <function_name>
(@input_variables  type)
RETURNS data_type of result returned by function
AS
BEGIN
.....  SQL Statements
    RETURN (data_value)
END

select <function_name>
--demo1
create function multiply(@x int ,@y int)
returns int
as
begin
return @x*@y;
end 

select dbo.multiply(12,3);

select * from students

select dbo.multiply(sno,class) from students;

--example 2 on scalar function 
--____________________________
create table orders(orderid int primary key ,orderdate datetime,
whichcustomer varchar(10))

insert into orders values(101,'1996-08-01','c01')
insert into orders values(102,'1997-04-02','c01')
insert into orders values(103,'2012-08-01','c01')
insert into orders values(104,'2013-08-05','c02')
insert into orders values(105,'2014-08-01','c02')

select * from orders;
--write a function to find last or latest  order ordered by the given customer ..
-- having two customers i will give customer id which is whichcustomer you have to 
-- tell me his latest order usingn a function

create function findlatestorder(@custid varchar(10))
returns datetime
as begin
declare @recentorder datetime;

select @recentorder= max(orderdate) from orders where whichcustomer=@custid;
return @recentorder;
end 

select dbo.findlatestorder('c01')

--suppose u want to alter the fucntion like u didint like the variable name 
-- @recentorder1 u can do it so for available functions only  u can alter 
-- dont alter the function which is not there 

alter function findlatestorder(@custid varchar(10))
returns datetime
as begin
declare @recentorder1 datetime;

select @recentorder1= max(orderdate) from orders where whichcustomer=@custid;
return @recentorder1;
end 
Example 3 on scalar function 
__________________________________
create table Books(
title_id varchar(10),
pages int,
qty_sold int)
insert into Books values('bo101',200,89)
insert into Books values('b0102',300,79)
insert into Books values('b0103',700,85)
select * from Books


Q) write a function on this table which will give me no of books sold
based on id value u provide to the function ?



create function copies_sold(@title_id varchar(10))
returns int
as
begin 
declare @quantity int;
select @quantity=0;
select @quantity=qty_sold from Books where title_id=@title_id
return @quantity;
end 

select dbo.copies_sold('bo101')

Table valued functions:
-------------------------
A table valued function returns a table
 as an output,which can be derived as a part of 
select statement.Table valued function return 
the output as a table data  datatype.
The Table data type is special data type used to store 
set of rows,which returns the result set of the table valued function

Inline table valued function:
-------------------------------
In-line UDFs return a single row or multiple 
rows and can contain a single SELECT statement. 
Because in-line UDFs are limited to a single SELECT,
 They cant contain much logic.An inline function does not contain function body within begin and end statement

syntax:
--------
create function <function_name>(parameters_list)
returns table as
return (<any select command which will give me resultset>)

procedure of execution(to call inline table function) :
-------------------------------------------------------
select * from <function_name>(parameters_list)
-- Example on inline table valued function 
_______________________________________________
create table employee_info(
     ID          int,
     name        varchar (10),
     salary      int,
     start_date  datetime,
     city       varchar (10),
     region      char (1))

insert into employee_info
               values (1,  'Jason', 40420,  '02/01/94', 'New York', 'W')
 insert into employee_info 
               values (2,  'Robert',14420,  '01/02/95', 'Vancouver','N')
 insert into employee_info 
               values (3,  'Celia', 24020,  '12/03/96', 'Toronto',  'W')

select * from employee_info

-- write a inline table value function to find employees in the region 


    --create function <function_name>(parameters_list)
--returns table as
--return (<any select command which will give me resultset>)

create function listemp (@region char(1))
returns table as 
return select * from employee_info where region=@region;

select * from listemp('W')

 MultiLine Table valued function:
------------------------------------
A multiLine table valued function uses multiple statements
to build the table that is returned to the calling statement.
The function body contains Begin and end block
which hold a series of Transact-SQl statements to build and
 insert rows into a temperory table.The temperory table is returned in resultset and is created based on specification mentioned  in function.The major difference in the way that you define a multi-statement, table-valued function from the previous example is that you must declare the table that you will be 
returning.
syntax:
create function <function_name> (parameters-list)
returns @table Table (list_of_column_names)
as
begin 
insert @table 
--------
-----
end 
--
-- multiline table valued function means here begin and end will come 
-- means it will return a table only but how many columns i will decide to 
-- project ..how many columns i have to project that i will decide and 
-- i will only not just retun table but i can return some extra code also 
-- or i can display some exta code also so begin and end is ther in 
-- multi line table valued function 

-- write a multiline table value function to find employees in the region 

--create function <function_name> (parameters-list)
--returns @table Table (list_of_column_names)
--as
--begin 
--insert @table 
----------
-------
--end 

create function listempmultiline(@region char(1))
returns @table Table 
(
 ID  int not null,
 name  varchar (50),
 city       varchar (40),
 message varchar(100)
)
as 
begin
if exists(select ID,name,city from employee_info where region=@region)

begin
insert into @table(ID,name,city,message)
select ID,name,city,'present in that region' from employee_info where region=@region;
end

else

begin
insert into @table(ID,name,city,message) values(0,'Nodata','Nodata','No values are there in the table for that region');

end
return;
end

select * from listempmultiline('Z')

INBUILT FUNCTIONS IN SQL SERVER
---------------------------------
-
--1)Mathematical functions:
--_______________________

--a) abs(n) : it returns a absolute value of given number n
   eg: select abs(-12)=12
--b)square(n) : It return the square of n
eg: select square(25)=9
--c)sqrt(n) :it will give u square root of n
eg: select sqrt(4)=2
--d)power(n,m) :it will give u n to the power of m value
eg:select power(2,3) =8
--e)round(n,size):it will round a value n is the value 
--and size is how many values to round
eg:select round(156.6789,2)=156.68
     select round(156.6789,0)=157
      select round(156.6789,-1)=160
--f)ceiling(n) :it returns an least integer greater than n
  eg: select ceiling(15.6)=16
         select ceiling (-15.6)=-15
--g)floor(n) :it returns the highest integer less than given n
eg: select floor(15.6)=15
select floor(-15.6)=-16



--2)String functions :strings are nothing but set of chracters so these
--string functions can also be applied to columns having string values.
--_________________________________________________
a) Ascii(s): it returns ascii value of first character in the given string 
eg: select ascii('D')=65
select ascii('def')=100
b)char(n):This is reverse of ascii it takes ascii value 
and returns the character represented by it
eg: select char(65)=A
c)Len(s) : it returns length of given string
eg:select len('Tanzania')=8
select len(Title) from HumanResources.Employee
d)lower(s):it return given string converted into lower case
eg: select left(Title,3) from HumanResources.Employee
e)upper(s):it retuen the given string converted in upper case
eg: select upper('apple')=APPLE
f)  left(s,n) it returns the selected n no of  characters from left
   side of given string
  eg: select  left('Hello',3)=Hel
g)right(s,n) : same as above but from right 
h)substring (s,start,length) :it returns part of string from a given string
    s 
eg: select substring('Hello',1,3)=Hel

g) reverse(n): it returns the given string in reverse order.
eg:select reverse('Hello')=0lleH
h)Ltrim(s) : it eilimates empty character that are present in left side 
of given string s
select Rtrim('hello             ')
eg: select Ltrim('       hello')=hello
i)Rtrim (s) : is is ame as left but at right side we eliminate spaces 
from the given string
eg: select Rtrim('heloo     ')=heloo
j)replace (s,searchstr,replacestr): it replaces each occurence of 
searchstr with replacestr in the given string s
select replace('Hello world','o','x')=Hellx wxrld
k)stuff(s,start,length,replacestr):
it repalces specified no of characters with replace string in the 
given string s
eg: select stuff('abxxcdxx',3,2,'yy')=abyycdxx
select stuff('abxxcdxx',3,2,'yy')

3) Date functions ; 
a)getdate( ) : To get todays date we use getdate( ) function 
 eg: select getdate() as Todaysdate

b) datediff: calculates the no of  date parts between two dates.

   select datediff(mm,'01/01/1990',getdate( ) ) as Age
   select datediff(yy,'7/8/1982' ,getdate( )) as Age
   select datediff(hh,'7/8/1982',getdate() ) as Age
  select datediff(dd,'7/8/1982',getdate( )) as Age
  select datediff(mi,'7/8/1982',getdate( )) as Age
  select datediff(yy,HireDate,getdate( )) from HumanResources.Employee
 c) dateadd: It returns the datepart listed from the listed 
date as integer.

    select dateadd(mm,30,getdate( ) )

  d) datename(datepart,d) :it is used for picking any specified 
     date part value from the given date d

   Note: seconds=ss,year =yy,quarter=q,month =mm,
             day =dd,day of the year =dy,weak of the year=wk,
             milliseconds=ms,weekday=dw,hours=hh,minutes=mi

  eg:   select datename(dw,getdate( ))=monday
4) Conversion functions :
-------------------------
--when we want to convert one data type to another we go for 
--conversion functions they  are of two types
a)conversion functions :
_______________________________

convert(varchar,@x) --here @x is converted to varchar type 
cast(@x as varchar) -- here again @x is converted into varchar type @x can be of any type 

declare @age int ;
declare @name varchar(30)
set @name='ravi'
set @age=23;
print 'The person with the name '+Convert(varchar(30),@name)+' is having '+Convert(varchar(30),@age) +' years of age ';
print 'The person with the name '+@name+' is having '+Convert(varchar(30),@age) +' years of age '; 
print 'The person with the name '+cast(@name as varchar)+' is having '+cast(@age as varchar) +' years of age ';








