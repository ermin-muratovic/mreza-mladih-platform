FROM node:12

ENV MIGRATIONS=/home/database-service
WORKDIR $MIGRATIONS

COPY package.json $MIGRATIONS/package.json
COPY npm-shrinkwrap.json $MIGRATIONS/npm-shrinkwrap.json
COPY mm-config.json $MIGRATIONS/mm-config.json
COPY tsconfig.json $MIGRATIONS/tsconfig.json
COPY src $MIGRATIONS/src
RUN npm install -g typescript@3.5.3 && npm install && npm run build

CMD ["npm", "run", "migrate"]