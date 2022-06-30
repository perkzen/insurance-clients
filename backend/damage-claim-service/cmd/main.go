package main

import (
	"damage-claim-service/pkg/db"
	"damage-claim-service/pkg/routes"
	"damage-claim-service/pkg/utils"
	"log"
)

func main() {
	db.Init()
	router := routes.InitRouter()
	port := utils.GetEnvVar("PORT", ":8081")
	err := router.Run(port)
	if err != nil {
		log.Fatalln(err)
	}
}
