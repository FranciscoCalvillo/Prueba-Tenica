<div id="top"></div>



<!-- PROJECT SHIELDS -->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">API Usuarios</h3>

  <p align="center">
    Simple API made with Django
    <br />
    <a href="https://github.com/laperezmu/api-usuarios"><strong>Explore the docs »</strong></a>
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The repository presents Django 3.2.8 with Django rest framework implementation of a simple API to consult users information

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Django](https://www.djangoproject.com)
* [Django rest framework](https://www.django-rest-framework.org)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

You need Python3 in your computer before install this application. To check if you already have Python3 installed, open a terminal and copy and paste the next command:

* Python3
  ```sh
  python --version
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/laperezmu/api-usuarios.git
   ```
2. Install required modules (It's recommendable make and run a virtual enviroment before install dependencies)
   ```sh
   pip install - r requirements.txt
   ```

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
