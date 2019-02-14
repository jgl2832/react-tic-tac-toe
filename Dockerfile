FROM node:8

# change the current directory
WORKDIR /home/node/app/

# copy base configs to install 3rd party packages
COPY package*.json ./

# add 3rd party packages
RUN npm install

# copy all files into the image
COPY . .

# build for production
RUN npm run build --production

# install `serve` to run the application
RUN npm install -g serve

# start the node server
CMD serve -s build -l 3000