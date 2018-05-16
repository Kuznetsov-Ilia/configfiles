ARG BASE
FROM $BASE/openresty:latest
COPY * /usr/local/openresty/nginx/html/
EXPOSE 80