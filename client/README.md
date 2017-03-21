
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

## Technologies/Libraries
* Hapi.js for node server - [Hapi](https://hapijs.com/)
* bootstrap for base styling - [Bootstrap](http://getbootstrap.com/)
* Twilio for messaging - [Twilio] - [Twilio](https://www.twilio.com)
* Later.js for scheduling - [Later.js](https://bunkat.github.io/later/)
* React for views - [React](https://facebook.github.io/react/)
* Redux for state management - [Redux](http://redux.js.org/)
* Redux Thunk middleware for data management - [Redux thunk](https://github.com/gaearon/redux-thunk)
* Fetch with Polyfil for ajax requests [fetch](https://github.github.io/fetch/)
* Webpack for bundling - [webpack](https://webpack.js.org/)
* babel.js for es2015 transpiling - [babel](https://babeljs.io/)

## Troubleshooting/some notes
* This project was tested using chrome 56 on osx sierra only.
* with more time would refactor and dry out much of the server side code.
* not much attention was paid to security or hardening.
* the DB for this project is completely mocked out and no actual DB was used.
* the texting feature requires adding a new phone number to the trial twilio account
