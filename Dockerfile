FROM node:8

# user
USER node

# change the current directory
WORKDIR /home/node/app/

# add 3rd party packages
RUN npm run build

# copy all files into the image
COPY . .