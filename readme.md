DATA WAS THE PART OF THE PROJECT --
    : DATA IS A MANAGED SOME WHERE ELSE
    : DATA FETCHING -- SENDING HTTP REQUEST 
    : SENDING AND RECIEVING DATA VIA HTTPS
    : STORING USER GENERATED DATA

    : SIGLE BACKEND -- MULTIPLE FROTNEND VIA USERS

you don't directly connect the app to the data base,
react runs on the browser it sould not cotain the shit that is not supposed to be there -- like passwords and stuff like that

- "frontend should contact with the backend which is not running on the power of your users but your own"
"http request connect frontend and backend"

"you can only send the requests which are ACCEPTED by the BACKEND -- this backend then contacts with the database"

CONNECTING WITH A STAND ALONE DATA BASE VIA REACT 
    not a blended in one i.e not like next.js::::

- you don't just need to run the backend but you also have to run the backend 
- we have to wait for the response from the backend 

SENDING HTTP REQUEST
    fetch() - one way of seding an request 
    - fetch returns a promise i.e nothing is there at the moment but will eventually be there 
