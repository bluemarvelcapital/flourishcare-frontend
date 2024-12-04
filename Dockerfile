from node:19-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install --save --force

# Bundle app source
COPY . .

EXPOSE 3000 

CMD ["npm", "run", "dev"]
