FROM node:17-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=8000
ENV INSURANCE_CLIENTS_SERVICE_URL=http://localhost:8080/api/v1/clients
ENV DAMAGE_CLAIM_SERVICE_URL=http://localhost:8081/api/v1/damage-claim-service
ENV INSURANCE_SERVICE_URL=http://localhost:8082/api/v1/insurance
ENV FRAUD_DETECTION_SERVICE_URL=http://localhost:5001

EXPOSE 8000

CMD ["node", "dist/src/main.js"]