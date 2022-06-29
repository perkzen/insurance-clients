package utils

import (
	"github.com/joho/godotenv"
	"os"
	"time"
)

func GetEnvVar(key, defaultVal string) string {
	err := godotenv.Load(".env")
	if err != nil {
		return defaultVal
	}
	value := os.Getenv(key)
	if len(value) == 0 {
		return defaultVal
	}
	return value
}

func StringToDate(date string) (*time.Time, error) {
	res, err := time.Parse("2006-01-02", date)

	if err != nil {
		return nil, err
	}

	return &res, err
}
