create database Wipro4;
use Wipro4;

create table Student (studid int primary key ,
studname varchar(30),location varchar(40));
 
select * from Student;

--normal insert 

insert into Student values(101,'ravi','bangalore');

-- inserting as per my order 
insert into Student(location,studname,studid) values('chennai','senthil',102);

--partial insert 

insert into student(studname,studid) values('shanthi',103);--forgetting error 

--where value is forgetten there db will put null value what is null here unknown value it is not zero 

-- you cannot forget primary key column 

---multiple insert 
insert into Student values(104,'sunitha','delhi'),(105,'rajesh','patna'),(106,'junaid','hyderabad')

--updating single column in a single row (cant update prmary key )
 

  select * from Student where location=null;-- error because is null is unknown value 

select * from Student where location is null;--correct way of writing 



update Student set studname='kiran' where studid=103;

--updating multiple columns in a single row (cant update prmary key )
update Student set studname='suresh',location='Pune' where studid=101;

-- updating multiples rows of a single column supoose  i want send some employees to in bangalore only location 

update Student set location='Bangalore' where studid in (101,104,105);

-- I cannot do update for rows and columns at a time okay 

--deleting commands 
-- here i can delete rows only ether single or multile or all 

-- single row delete 

delete from Student where studid=102;


-- deleting multiple rows 

delete from Student where studid in (105,104)


-- deleting all rows dont provide condition 

delete from Student ;

-- if u want to destry the table 
drop table Student ;

Constraints : while creating the tables rules or restriction which we apply on them are called constraints while creating the table only 
we apply them 

1)null or not null

2) unique 

3) primary key constraint

4) default constraint

5)check constraint 

6)referential integrity constraint (foreign key constraint)

Among all the constraints all can be applied both at column level and at the table but null or not null and default constraint are applied 
only at the column level 
what is column level : means just beside the column i will apply 
what is table level : it is applied after declaring all columns seperately or in between any where in not with the columns but sperately it applied 

syntax for table level constraint 
----------------------------------
--consraints 
constraint <contraint_name> typeofconstraint(col list)

--consraints 
--constraint <contraint_name> typeofconstraint(col list)
--1)not null or null constraint 
-- not null ot null this cann be applied only as column level dont leave the column blank if it is not null
-- duplicate are allowed for not null column but dont leave the column as blank something has to be written there 
create table demo1(id int not null,fname varchar(30),mname varchar(40),
lname varchar(30));

insert into demo1 values(null,null,null,null);--error because null is not allowed 
insert into demo1 values(101,null,null,null)-- okay this is as null is not there 
insert into demo1 values(101,null,null,null)-- okay as 101 duplicate is allowed 

insert into demo1 values(101,null,null,'janaki')--okay 

--2)unique constraint 
--unique constraint means you cannot enter duplicate values but u can enter null values but how many times null let us check 
create table demo2(id int unique,fname varchar(30) not null ,mname varchar(40) null,
lname varchar(30) not null);

insert into demo2 values(null,'kiran',null,'kumar');-- one time null is allowed again not try this command 2nd time it will not work 
insert into demo2 values(101,'suresh','kumar','singh')--okay will run but again 101 if u give it will not run as it is unique
insert into demo2 values(102,'suresh','kumar','singh')--okay as 102  is given 

--with table level defining unique constraint 
create table demo3(id int ,fname varchar(30) not null ,mname varchar(40) null,
lname varchar(30) not null,constraint uk11 unique(id) );

-- it can have multiple columns also and many times also i can apply unique constraint 

create table demo4(id int ,fname varchar(30) not null ,mname varchar(40) null,constraint uk88 unique(fname),
lname varchar(30) not null,constraint uk141 unique(id,lname) );

--3)Primary key constraint
-- a combination of not null and unique constrraint is nothing but primary key 


create table demo5(id int primary key ,fname varchar(30) not null ,mname varchar(40) null,
lname varchar(30) not null);-- primary key as column level 

create table demo6(id int ,fname varchar(30) not null ,mname varchar(40) null,
lname varchar(30) not null,constraint pk23 primary key(id));-- used as table level 


create table demo7(id int ,fname varchar(30) not null ,mname varchar(40) null,
lname varchar(30) not null,constraint pk24 primary key(id,lname))-- composite primary key table level

create table demo8(id int ,fname varchar(30) not null ,mname varchar(40) null,
lname varchar(30) not null,constraint pk25 primary key(id,lname,fname))--compsotie primary key with 3 columns 

create table demo9(id int primary key  ,fname varchar(30) not null ,mname varchar(40) null,
lname varchar(30) not null,constraint pk28 primary key(lname)) --error one time only keyword primary key is used 

create table demo10(id int primary key  ,fname varchar(30) not null ,mname varchar(40) null,
lname varchar(30) not null primary key )--error as multiple times i am using primary key one time only use but put many cols in that  


--4)Default constraint : here if u forget any column system will put null to that column but i want my default value there so 
-- default constraint is used 

create table employee(empid int primary key ,empname varchar(30) default 'Mr.X',salary int);

insert into employee(empid,salary) values(101,23000);

select * from employee;

--5)check constraint :to check some table values based on condtion then check constraint this also can be applied as col and table level

create table bankdemo(bankid int primary key ,bankname varchar(50),balance int check(balance>1000));-- as column level 
create table bankdemo1(bankid int primary key ,bankname varchar(50),balance int,constraint ck34 check(balance>1000));-- as table  level 


insert into bankdemo values (101,'BOI',300); -- will get erroro as 300 is less than 1000
insert into bankdemo1 values (101,'BOI',1000) -- here also eror as more than 1000 only u need to enter 

insert into bankdemo1 values(101,'BOB',2000);-- okay will run 

--6)Foreign key constraint : also called as referencial integrity constraint .
-- two tables are said to be related to each other if they have a common column between them and that common column should act 
-- as primary key in master table so what is master table the table which we create first is a master table and the table which we 
-- create after wards is child table always in child table only i will see this foreign key ..
-- when i am saying common column it means that that common column should have common value mean column name can be different 
-- and remember that both master and child tables will have their primary keys defined 
-- child table will take in foreign key those values only which are there in master table primary key in foreing key i can enter null 

-- let us create a table now 

create table dept(deptid int primary key ,deptname varchar(40));--master table 

insert into dept values (10,'HR');
insert into dept values (20,'Software');
insert into dept values (30,'Sales');

select * from dept ;

-- child table emp 

create table emp(empid int primary key ,empname varchar(40) ,
deptid int foreign key references dept(deptid));-- column level 

insert into emp values (1001,'ravi',20);
insert into emp values (1002,'kiran',20);
insert into emp values (1003,'sita',null);-- null can be put in foreign key 
insert into emp values(1004,'kkk',null)-- second and many times also null is allwoed it is one time only for that employee 



-- like this also u can create child table for dept table 
--and here i am using column name different and table level foreign key i am using it here 


create table empinfo(empid int primary key ,empname varchar(40) ,
worksin  int,constraint fk120  foreign key(worksin) references dept(deptid));-- 

insert into empinfo values (1001,'ravi',20);
insert into empinfo values (1002,'kiran',30);
insert into empinfo values (1003,'sita',null);-- null can be put in foreign key 
insert into empinfo values(1004,'suresh',50) --error because 50 dept is not there 

-- now the requirment is create three tables doctor ,pateint and tratement here doctor is master table of 
-- pateint for in tratemment both doctor and pateint is involved so two fk is needed one is doctor another is patient

-- Table: Doctor
CREATE TABLE Doctor (
    Doctor_ID INT PRIMARY KEY,
    Name VARCHAR(100)
  
);

insert into Doctor values(10,'ravi');
insert into Doctor values(20,'sai')

-- Table: Patient
CREATE TABLE Patient (
    Patient_ID INT PRIMARY KEY,
    Name VARCHAR(100),
    Doctor_ID INT,  -- Foreign Key linking to Doctor
   constraint fk567 FOREIGN KEY (Doctor_ID) REFERENCES Doctor(Doctor_ID) 
);

insert into Patient values(1001,'santosh',20)

-- Table: Treatment
CREATE TABLE Treatment (
    Treatment_ID INT PRIMARY KEY,
    Patient_ID INT,  -- Foreign Key linking to Patient
    Doctor_ID INT,   -- Foreign Key linking to Doctor
   
 constraint fk785   FOREIGN KEY (Patient_ID) REFERENCES Patient(Patient_ID) ,
  constraint fk562  FOREIGN KEY (Doctor_ID) REFERENCES Doctor(Doctor_ID) 
);

insert into Treatment values(101,1001,10)



