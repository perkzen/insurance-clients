package db

import (
	"damage-claim-service/pkg/models"
	"damage-claim-service/pkg/utils"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"log"
)

var Client *gorm.DB

func Init() {
	var dsn = utils.GetEnvVar("DB_CONNECTION_STRING", "")
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatalln(err)
	}

	err = db.AutoMigrate(&models.Claim{})
	if err != nil {
		log.Fatalln(err)
	}

	Client = db
}
