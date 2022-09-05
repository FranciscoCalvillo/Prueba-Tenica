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
Also there are some implementations un other JavaScript packages that will be metion later with Bootstrasp 4 but in the end those are not used, but eliminated neither.

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
<p> To instal Node JS you only have to download the .exe int he main page and follow the instructions</p>

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
2. Install required package (all the proyect use dependencies off this ones so its essential)
   ```sh
   npm i - r express bycryptjs express-handelbars express-session mongoose passport passport-local morgan dotenv nodemon
   ```
3. Initalize mongo in a new console
   ```sh
   mongod
   ```
4. Run the local server using nodemon to auto restart it every main safe
   ```sh
   npm run dev
   ```
5. This Project suposses that exist already an admin user registrated and identified it with the User id, to modify it to your own id press F1 in Visual Studio code or look for controllers and edit generalUser variable value in line 6

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage
Open a terminal at the directory of the project:

1. Make migrate 
   ```sh
   python manage.py makemigrate
   ```
2. Migrate
    ```sh
   python manage.py migrate
   ```
3. Run the server
   ```sh
   python manage.py runserver
   ```
<br/>
This will run up the server locally at http://127.0.0.1:8000/ by default. The available endpoints are:

 1. users/<br/>
    * This endpoint will display the list of all users without any specificly order.
    <br/>  
 2. users/id<br/>
    This endpoint have three different behaviours:<br/>
      * If the HTTP request method was GET, it's going to display all the data of the user with the given id.<br/>
      * If the HTTP request method was PUT, it's going to update the data of the user with the given id using the data from the request's body.<br/>
      * If the HTTP request method was DELETE, it's going to delete the user with the given id.<br/>
    <br/>
 3. users/order-by-age/<br/>
    * This endpoint will display the list of all users order by the age in descending order.
    <br/>
 4. users/order-by-lastname/<br/>
    * This endpoint will display the list of all users order by the lastname in descending order.
    <br/>
 5. users/add/<br/>
    * This endpoint lets you add new users to the database.

  

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Luis Alberto Pérez Muñoz - laperezmu@gmail.com

Project Link: [https://github.com/laperezmu/api-usuarios](https://github.com/laperezmu/api-usuarios)

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/laperezmu
