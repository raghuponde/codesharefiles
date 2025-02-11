
In .NET development, security and reliability are two critical aspects that developers must consider when building robust, scalable, and secure applications. The .NET platform provides a comprehensive set of features and practices that enhance both the security and reliability of applications.

Let's explore these two aspects in detail:

1. .NET Security
*******************
.NET offers various features and best practices that help ensure application security. Security in .NET involves protecting applications from unauthorized access, malicious attacks, and data breaches.

Key Security Features in .NET:
---------------------------------

a. Authentication and Authorization
ASP.NET Identity: This is a membership system that allows users to log in with credentials stored in the application or through external login providers (e.g., Google, Facebook).

JWT (JSON Web Tokens): Used for implementing token-based authentication in modern web applications, where tokens are issued to users and validated on every request.

OAuth and OpenID Connect: Standards for user authentication and authorization, often used in cloud and microservices-based systems.

Azure Active Directory (Azure AD): Enables the integration of .NET applications with Microsoft’s enterprise identity services for single sign-on (SSO) and role-based access control (RBAC).

b. Data Protection

Data Encryption: .NET supports data encryption using the Data Protection API (DPAPI), AES, RSA, and other cryptographic algorithms. Sensitive data, such as passwords and credit card details, should always be encrypted.
Hashing: Hashing is used to securely store sensitive data like passwords. In .NET, hashing algorithms like SHA-256 and PBKDF2 (Password-Based Key Derivation Function) are commonly used.
Secure String Handling: Use of SecureString to store sensitive data in memory to prevent exposure during execution.
Data Annotations for Validation: Ensures that data submitted by users is validated to prevent injection attacks and incorrect data entry.

c. Secure Communication
HTTPS: Always use HTTPS to secure communication between the client and server. Enforce HTTPS using the UseHttpsRedirection() middleware in ASP.NET Core.
Transport Layer Security (TLS): .NET supports modern versions of TLS (1.2 and 1.3), ensuring secure communication between systems.
Certificates: .NET supports X.509 certificates for securing data transfers and enabling mutual authentication.

d. Input Validation and Sanitization
Anti-Cross-Site Scripting (XSS): .NET provides automatic output encoding to prevent XSS attacks. In Razor views, output is automatically encoded unless you explicitly mark it as raw.
SQL Injection Prevention: Using parameterized queries or ORMs like Entity Framework protects against SQL injection attacks by separating code and data.

e. Security Middlewares
CORS (Cross-Origin Resource Sharing): .NET allows you to configure CORS policies to control which external domains can access your APIs, preventing Cross-Site Request Forgery (CSRF) attacks.
Anti-Forgery Tokens: ASP.NET provides anti-CSRF mechanisms using tokens to validate legitimate requests.

f. Identity and Access Control
Claims-Based Authentication: This allows granular control of access based on claims (user attributes). It is useful for implementing role-based access control (RBAC) or policy-based access.
Role-Based Authorization: ASP.NET supports role-based authorization to restrict access to certain areas of your application based on user roles.
Windows Authentication: .NET applications can integrate with Active Directory for enterprise-level security.

g. Code Access Security (CAS)
CAS enables you to control the permissions that .NET code can access, ensuring that even if an attacker injects malicious code, the code won't be able to perform restricted actions (like accessing the file system).
Security Best Practices:
Use strong encryption for sensitive data.
Use HTTPS and secure cookies for all web applications.
Validate and sanitize all user inputs.
Avoid hardcoding sensitive information (use Azure Key Vault, configuration files with encryption).
Regularly update libraries and dependencies to mitigate vulnerabilities.


2. .NET Reliability
*******************
Reliability in .NET ensures that the application runs smoothly, even under adverse conditions, such as high load, network issues, or hardware failures. It involves proper error handling, fault tolerance, and ensuring the application is available and consistent.

Key Reliability Features in .NET:

a. Error Handling and Logging
Global Exception Handling: Use global exception handling (in ASP.NET Core, through UseExceptionHandler middleware) to capture and log all unhandled exceptions.
Try-Catch Blocks: Handle known exceptions explicitly in code to ensure the application doesn’t crash due to runtime errors.
Custom Error Pages: Provide meaningful error messages to users instead of showing default error pages, which may expose sensitive information.
Logging: .NET provides integrated logging through the ILogger interface. This allows logging errors, information, and other events to different outputs (file system, database, cloud services like Azure Monitor).

b. Resilient and Fault-Tolerant Design
Retry Patterns: Implement retry logic using libraries like Polly to handle transient failures (such as network or database connection issues). This is particularly useful when connecting to external services.
Circuit Breaker Pattern: This pattern prevents repetitive failures by temporarily halting requests to external services when they consistently fail, avoiding system overload.
Graceful Degradation: Design your application to degrade gracefully by showing alternate content or fallbacks when a service fails (for example, returning cached data instead of throwing an error).

c. Concurrency Management
Task Parallel Library (TPL): .NET provides a robust library for handling asynchronous operations, allowing applications to scale under high load.
Async/Await: Asynchronous programming is key to building high-performance, non-blocking web applications in .NET.
Thread Safety: Ensure shared resources are accessed safely using locks or synchronization techniques to prevent race conditions in a multi-threaded environment.

d. Health Checks and Monitoring
Health Checks: ASP.NET Core provides built-in support for health checks. These checks can be used to monitor the health of the application, databases, external services, and other dependencies.
Telemetry and Monitoring: Use tools like Azure Application Insights for performance monitoring, request tracing, and diagnostic logging to keep track of application performance and resolve issues quickly.

e. Load Balancing and Scalability
Horizontal Scaling: .NET Core applications can scale horizontally across multiple servers or containers, ensuring high availability.
Azure App Services / AWS Elastic Beanstalk: These cloud platforms offer automatic scaling and load balancing for .NET applications, ensuring reliability under varying loads.

f. Database Reliability
Entity Framework Core: When using EF Core, ensure that retry mechanisms are in place for transient database failures.
Distributed Transactions: .NET supports distributed transactions, ensuring consistency across multiple services or databases in a distributed environment.

g. Distributed Systems and Microservices
Resilient Communication: When building microservices, use reliable communication mechanisms, such as gRPC, HTTP retries, and message queues (e.g., Azure Service Bus, RabbitMQ) for reliable message delivery.
Containerization: Use containers (e.g., Docker) to package and deploy .NET applications in a consistent and reliable manner across environments.

h. Testing and Continuous Integration (CI)
Unit Testing: Use unit testing (e.g., NUnit, MSTest, XUnit) to ensure that your code behaves as expected.
Integration Testing: Test how different components and services interact.
Automated Testing in CI/CD: Integrate testing into CI pipelines using services like Azure DevOps to catch errors before deployment.


create a new windows project of .net fraamework and provide the controls in this manner 

[ Username: ] [ TextBox ]   
[ Password: ] [ TextBox ]  
[      Login Button      ]  
[ Error Message Label   ] 

  so after desinging as per above rough diagram 

  using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SecurityDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        public class User
        {
            public string Username { get; set; }
            public string Password { get; set; }
            public string Role { set; get; }

            public User(string username1,string password1,string role1)
            {
                Username = username1;
                Password = password1;
                Role = role1;
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {

        }
    }
}
To untienticate the user means checking username and password and is role from the role of admin and user 
add this class after user class only but dot put it inside another class above button click only it should be there 

public class AuthService
{
    private List<User> _users = new List<User>();

    public AuthService()
    {
        //Add some sample users with roles 

        _users.Add(new User("ravi", "RaviPassword", "Admin"));
        _users.Add(new User("mahesh", "MaheshPassword", "User"));

    }

    public User Authenticate(string username, string password)
    {
        User userfound = null;
        foreach (User  user1 in _users)
        {
            if(user1.Username == username && user1.Password == password)
            {
                userfound = user1;
                break;
            }
        }
        return userfound;
    }

    public bool Authorize(User user,string role)
    {
        //checking whether user role matches with required role
        return user.Role == role;
    }
}

complete code 
---------------

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SecurityDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        public class User
        {
            public string Username { get; set; }
            public string Password { get; set; }
            public string Role { set; get; }

            public User(string username1,string password1,string role1)
            {
                Username = username1;
                Password = password1;
                Role = role1;
            }
        }

        public class AuthService
        {
            private List<User> _users = new List<User>();

            public AuthService()
            {
                //Add some sample users with roles 

                _users.Add(new User("ravi", "RaviPassword", "Admin"));
                _users.Add(new User("mahesh", "MaheshPassword", "User"));

            }

            public User Authenticate(string username, string password)
            {
                User userfound = null;
                foreach (User  user1 in _users)
                {
                    if(user1.Username == username && user1.Password == password)
                    {
                        userfound = user1;
                        break;
                    }
                }
                return userfound;
            }

            public bool Authorize(User user,string role)
            {
                //checking whether user role matches with required role
                return user.Role == role;
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {

        }
    }
}
now add another form in the project by right click the project and add Form(winform) and give name as MainForm 

and now complete code is below 

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SecurityDemo
{
    public partial class Form1 : Form
    {
        private AuthService  _authService;
        public Form1()
        {
            InitializeComponent();
            _authService=new AuthService();
        }

        public class User
        {
            public string Username { get; set; }
            public string Password { get; set; }
            public string Role { set; get; }

            public User(string username1,string password1,string role1)
            {
                Username = username1;
                Password = password1;
                Role = role1;
            }
        }

        public class AuthService
        {
            private List<User> _users = new List<User>();

            public AuthService()
            {
                //Add some sample users with roles 

                _users.Add(new User("ravi", "RaviPassword", "Admin"));
                _users.Add(new User("mahesh", "MaheshPassword", "User"));

            }

            public User Authenticate(string username, string password)
            {
                User userfound = null;
                foreach (User  user1 in _users)
                {
                    if(user1.Username == username && user1.Password == password)
                    {
                        userfound = user1;
                        break;
                    }
                }
                return userfound;
            }

            public bool Authorize(User user,string role)
            {
                //checking whether user role matches with required role
                return user.Role == role;
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string username=textBox1.Text;
            string password=textBox2.Text;
            // autthenticate user 

            User user=_authService.Authenticate(username, password);
            if (user == null)
            {
                label3.Text = "Invalid username and password";
                label3.Visible = true;
                return;
            }
            // if autneticated then a open home page like that or main form

            MainForm mainform = new MainForm(user);
            mainform.Show();
            this.Hide();

        }
    }
}

Now add two buttons and one label on the top in MainForm 

and do the following coding provided below 

here in the above code u can see means line 350 and 352 above done chnages do that chnage also 
and write this code also below 

//code of form1 

  MainForm mainform = new MainForm(user);
            mainform.Show();
            this.Hide();


and complete code of MainForm 
-------------------------------
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static SecurityDemo.Form1;   // add this thing in form 

namespace SecurityDemo
{
    public partial class MainForm : Form
    {
        private User _user;
        public MainForm(User user)
        {
            InitializeComponent();
            _user = user;
            label1.Text = $" Welcome ,{user.Username} ({user.Role})";

            // Enable/Disable buttons based on role
            if (_user.Role == "Admin")
            {
                button1.Enabled = true;
            }
            else
            {
                button1.Enabled = false;
            }

            button2.Enabled = true; // All users can access User actions
        }

        private void button1_Click(object sender, EventArgs e)
        {
            MessageBox.Show("admin action has permformed");
        }

        private void button2_Click(object sender, EventArgs e)
        {
            MessageBox.Show("user  action has permformed");
        }
    }
}
In the same solution add one project in console .net framework 

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace EncrcyptDecryptdemo
{
    internal class Program
    {

        public class EncryptionService
        {
            // Use a 32-byte key for AES-256 (32 characters, exactly 32 bytes)
            private readonly byte[] _key = Encoding.UTF8.GetBytes("b14ca5898a4e4133bbce2ea2315a1916"); // Must be 32 bytes
            private readonly byte[] _iv = Encoding.UTF8.GetBytes("ThisIsAnIV123456"); // Must be 16 bytes

            // Encrypt a plain text using AES encryption
            public string Encrypt(string plainText)
            {
                using (Aes aes = Aes.Create())
                {
                    aes.Key = _key;
                    aes.IV = _iv;

                    // Create an encryptor
                    ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

                    using (MemoryStream msEncrypt = new MemoryStream())
                    {
                        using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                        {
                            using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
                            {
                                // Write the plain text to the stream
                                swEncrypt.Write(plainText);
                            }
                            return Convert.ToBase64String(msEncrypt.ToArray()); // Return the encrypted text as Base64 string
                        }
                    }
                }
            }

            // Decrypt an encrypted text using AES decryption
            public string Decrypt(string cipherText)
            {
                using (Aes aes = Aes.Create())
                {
                    aes.Key = _key;
                    aes.IV = _iv;

                    // Create a decryptor
                    ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);

                    using (MemoryStream msDecrypt = new MemoryStream(Convert.FromBase64String(cipherText)))
                    {
                        using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                        {
                            using (StreamReader srDecrypt = new StreamReader(csDecrypt))
                            {
                                // Read the decrypted bytes from the stream and return as string
                                return srDecrypt.ReadToEnd();
                            }
                        }
                    }
                }
            }
        }

        static void Main(string[] args)
        {
            // Create an instance of the encryption service
            EncryptionService encryptionService = new EncryptionService();

            Console.WriteLine("Enter the message to encrypt:");
            string plainText = Console.ReadLine();

            // Encrypt the message
            string encryptedText = encryptionService.Encrypt(plainText);
            Console.WriteLine("Encrypted Message: " + encryptedText);

            // Decrypt the message
            string decryptedText = encryptionService.Decrypt(encryptedText);
            Console.WriteLine("Decrypted Message: " + decryptedText);

            Console.ReadLine();

        }
    }
}

explanation :
--------------
  Create AES instance:


using (Aes aes = Aes.Create())
This initializes an AES object that allows encryption using the AES algorithm.
Set Key and IV (Initialization Vector):


aes.Key = _key;
aes.IV = _iv;
The key (_key) is a 32-byte secret key (used for AES-256).
The IV (_iv) is a 16-byte Initialization Vector (used to add randomness to encryption).

Create an encryptor:


ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

This creates an encryption transformer that will encrypt the input data.
Perform encryption using a CryptoStream:


using (MemoryStream msEncrypt = new MemoryStream())
{
    using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
    {
        using (StreamWriter swEncrypt = new StreamWriter(csEncrypt))
        {
            // Write the plain text to the stream
            swEncrypt.Write(plainText);
        }
        return Convert.ToBase64String(msEncrypt.ToArray());
    }
}
A MemoryStream is used to temporarily store the encrypted data.
A CryptoStream applies the encryption transformation.
A StreamWriter writes the plain text into the CryptoStream, which encrypts it.
The encrypted data is then converted to a Base64 string (so it can be easily stored or transmitted).
Example Output:

Enter the message to encrypt:
HelloWorld
Encrypted Message: q0m7hLtjbCdT9tECiYY5rA==

2. Decryption Function (Decrypt)
Purpose:
This function takes an encrypted Base64 string and returns the original decrypted text.

Steps:
Create AES instance:


using (Aes aes = Aes.Create())
Just like in encryption, it initializes an AES object.
Set Key and IV:


aes.Key = _key;
aes.IV = _iv;
Uses the same secret key and IV as encryption (must match for successful decryption).
Create a decryptor:

ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);
Creates a decryption transformer.
Perform decryption using CryptoStream:


using (MemoryStream msDecrypt = new MemoryStream(Convert.FromBase64String(cipherText)))
{
    using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
    {
        using (StreamReader srDecrypt = new StreamReader(csDecrypt))
        {
            return srDecrypt.ReadToEnd();
        }
    }
}
Converts the Base64-encoded encrypted text back into bytes.
A MemoryStream holds the encrypted data.
A CryptoStream applies the decryption transformation.
A StreamReader reads the decrypted output and returns it as a string.
Example Output:

Encrypted Message: q0m7hLtjbCdT9tECiYY5rA==
Decrypted Message: HelloWorld
without using 
--------------
  using System;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace EncryptDecryptDemo
{
    internal class Program
    {
        public class EncryptionService
        {
            private readonly byte[] _key = Encoding.UTF8.GetBytes("b14ca5898a4e4133bbce2ea2315a1916"); // 32 bytes for AES-256
            private readonly byte[] _iv = Encoding.UTF8.GetBytes("ThisIsAnIV123456"); // 16 bytes IV

            // Encrypt function
            public string Encrypt(string plainText)
            {
                Aes aes = Aes.Create();
                aes.Key = _key;
                aes.IV = _iv;
                ICryptoTransform encryptor = aes.CreateEncryptor(aes.Key, aes.IV);

                MemoryStream msEncrypt = new MemoryStream();
                CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write);
                StreamWriter swEncrypt = new StreamWriter(csEncrypt);

                swEncrypt.Write(plainText);
                swEncrypt.Flush();
                csEncrypt.FlushFinalBlock();

                string encryptedText = Convert.ToBase64String(msEncrypt.ToArray());

                // Close and dispose streams explicitly
                swEncrypt.Close();
                csEncrypt.Close();
                msEncrypt.Close();
                encryptor.Dispose();
                aes.Dispose();

                return encryptedText;
            }

            // Decrypt function
            public string Decrypt(string cipherText)
            {
                Aes aes = Aes.Create();
                aes.Key = _key;
                aes.IV = _iv;
                ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);

                MemoryStream msDecrypt = new MemoryStream(Convert.FromBase64String(cipherText));
                CryptoStream csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read);
                StreamReader srDecrypt = new StreamReader(csDecrypt);

                string decryptedText = srDecrypt.ReadToEnd();

                // Close and dispose streams explicitly
                srDecrypt.Close();
                csDecrypt.Close();
                msDecrypt.Close();
                decryptor.Dispose();
                aes.Dispose();

                return decryptedText;
            }
        }

        static void Main(string[] args)
        {
            EncryptionService encryptionService = new EncryptionService();

            Console.WriteLine("Enter the message to encrypt:");
            string plainText = Console.ReadLine();

            string encryptedText = encryptionService.Encrypt(plainText);
            Console.WriteLine("Encrypted Message: " + encryptedText);

            string decryptedText = encryptionService.Decrypt(encryptedText);
            Console.WriteLine("Decrypted Message: " + decryptedText);

            Console.ReadLine();
        }
    }
}

Logging demo
-------------
some more secuirty code 
--------------------------

Example: Using log4net in a C# Console Application

log4net is a logging framework for .NET that allows developers to log messages to various outputs, such as the console, files, databases, etc. This example will guide you through setting up log4net in a simple C# console application and show how to log messages of different levels (info, debug, error).

Steps:
Create a new Console Application in Visual Studio or your preferred IDE.
Install log4net via NuGet.
Configure log4net using an App.config file.
Initialize log4net in the Program.cs.
Log messages using log4net.

Step 1: Create a Console Application

Create a new Console App in Visual Studio.


Step 2: Install log4net via NuGet

You need to install the log4net library using NuGet.

In Solution Explorer, right-click on your project and select Manage NuGet Packages.

Search for log4net, select it, and click Install.

or through terminal from package manager console 

Install-Package log4net


Step 3: Configure log4net in App.config

Create an App.config file if it doesn't exist already:

Right-click on the project, select Add > New Item....

Choose Application Configuration File and name it App.config.

Now, configure log4net inside App.config as follows:

<?xml version="1.0" encoding="utf-8" ?>
<configuration>
  <configSections>
	<section name="log4net" type="log4net.Config.Log4NetConfigurationSectionHandler, log4net" />
  </configSections>

  <log4net>
	<!-- Log to the console -->
	<appender name="ConsoleAppender" type="log4net.Appender.ConsoleAppender">
	  <layout type="log4net.Layout.PatternLayout">
		<conversionPattern value="%date %-5level %logger - %message%newline" />
	  </layout>
	</appender>

	<!-- Log to a file -->
	<appender name="FileAppender" type="log4net.Appender.RollingFileAppender">
	  <file value="C:\logs\application.txt" />
	  <appendToFile value="true" />
	  <rollingStyle value="Size" />
	  <maxSizeRollBackups value="5" />
	  <maximumFileSize value="10MB" />
	  <staticLogFileName value="true" />
	  <layout type="log4net.Layout.PatternLayout">
		<conversionPattern value="%date %-5level %logger - %message%newline" />
	  </layout>
	</appender>

	<root>
	  <level value="DEBUG" />
	  <appender-ref ref="ConsoleAppender" />
	  <appender-ref ref="FileAppender" />
	</root>
  </log4net>
</configuration>


Explanation:

ConsoleAppender: Logs messages to the console.
FileAppender: Logs messages to a file (in this case, logs/application.log). The log file will roll over when it reaches 10 MB, keeping up to 5 backups.
Layout: Defines the format of the log messages.
%date: The timestamp of the log entry.
%level: The logging level (DEBUG, INFO, ERROR, etc.).
%logger: The name of the logger.
%message: The actual log message.


Step 4: Initialize log4net in Program.cs
To use log4net, you need to initialize it at the start of the application. This is usually done in the Main method.

Open Program.cs and modify it as follows:

using log4net;
using System.Reflection;
using System;

namespace Log4NetDemo
{
    internal class Program
    { // Create a static logger instance for the class
        private static readonly ILog log = LogManager.GetLogger(MethodBase.GetCurrentMethod().DeclaringType);

        static void Main(string[] args)
        {

            log4net.Config.XmlConfigurator.Configure();
            // Log application start
            log.Info("Application is starting...");

            try
            {
                Console.WriteLine("Enter a number:");
                string input = Console.ReadLine();
                int number = int.Parse(input);

                // Log user input
                log.Debug($"User entered: {number}");

                // Simulate a division operation
                int result = 100 / number;
                Console.WriteLine($"Result: 100 / {number} = {result}");

                // Log success
                log.Info($"Division successful. Result: {result}");
            }
            catch (FormatException ex)
            {
                // Log format error
                log.Error("Invalid input format.", ex);
                Console.WriteLine("Please enter a valid number.");
            }
            catch (DivideByZeroException ex)
            {
                // Log divide by zero error
                log.Error("Attempted to divide by zero.", ex);
                Console.WriteLine("Cannot divide by zero.");
            }
            catch (Exception ex)
            {
                // Log any other errors
                log.Fatal("An unexpected error occurred.", ex);
                Console.WriteLine("An unexpected error occurred.");
            }
            finally
            {
                // Log application end
                log.Info("Application is closing.");
            }

            Console.WriteLine("Press any key to exit.");
            Console.ReadKey();
        }
    }
}

