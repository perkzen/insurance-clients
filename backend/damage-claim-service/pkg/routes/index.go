package routes

import (
	c "damage-claim-service/pkg/controllers"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

const PREFIX = "/api/v1"

func setCompensationManagerRouter(router *gin.Engine) {
	managementGroup := router.Group(PREFIX + "/damage-claim-service")
	managementController := c.NewClaimController()
	managementGroup.POST("/submit", managementController.SubmitClaim)
	managementGroup.PUT("/review/:id", managementController.ReviewClaim)
	managementGroup.GET("/:id", managementController.GetClaim)
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

	setCompensationManagerRouter(router)

	return router
}
