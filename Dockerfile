# Usar la imagen oficial de Node.js
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto 3000 (si tu aplicación lo usa)
EXPOSE 3000

# Comando por defecto para ejecutar la app
CMD ["node", "index.js"]
