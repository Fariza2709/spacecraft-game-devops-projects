FROM nginx:alpine

# Копируем главную страницу и стили
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY favicon.png /usr/share/nginx/html/

# Копируем всю папку со скриптами целиком со вложенной структурой
COPY src/ /usr/share/nginx/html/src/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
