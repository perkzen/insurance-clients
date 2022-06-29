package db

import (
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"insurance-clients/pkg/models"
	"insurance-clients/pkg/utils"
	"log"
)

var Client *gorm.DB

func Init() {
	var dsn = utils.GetEnvVar("DB_CONNECTION_STRING", "")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatalln(err)
	}

	err = db.AutoMigrate(&models.User{})
	if err != nil {
		log.Fatalln(err)
	}

	Client = db
}
