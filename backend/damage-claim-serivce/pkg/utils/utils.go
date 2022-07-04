package utils

import (
	"github.com/joho/godotenv"
	"os"
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
