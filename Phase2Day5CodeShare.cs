ENTITY FRAMEWORK
*****************
https://www.tutorialspoint.com/entity_framework/index.htm

https://www.entityframeworktutorial.net/entityframework6/what-is-entityframework.aspx


from the above two links only take theoretical knowledge And understand the concepts and its architecture of entity framework

DBFirst apprach i am doing it 
---------------------------------

now open visual studi 2022 and add new asp.net core mvc project here let it be .net core 8.0 version only 
 
right clik on dependencies and manage nugget packages and go to browse and type this packages and install  it in your application 

which version i will tell wait so  cann use laetst one 9.0.2 if any issues comes i will change the version as i am using latest 8.0 core so  here in entity framework also 

i can use latest only 

Microsoft.EntityFrameworkCore  
Microsoft.EntityFrameworkCore.SqlServer
Microsoft.EntityFrameworkCore.Tools

and then in package manager console fire this command 

Scaffold-DbContext 'Data Source=LAPTOP-4G8BHPK9\SQLEXPRESS;initial catalog=NORTHWND;Integrated Security=true;' Microsoft.EntityFrameWorkCore.SqlServer -OutputDir Models
