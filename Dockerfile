FROM nginx:1.15-alpine

COPY dist/angular-demo/ /usr/share/nginx/html

ENV API_URL=""

CMD ["/bin/sh", "-c", "sed -i \"s|API_URL|$API_URL|g\" /usr/share/nginx/html/main.js*; exec nginx -g 'daemon off;'"]
