<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <h1>SID-STAR Project</h1>
  </a>

  <h3 align="center">View the Top Waypoints for a SID/STAR of An Airport</h3>

  <p align="center">
    You can run it locally or visit the live website
    <br />
    <a href="http://a7549e33f9268413b88a597dc856c116-1871371642.ap-southeast-1.elb.amazonaws.com/"><strong>View Live Website »</strong></a>
    <br />
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/izzkhairable/SidStar-Project/issues">Report Bug</a>
    ·
    <a href="https://github.com/izzkhairable/SidStar-Project/issues">Request Feature</a>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
[![Product Name Screen Shot][product-screenshot]](https://example.com)



### Built With

Frameworks and Libraries Used
* [Backend - Express.js](https://expressjs.com/)
* [Frontend - React.js](https://reactjs.org/)
* [Testing - Jest](https://jestjs.io/)
* [CI/CD - GitHub Actions](https://github.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started Barebone without Container

Running the Backend & Frontend on your Local Computer

### Installation
1. Install dependencies for Frontend
  ```sh
  cd ./frontend
  npm install
  ```
2. Install dependencies for Backend
  ```sh
  cd ../backend
  npm install
  ```

### Running
1. Create a .env file in root directory
2. Specify a new env variable
   ```sh
   API_KEY=<PLACE YOUR API KEY>
   ```
3. Starting the Backend
   ```sh
   cd ../backend
   npm run dev
   ```
4. Starting the Frontend
   ```sh
   cd ../frontend
   npm start
   ```



### Testing
1. Testing the Frontend
```sh
cd ./frontend
npm run test -- --coverage .
```

2. Testing the Backend
```sh
cd ../backend
npm test
```
3. Ensure that both Frontend and Backend has 100% Coverage

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started Docker with Container

### Run Development Containers
Development containers are pushed to DockerHub everytime a pull request to main is open
```sh
docker run --publish 3333:3333 -e API_KEY=<API_KEY> izzkhair/sid_stat_backend_dev:latest
docker run --publish 3000:3000 izzkhair/sid_stat_fronend_dev:latest
```

### Run Production Containers
Production containers are pushed to DockerHub everytime a commit is push to Main
```sh
docker run --publish 3333:3333 -e API_KEY=<API_KEY> izzkhair/sid_stat_backend:latest
docker run --publish 3000:3000 izzkhair/sid_stat_fronend:latest
```

<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

### Backend Endpoints
* GET /airports
  - Params: None
  - Returns: 
    - airports: Array   
* GET /airports/sids
  - Params: 
    - airport_icao: String  
  - Returns: 
    - sids: Array
* GET /airports/stars
  - Params: 
    - airport_icao: String  
  - Returns: 
    - stars: Array'
* GET /airports/stars/waypoints
  - Params: 
    - airport_icao: String  
  - Returns: 
    - waypoints_list_sorted: Array
* GET /airports/sids/waypoints
  - Params: 
    - airport_icao: String  
  - Returns: 
    - waypoints_list_sorted: Array


### Frontend Serving
* GET /
  - Params: 
    - None
  - Returns: 
    - WebPage

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] CI to Test, Check Coverage and Buld
- [x] CD Build Image and Push to Docker
- [x] Display Airport
- [x] Display SIDS and STARS for an Airport 
- [x] Display Sorted Waypoints Count for a SID/STAR of an Airport 
- [ ] CD Direct Deploy to Kubernetes Cluster
- [ ] Database for Redunduncy Purposes (In the event, API is down)
- [ ] Add Test Coverage for more paths


See the [open issues](https://github.com/izzkhairable/SidStar-Project/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GPL-3.0 license. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Izzat - izzkhair@gmail.com

Project Link: https://github.com/izzkhairable/SidStar-Project

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/izzkhairable/SidStar-Project.svg?style=for-the-badge
[contributors-url]: https://github.com/izzkhairable/SidStar-Project/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/izzkhairable/SidStar-Project.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/izzkhairable/SidStar-Project.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/izzkhairable/SidStar-Project.svg?style=for-the-badge
[issues-url]: https://github.com/izzkhairable/SidStar-Project/issues
[license-shield]: https://img.shields.io/github/license/izzkhairable/SidStar-Project.svg?style=for-the-badge
[license-url]: https://github.com/izzkhairable/SidStar-Project/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/izzkhair/
[product-screenshot]: README_utils/demo.gif
