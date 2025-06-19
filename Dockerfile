FROM mcr.microsoft.com/playwright:v1.53.0
WORKDIR /tests
COPY package.json ./
RUN npm install
COPY . .
RUN npx playwright install --with-deps
CMD ["npx", "playwright", "test", "login", "--project=chromium"]