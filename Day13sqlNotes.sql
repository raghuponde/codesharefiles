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






