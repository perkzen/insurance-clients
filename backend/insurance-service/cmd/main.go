package main

import (
	"insurance-service/pkg/db"
	"insurance-service/pkg/routes"
	"insurance-service/pkg/utils"
	"log"
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
