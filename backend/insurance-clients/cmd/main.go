package main

import (
	"insurance-clients/pkg/db"
	"insurance-clients/pkg/routes"
	"insurance-clients/pkg/utils"
	"log"
)

func main() {
	db.Init()
	router := routes.InitRouter()
	port := utils.GetEnvVar("PORT", ":8080")
	err := router.Run(port)
	if err != nil {
		log.Fatalln(err)
	}
}
