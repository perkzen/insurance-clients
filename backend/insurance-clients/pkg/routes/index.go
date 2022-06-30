package routes

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"insurance-clients/pkg/controllers"
)

const PREFIX = "/api/v1"

func setUserRouter(router *gin.Engine) {
	userGroup := router.Group(PREFIX + "/clients")
	controller := controllers.NewUserController()
	userGroup.GET("/", controller.GetAll)
	userGroup.GET("/:id", controller.GetOne)
	userGroup.POST("/", controller.Create)
	userGroup.PUT("/:id", controller.Update)
	userGroup.DELETE("/:id", controller.Delete)
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

	setUserRouter(router)

	return router
}
