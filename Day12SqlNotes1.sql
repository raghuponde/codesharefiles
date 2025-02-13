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

update Student set studname='kiran' where studid=103;

--updating multiple columns in a single row (cant update prmary key )
update Student set studname='suresh',location='Pune' where studid=101;

-- updating multiples rows of a single column supoose  i want send some employees to in bangalore only location 

update Student set location='Bangalore' where studid in (101,104,105);

-- I cannot do update for rows and columns at a time okay 

--



