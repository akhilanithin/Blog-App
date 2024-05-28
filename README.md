<H1 align ="center" > MERN BLOG  </h1>
<h5  align ="center"> 
Fullstack open source blogging application made with MongoDB, Express, React & Nodejs (MERN) </h5>
<br/>

  * [Configuration and Setup](#configuration-and-setup)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  * [📸 Screenshots](#screenshots)
  * [Author](#author)
  * [License](#license)


## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the Frontend on one terminal and the Backend on the other terminal)

In the first terminal

```
$ cd Frontend
$ npm install (to install frontend-side dependencies)
$ npm run  start (to start the frontend)
```

In the second terminal

- cd Backend and Set environment variables in config.env under ./config
- Create your mongoDB connection url, which you'll use as your MONGO_URI
- Supply the following credentials

```
#  ---  Config.env  ---

NODE_ENV = development
PORT =5000
URI =https://blog-server-o8t8.onrender.com/
MONGO_URI ="mongodb+srv://akhilaanizham1994:akhila456@cluster0.k6j5qib.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET_KEY ="Secret"
JWT_EXPIRE = 60m
RESET_PASSWORD_EXPIRE = 3600000 


# Nodemailer

MAIL_HOST=your-smtp-host 
MAIL_USER=your-email-address 
MAIL_PASS=your-email-password = your_password
```


```
# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm start (to start the backend)
```

##  Key Features

- User registration and login
- Authentication using JWT Tokens
- Story searching  and pagination 
- CRUD operations (Story create, read, update and delete)
- Upload user ımages and story ımages  to the server
- Liking  stories and adding stories  to the Reading list
- Commenting  on the story
- Skeleton loading effect
- Responsive Design

<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - For User Interface
- [CK-Editor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html) - Rich Text Editor 
- [uuid](https://www.npmjs.com/package/uuid) - For random id generator
- [React icons](https://react-icons.github.io/react-icons/) -
 Small library that helps you add icons  to your react apps.

####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [express-async-handler](https://www.npmjs.com/package/express-async-handler) - Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers 
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - For data encryption
- [Nodemailer](https://nodemailer.com/about/) - Send e-mails from Node.js
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [multer](https://www.npmjs.com/package/multer) - Node.js middleware for uploading files 
- [slugify](https://www.npmjs.com/package/slugify) - For encoding titles into a URL-friendly format
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware


####  Database 

 - [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.
 
 ##  Screenshots 
 
![login](https://github.com/akhilanithin/Blog-app/assets/122517142/d4692f82-cb0e-4e5f-9137-9f2f3ad2f4b7)

![Register](https://github.com/akhilanithin/Blog-app/assets/122517142/80c8e28f-b184-47c4-ba2f-a5a1a08b5866)

![fgpsw](https://github.com/akhilanithin/Blog-app/assets/122517142/a5b3bbd8-f539-412b-8a4c-0cf31cb1a238)

![blogs](https://github.com/akhilanithin/Blog-app/assets/122517142/c190bfe6-7867-4793-857f-d5abf25eccad)

![user](https://github.com/akhilanithin/Blog-app/assets/122517142/07db3dd4-bf74-4daf-9862-87f4c9406251)

![add blog](https://github.com/akhilanithin/Blog-app/assets/122517142/f3a39dc0-0c30-428d-abcc-14f7912e73c0)

![Profile](https://github.com/akhilanithin/Blog-app/assets/122517142/138d08b5-adc3-4fea-858f-7458a474d7ac)










