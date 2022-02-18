# {two}rdle

  [![License: ISC](https://img.shields.io/badge/license-ISC-green)](http://opensource.org/licenses/ISC)

  ## Description
  In the past year, we've seen Wordle -- a web-based word guessing game -- become extremely popular with users everywhere. But we were left thinking, what if we could make it bettter? What if we had more letters, more guesses, and authentication which would provide a way for multiple users to play on the same device. And thus, the idea for {two}rdle was conceived.

  ```md
    AS A player of a word guessing game
    I WANT the ablility to create an account and log-in
    SO THAT a device isn't limited to just a single user
	I WANT TO be able to guess at 6 letter words
	SO THAT there is more variety and guessing attempts
  ```

  For this project, we utilized the following technologies:
  - Javascript, Express.js, MySQL and Sequelize
	- additional npm packages: [bcrypt](https://www.npmjs.com/package/bcrypt), [passport](https://www.passportjs.org/)
  - For testing and debugging we utilized Postman

  Future plans for enhancement:
  - Adding a way for users to view their player stats. This could include individual stats as well as possible player rankings
  - Allowing for deleting of account (and the associated data)
  - Ability to decide word length for gameplay
  
  ## Contents
  1. [Installation](#installation)
  2. [Project Usage](#usage)
      1. [Visuals](#visuals)
  3. [Licenses](#licenses)
  4. [Testing](#testing)
  5. [How to contribute](#contributing)
  6. [Project Credits](#credits)
      1. Authors
      2. Additional Acknowledgements
  7. [Have Questions?](#questions)

## [Installation](#installation)
This application is running on a Heroku hosted site. 
You can find it here: [{two}rdle](https://twordle2.herokuapp.com/)

If you desire to run {two}rdle locally, follow these setup steps:
  To clone repo: 
  ```md
  git clone git@github.com:hak9292/Wordle2.git
  ```

  From within MySQL, execute the SQL script file:
  ```md
  source ~/db/schema.sql
  ```
  Run 'npm install' to install necessary dependencies. 
  Run 'npm run seed' to seed the data.
  Run 'npm start' to start the application.
  Navigating to localhost:[PORT] should take you directly to the login/setup screen.

## [Project Usage](#usage)

### [Visuals](#visuals)

## [Licenses](#licenses)
  This project uses the ISC license.

  To find out more information on open source licenses, please refer to [https://choosealicense.com/](https://choosealicense.com/).

## [Testing](#testing)
  During development, testing and debugging was done using Postman to facilitate our API testing

## [How to contribute](#contributing)
  If you would like to contribute to this project, follow the steps below.
  1. Fork the repo on GitHub.
  2. Clone the project to your own machine.
  3. Create a branch for your feature work.
  3. Commit changes to your own branch.
  4. Push your work back up to your fork.
  5. Submit a Pull request so that we can review your changes

## [Project Credits](#credits)

  Project Authors:
  - Leslie Crouch - [tripledawg](https://github.com/tripledawg)
  - Hee Hoon Kim - [hak9292](https://github.com/hak9292)
  - Sam Rapowitz - [samrapow](https://github.com/samrapow)
  - Jasmine Washington - [jcwashington](https://github.com/jcwashington)

  

## [Have Questions?](#questions)
  Contact any of the authors via email with your questions:
  * Leslie Crouch - <iamlesliecrouch@gmail.com>
  * Hee Hoon Kim - <ak112997@gmail.com>
  * Sam Rapowitz - <samrapow@gmail.com>
  * Jasmine Washington - <jasmine.washington412@gmail.com>