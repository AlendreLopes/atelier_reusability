FROM node:17-alpine3.14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

CMD [ "npm", "start" ]

EXPOSE 8000


# Buildx 0.6+
# docker buildx bake "https://github.com/docker/buildx.git"
# mkdir -p ~/.docker/cli-plugins
# mv ./bin/build/buildx ~/.docker/cli-plugins/docker-buildx

# # Docker 19.03+
# DOCKER_BUILDKIT=1 docker build --platform=local -o . "https://github.com/docker/buildx.git"
# mkdir -p ~/.docker/cli-plugins
# mv buildx ~/.docker/cli-plugins/docker-buildx

# # Local
# git clone https://github.com/docker/buildx.git && cd buildx
# make install