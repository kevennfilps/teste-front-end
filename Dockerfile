# Etapa 1: build da aplicação
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm install; \
  elif [ -f yarn.lock ]; then yarn install; \
  else npm install; fi

COPY . .
RUN npm run build

# Etapa 2: NGINX para servir a build estática
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Remove a configuração default do NGINX
RUN rm /etc/nginx/conf.d/default.conf

# Adiciona sua própria configuração NGINX
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
