FROM oven/bun:1 AS build

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM nginx:1-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
