# Install dependencies only when needed
FROM node:21-alpine AS deps
RUN apk add --no-cache libc6-compat tzdata
WORKDIR /app
COPY app/package.json ./
RUN npm install --force

# Develope image, copy all the files and run next
FROM node:21-alpine AS runner
WORKDIR /app

# COPY --from=deps /app/node_modules ./node_modules

ENV NODE_ENV development

# You only need to copy next.config.js if you are NOT using the default configuration
COPY /app .
COPY /app/next.config.js ./
COPY --from=deps /app/node_modules ./node_modules

# Next.js collects completely anonymous telemetry data about general usage.

CMD ["npm","run", "dev"]