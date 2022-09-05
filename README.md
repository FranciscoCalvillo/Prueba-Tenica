<div id="top"></div>



<!-- PROJECT SHIELDS -->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">API Users and Orders</h3>

  <p align="center">
    Simple API made with Node JS and MongoDB
    <br />
    <a href="https://github.com/FranciscoCalvillo/Prueba-Tenica"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation-and-requirements">Installation and Requirementes</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The repository presents a solution of a simple API to consult users information (in this caes purchase orders) implemented un Node JS 16.17.0 and MongoDB Shell 5.0.2.
Also there are some implementations un other JavaScript packages that will be metion later with Bootstrasp 4 that in the end those are not used, but eliminated neither.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node JS](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/try/download/community)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

You need Node JS and Mongo DB in your computer before install this application. To check if you already have both installed, open a terminal and copy and paste the next commands:

* Node JS
  ```sh
  node --version
  ```
<p> To instal Node JS you only have to download the .exe in the main page and follow the instructions</p>

* Mongo DB
  ```sh
  mongo --version
  ```
  <p> To instal MongoDB as Node you have to download the .exe int he main page and follow the instructions. If you choose to install as a service mongo will be running every time you turn on your pc, in the other case yo woll need an extra comand in console to run and creat a new path in your system</p>
  <p>
Extra you should have installed Postman to make the test to the poyect
  </p>

### Installation and Requirements

1. Clone the repo
   ```sh
   git clone https://github.com/FranciscoCalvillo/Prueba-Tenica.git
   ```
2. Install required package (all the project use dependencies off this ones so its essential)
   ```sh
   npm i - r express bycryptjs express-handelbars express-session mongoose passport passport-local morgan dotenv nodemon
   ```
3. Initalize mongo in a new console (only if you had not install Mongo as a service)
   ```sh
   mongod
   ```

<p> Open a new terminal in the project directory </p>

4. Run the local server using nodemon to auto restart it every main safe
   ```sh
   npm run dev
   ```
5. This Project suposses that exist already an admin user registrated and identified it with the User id, to modify it to your own id press F1 in Visual Studio Code or look for controllers and edit generalUser variable value in line 6 of "orden.controller.js"

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage
Open Postman

A general roadmap of commits are showed int the next Postman repo:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23075707-c2465ef7-5194-4c44-98ea-3fd3db20dff6?action=collection%2Ffork&collection-url=entityId%3D23075707-c2465ef7-5194-4c44-98ea-3fd3db20dff6%26entityType%3Dcollection%26workspaceId%3D4f759117-bfda-43ce-af80-705c05158baa)

<br/>
All the commits are deployed in: http://localhost:3000/ where you can find a basic not working page, all other functionalities are in the next endpoints:

 1. users/<br/>
    * This endpoint will display the list of all users without any specificly order .
    <br/>  
 2. users/singup<br/>
    This endpoint works witg a method POST and check de information sended in a Json:<br/>
      * If everything is alright then register a new user in the mongo data base.<br/>
      * If the name has especial character its wrong and send error message.<br/>
      * If the email has especial character or its already on use and send error message<br/>
      * If the passwords dont match send error message <br/>
    <br/>
 3. users/singin/<br/>
    This endpoint works with a method POST and check credential
    * If email and password are correct then redirect you to your orders (/ordenes) <br/>
    * If email or password are worng send error message. <br/>
    <br/>
 4. users/logout<br/>
    * Send a logout message and end the session.
    <br/>
    
If youre not login then you can access to all of the following endpoints <br/>

 5. /orden<br/>
    * This endpoint works with GET and show you all the orders of the user logged <br/>
    * If you login with de Admin Account then you can see all orders no matter the owner <br/>
    <br/>
 6. /orden/new-orden<br/>
    * This endpoint  works with POST and get all de information in the Json, if it has all the required fields anth data type then show a new Orden messag<br/>
    * If some data type are worng then send an error message <br/>
    <br/>
 7. /orden/update-status/:id<br/>
    * This endpoint look for the order with the given id and if its created by the logged user then update the given Status in the Json <br/>
    * If you login with de Admin Account then you can edit all order status no matter the owner <br/>
    * This endpoint use PUT <br/>
    * The endopint alsao checks out if the status is already canceled then send a not possible message <br/>
    </br>
 8. /orden/edit/:id<br/>
    * This endpoint look for the order with the given id and if its created by the logged user then update data send in the Json <br/>
    * If you login with de Admin Account then you can edit all orders no matter the owner <br/>
    * This endpoint use PUT
    </br>
 9. /orden/delete/:id<br/>
    * This endpoint look for the order with the given id and if its created by the logged user then update the Estatus to "cancelado" <br/>
    * If you login with de Admin Account then you can edit all order status no matter the owner <br/>
    * This endpoint use PUT <br/>
    * If the order was created in less than 2 min then you recived a "Order canceled with refund" message, else is a "without refund" message
    </br>

  

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Francisco Antonio Calvillo Lopez - lewlight@gmail.com

Project Link: [https://github.com/FranciscoCalvillo/Prueba-Tenica](https://github.com/FranciscoCalvillo/Prueba-Tenica)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
