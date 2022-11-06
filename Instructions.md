# Instructions

Congratulations! You made it to the Trampoline coding test! Please carefully read all the instructions below before starting anything.

**Table of Contents**

- [The Test](#the-test)
- [Folder Structure](#folder-structure)
  - [Requirements](#requirements)
  - [Question to Answer](#question-to-answer)
  - [What we don't want](#what-we-dont-want)
- [Submission Guidelines](#submission-guidelines)

---

## The Test

Develop a small Node.js application which would act as a **REST** backend for a Blog Website. **Also, please answer the question at the end of this section.**

**ℹ️ Carefully read the instructions below and re-read them before submitting your code! Not a lot of details are required but we expect those mentioned details to be taken into consideration when developing the solution.**

Before anything, here are some basic guidelines on the code you'll be writing:

- Feel free to use any version of Node >= 16 (please let me know which version you used when submitting your code or by creating a `.nvmrc` file).
- Feel free to use any framework you want to implement this (Plain Node.js, Express, NestJS, etc.). Just don't use a pre-made solution already providing a REST API to work with.
- Feel free to use either Javascript or Typescript code.
- We expect high quality code and an API that works well and that would pass integration tests.
- Leave comments in your code if you are unsure about something or if you didn't have the time to do something. These should help me understand what you were going for and the logic you had when writing code, in case something goes wrong. If anything gave you trouble so you didn't have the time to finish, please let me know what you struggled with in the email you send me at the end of the test.
- If you have extra time at the end, feel free to improve/optimize the code, structure, etc.

## Folder Structure

1. `backend` - An empty folder. I expect your code Node.js service to be created here. There are 2 subfolders, `express-js` and `express-ts`, if you want to use express with either JS or TS. You're still allowed to use any framework you want, these are just provided as convenient starting points. They pretty much are the default express template, with the exception that the Typescript one is setupped with Typescript.
2. `frontend` - A CRA (Create React App) boilerplate that will be calling the `/blog-posts` endpoint to retrieve all blog posts. **The code in this folder should not be modified**. You can start this package by going in it and running `yarn start` or `npm run start`

### Requirements

- Data should be stored persistently in the test folder itself. If I restart the app, I expect to be able to query changes made to the data before shutting down the server. There is a small `utils/data/tinydb` file that can act as such a database, allowing you to easily query and store data in a JSON file. You can however proceed however you want for this, as long as it is done custom or via NPM dependencies (no need to install a MongoDB or Docker or else).
- The REST API must allow CRUD operations on `blog-posts` and `authors`. Up to you which basic fields are required on each data model, but just know that a blog post will always have a single author.
- The following token `ABC123` should be passed for authorizing every API call that alter the data. If it is not present or invalid, a proper error should be returned to the client.
- There must be an endpoint to upload an image (`.jpg`, `.jpeg` or `.png`) for a blog post. When fetching a blog-post, there should be an `imageUrl` field which would give an URL to access the image if there is one. If no image is present, the blog post can simply have `imageUrl: null` or not return the field at all. The URL to access the image should of course work and if accessed from the browser, the image should be cached for an hour.
- When running the `frontend` package and navigating to `http://localhost:3000`, we should see the JSON returned by the `/blog-posts` endpoint. This is to simulate a front-end using your API.

### Question to Answer

** DON'T FORGET** to answer the following question before submitting your test:

- Is there anything that you would improve in your solution before deploying it to a production environment? Feel free to suggest anything that comes to your mind here (could be related to code, architecture, maintenance, etc.).

  - **Answer:**

- I could have moved the router functions into controller and also define a model for blog-post and authros in a seprate file, following the MVC architecture. Also code wise I should have mode my db json files to a data folder rather than putting it in routes folder.

- Also in my data model I should have added extra checks to check whether the authorId is present and them allow to get or modify the data

### What we don't want

**Cheating.** Feel free to consult Internet during the test to find any documentation or help you may need (Stackoverflow or else). However, the following are considered cheating:

- Communicating with someone on any channel (chat, email, in person, etc.) to get help.
- Copy/pasting code from external sources or using big chunks of existing work. I don't mind if you reuse a function you find online, but don't copy paste whole files and solutions. We want to see your work, not the one from others.
- You received this test prior to the beginning of the test so you had extra time to prepare.
- If you feel like what you are doing is wrong, it probably is.

## Submission Guidelines

When submitting your code, please follow these instructions:

- You did the whole test and answered the question [here](#question-to-answer).
- Remove `node_modules/` folder in each package before sending it. Also remove the `.git` folder if you decided to use Git to manage versions locally. This will reduce the file size a lot and will make it easier to send the tests back to us.
- Zip the `js` or `ts` folder depending on which one you completed.
- Put the resulting `.zip` file with name `solutions.zip` into the Google Drive folder containing the `tests.zip` file.
- Send me an email when the solutions are uploaded and final!
