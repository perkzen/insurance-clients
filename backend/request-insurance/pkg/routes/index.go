package routes

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"request-insurance/pkg/controllers"
)

func setInsuranceRouter(router *gin.Engine) {
	insuranceGroup := router.Group("/insurance")
	controller := controllers.NewInsuranceController()
	insuranceGroup.POST("/", controller.Save)
	insuranceGroup.GET("/:id", controller.GetByUserId)
	insuranceGroup.POST("/vehicle/:reg", controller.GetByRegistration)
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
