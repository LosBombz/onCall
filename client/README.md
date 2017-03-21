
## onCall
* Automated on call rotation
* List of engineers and phone #’s
* Monday at noon eastern time current on call engineer becomes backup on call and next in list becomes primary on call
* When on calls change they get an alert
* Add, edit (currently no edit), remove users
## Get Started
1. in the `server` directory run `npm install`
2. still in `server` run `node server.js`
3. in the `client` directory run `npm install`
4. still in `client` run `npm start`, this will build the project in `dev` environment and open a new browser window

# Troubleshooting/some notes
* This project was tested using chrome 56 on osx sierra only.
* with more time would refactor and dry out much of the server side code.
* not much attention was paid to security or hardening.
* the DB for this project is completely mocked out and no actual DB was used.
* the texting feature requires adding a new phone number to the trial twillio account
