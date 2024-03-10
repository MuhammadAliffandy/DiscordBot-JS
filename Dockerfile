FROM node:latest

# Create the bot's directory
RUN mkdir -p /usr/src/dockerbot
WORKDIR /usr/src/dockerbot

COPY package.json /usr/src/dockerbot
RUN npm install

COPY . /usr/src/dockerbot

# Start the bot.
CMD ["node", "index.js"]