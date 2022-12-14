# VirtualTAChatbot

## Overview
CS 4485 Computer Science Capstone

Link to website:

https://codecollision4.github.io/VirtualTAChatbot


## Set up & Installation

Clone the repository `npm clone https://github.com/codeCollision4/VirtualTAChatbot.git`

Change directories into your project e.g. `cd VirtualTAChatbot`

Install server dependencies with `npm install`

Install client dependencies by changing directories into `virtual_ta_chatbot_front_end` and running `npm install`

From the root directory, run the client and server concurrently with `npm run dev`


## Connecting Dialogflow Backend Locally

For connecting with Dialogflow on the backend locally, you will need to configure your machine\'s default credentials for Google Cloud following [this guide](https://cloud.google.com/docs/authentication/application-default-credentials#GAC). You will need to set up the `GOOGLE_APPLICATION_CREDENTIALS` environment variable as well as user credentials for gcloud.

You will also need to create a `.env` file in the root directory to store your account key credentials. Your `.env` file should look like: `CREDENTIALS = { ...keys_JSON_contents_here }`

## Accessing application via VM

  1. Login to VM
  2. cd VirtualTAChatbot
  3. npm run dev
  4. Access via browser: 10.176.67.70:3000/VirtualTAChatbot
  
## Tools Used on VM
Node.js via npm (npm in command line)
Google Cloud CLI (gloud in command line)
Python 3.10 (python3 in command line)
GitHub CL tool (gh in command line)
Optional: Homebrew (https://brew.sh/)
