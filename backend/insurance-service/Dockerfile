FROM golang:1.18-alpine

RUN apk update && apk add alpine-sdk git && rm -rf /var/cache/apk/*

RUN mkdir -p /app
WORKDIR /api


COPY go.mod .
COPY go.sum .
RUN go mod download

ENV DB_CONNECTION_STRING=postgresql://admin:admin@localhost:4000/insuranceDB?sslmode=disable
ENV PORT=:8082


COPY . .


RUN go build -o ./app ./cmd/main.go

EXPOSE 8082
ENTRYPOINT ["./app"]
