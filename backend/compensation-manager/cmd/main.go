package main

import (
	"compensation-manager/pkg/db"
	"compensation-manager/pkg/routes"
	"compensation-manager/pkg/utils"
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
