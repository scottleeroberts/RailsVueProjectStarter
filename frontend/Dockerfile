FROM node:12

RUN apt-get -y update \
	&& apt-get install -y git

RUN yarn global add @vue/cli -g

WORKDIR /app

RUN apt-get autoremove -y \
    && apt-get autoclean -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*
