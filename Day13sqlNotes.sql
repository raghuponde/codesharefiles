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

