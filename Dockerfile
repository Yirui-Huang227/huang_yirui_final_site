FROM node:18-alpine AS build

WORKDIR /huang_yirui_final_site

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /huang_yirui_final_site/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]