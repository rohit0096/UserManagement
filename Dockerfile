# # stage 1
# # FROM node:latest as node
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY  ./dist/UserManagement/browser/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]