FROM node:alpine AS build
WORKDIR '/usr/local/app'
COPY ./package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/local/app/dist/tomato /usr/share/nginx/html

