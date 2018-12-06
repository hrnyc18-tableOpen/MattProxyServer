# Proxy Server
This server forwards requests to the individual microservices of the TableOpen application and combines the individual clients into one web page. The application displays restaurant pages that shows restaurant description, reservation times and user reviews.

## Microservices

  - https://github.com/hrnyc18-tableOpen/Reviews
  - https://github.com/hrnyc18-tableOpen/Overview
  - https://github.com/hrnyc18-tableOpen/Reservations-2
  - https://github.com/hrnyc18-tableOpen/Header

## Development

### Setting up microservices
Before this proxy server can be run, each microservice above needs to be set up and running. You can follow the instructions at the links above to set these up.

### Launching the application locally
From within the root directory:

```sh
# download dependencies
npm install

# start server on localhost
npm start
```

Then access the application at: http://localhost:3000/restaurants/#, replacing # with any number from 1 to 100, corresponding to the restaurant ID. For example, restaurant 32 would be http://localhost:3000/restaurants/32.
