For the On The Reg system, we have separate the project mainly into two parts: front end and back end. The front end is mainly handled under the repository “client” and the back end is mainly handled under the repository “server”

For directory under “client” we using react.js for the front end handling:
index.js: contain all the root component of the whole website
App.js: contain all the component for each pages for displaying that is being routed to display for user and handled what page to be displayed under different condition(i.e. log in or not, admin or student)

For the “components” directory it contain all the subpages for the website each .jsx file is associated for display, it is further separate into “Admin”, ”image”, “sidebar”, studentCourseManage” directory for a more clear structure:
“Admin”: all the directory under “manageCourse” is for displaying the front-end related to managing course/class, e.g. addClass.jsx is for the page that the user can add class, similarly “manageUser” Is for displaying the front-end related to managing user.
“image”: It is for storing static images for displaying in the webpage, In our case it is the On The Reg icon.
“Login”: it is for the display of the login related pages, e.g. login.jsx is for the login page, related form submission and some back end related calling is also handled.
“sidebar”: it is for the display of the sidebar and the top bar, e.g. “sidebar_a” is the sidebar for admin user, “sidebar_s” is the sidebar for student user.
“studentCourseManage”: it is for all the student related display, e.g. “search” is for the searching page, “selectClass” is for the class selecting page etc.,

Besides the front end related repository, we also have implemented “redux” and “route” in under “client” repository to have a better way managing and synchronize the front end and back end communications and handling.

For directory under “server” we using express.js for the back end handling:
server.js: contain all the api routes path and middleware that website are needed in backend
salt.js: for testing, not use in production environment, generate salted password and SQL statement for salted password

For the "controllers" directory it contains all module to process the HTTP request from frontend and to do some operation to the Database. 
For different Controller, it will matching different route, eg. adminController will match request from "/admin" route.

For the "controllers" directory it contains all module to process the HTTP request from frontend and to do some operation to the Database. 
For different Controller, it will matching different route, eg. adminController will match request from "/admin" route.

For the "Models" directory it contains mysqlModel. mysqlModel contains information for connecting the database and provides async query function. 

For the "routes" directory it contains all modules to request to specific route, HTTP method and the corresponding controllers module that are needed. 
