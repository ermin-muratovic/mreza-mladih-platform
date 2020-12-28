FROM node:12 as mreza-mladih-platform-builder

ARG version=develop
ENV VERSION="${version}"

# Prepare app directory
WORKDIR /usr/src/app

# copy package.json only to install dependencies first
COPY package.json package-lock.json /usr/src/app/
RUN npm install -g @nrwl/schematics @angular/cli
RUN npm install

COPY . /usr/src/app

RUN ng build api
RUN ng build mreza-mladih-platform


# Use a Docker multi-stage build to create a lean production image.
# https://docs.docker.com/develop/develop-images/multistage-build/#use-multi-stage-builds
FROM nginx:alpine

ENV NODE_ENV "production"
ARG version=develop
ENV VERSION="${version}"

# COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=mreza-mladih-platform-builder /usr/src/app/dist/apps/mreza-mladih-platform .
