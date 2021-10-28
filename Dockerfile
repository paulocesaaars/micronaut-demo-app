### Estágio 1 - Obter o source e gerar o build ###
FROM node:12.14-alpine AS build
WORKDIR /usr/src/app
COPY /package.json ./
RUN npm install
COPY /. /usr/src/app
RUN npm run build


### Estágio 2 - Subir o source para o servidor NGINX com a app Angular ###
FROM nginx:1.17.1-alpine
COPY /nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/micronaut-demo /usr/share/nginx/html

# Change timezone to local time
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 80
