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
FROM node:12
EXPOSE 4200

ENV NODE_ENV "production"
ARG version=develop
ENV VERSION="${version}"
ENV API_URL ""
ENV API_TOKEN ""

# Prepare app directory
WORKDIR /usr/src/app

# copy dist from builder
COPY --from=mreza-mladih-platform-builder /usr/src/app/node_modules ./node_modules
COPY --from=mreza-mladih-platform-builder /usr/src/app/dist/apps/api .

# Run node app
CMD ["node", "main.js"]
