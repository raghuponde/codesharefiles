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
---group by clause also if not there then apply aggregate functions to the column of select clause and it is applicable 
 to more than one column only when single column is there u can use as per your wish as only only one column is there 

-- when ever they are asking for each ,for every apply group by 
create table id(id int)
insert into id values(1),(2),(1),(1),(1),(2),(3)

-- give me count of 1,2,3 in the table 
select * from id
 
