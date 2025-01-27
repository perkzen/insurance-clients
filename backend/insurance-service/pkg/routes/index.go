package routes

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"insurance-service/pkg/controllers"
)

const PREFIX = "/api/v1"

func setInsuranceRouter(router *gin.Engine) {
	insuranceGroup := router.Group(PREFIX + "/insurance")
	controller := controllers.NewInsuranceController()
	insuranceGroup.GET("/", controller.GetAllInsurance)
	insuranceGroup.GET("/:id", controller.GetInsurance)
	insuranceGroup.POST("/", controller.CreateInsurance)
	insuranceGroup.PUT("/:id", controller.UpdateInsurance)
}

func InitRouter() *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{"POST", "PUT", "GET", "DELETE"},
		AllowHeaders: []string{"Content-Type,access-control-allow-origin, access-control-allow-headers"},
	}))

	setInsuranceRouter(router)

	return router
}
