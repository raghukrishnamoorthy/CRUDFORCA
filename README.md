Hi Team

Half the time was spent figuring out Angular 6 oddities but I've tried my best to do whatever I can so far


CRUD OPERATIONS 

Departments - Create,Read, Update and Delete
Interns - Create, Read, Delete

There was some trouble with Atrribute routing that lead me to workout a hack that would not let me edit interns

ASP.NET Core WEB API

1. Used the T4 templates to generate the scaffolded controllers for both the Department and Intern models
2. Uses EF Core with LocalDB as the backend SQL Server
3. No Cors Policy. Allows all for now.

Angular 6

1. generated using the CLI
2. Implemented with basic HTMl5 controls
3. Uses Dependency injection for services
4. Uses RxJS observables for getting async data / http

Improvements:

This is a very minimal product designed to just work. There following features should be implemented
for this to be considered a complete one

1. Checking for mismatched types between TypeScript classes and JSON from the API
2. Tests
3. Proper boostrap / semantic UI design
4. Null checks, Exception handling
5. Piping http calls for Logging and error/retry mechanisms


If you need  to run the app

Required:
-Angular 6
-.NET Core 2.1 +
-SQL related packages for localDB

Note: Port number needs to be changed in the departmentService file in the UI side to match where the 
WEP API is hosted.

