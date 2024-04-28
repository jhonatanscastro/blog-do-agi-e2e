FROM cypress/browsers:node-22.0.0-chrome-124.0.6367.60-1-ff-125.0.2-edge-124.0.2478.51-1
ENV NODE_ENV=production
WORKDIR /e2e
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress

RUN npm i &&\
    npx cypress info

ENTRYPOINT [ "npx", "cypress", "run" ]