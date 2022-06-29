package db

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
	"request-insurance/pkg/models"
	"request-insurance/pkg/utils"
)

var Client *gorm.DB

func Init() {
	var dsn = utils.GetEnvVar("DB_CONNECTION_STRING", "")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatalln(err)
	}

	err = db.AutoMigrate(&models.Insurance{})
	if err != nil {
		log.Fatalln(err)
	}

	Client = db
}
