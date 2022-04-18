FROM node:9
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm build
COPY build /app
EXPOSE 8080
CMD [ "serve", "-s", "build" ]
