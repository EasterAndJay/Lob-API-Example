# Lob-API-Example

Written in ReactJS + Redux + ES6

Visit https://d48mihm83y4n3.cloudfront.net/ for a live demo

Alternatively, you can clone the repo and run `npm install`, then `npm start` and visit `localhost:8080` in your web browser of choice.


# Possible improvements

I would add tests, especially concerning the API calls made to Google and Lob. Those calls seem to be the most volatile part of the application since a number of things can go wrong, including:

* badly formatted input
* network failures on the client side and, less likely, on the server side


Form validations are another improvement that could be made to improve the user experience of the application:

* Synchronous validations to remind the user of required fields.

* Asynchronous validation requests to Lob's or Google's address verification services to check the validity of entered addresses before the user submits the form.

More features:

* Allow the user to pick one or multiple representatives as recipients of the letter

* Display a picture of the representatives
* Display the social media handles of the representatives and link to their profiles