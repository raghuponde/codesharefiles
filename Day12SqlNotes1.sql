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

-- not null ot null this cann be applied only as column level dont leave the column blank if it is not null
-- duplicate are allowed for not null column but dont leave the column as blank something has to be written there 
create table demo1(id int not null,fname varchar(30),mname varchar(40),
lname varchar(30));

insert into demo1 values(null,null,null,null);--error because null is not allowed 
insert into demo1 values(101,null,null,null)-- okay this is as null is not there 
insert into demo1 values(101,null,null,null)-- okay as 101 duplicate is allowed 

insert into demo1 values(101,null,null,'janaki')--okay 


--unique constraint means you cannot enter duplicate values but u can enter null values but how many times null let us check 
create table demo2(id int unique,fname varchar(30) not null ,mname varchar(40) null,
lname varchar(30) not null);









