package main

import (
	"log"
	"request-insurance/pkg/db"
	"request-insurance/pkg/routes"
	"request-insurance/pkg/utils"
)

func main() {
	db.Init()
	router := routes.InitRouter()
	port := utils.GetEnvVar("PORT", ":8082")
	err := router.Run(port)
	if err != nil {
		log.Fatalln(err)
	}
}
