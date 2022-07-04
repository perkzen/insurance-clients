package controllers

import (
	"damage-claim-service/pkg/dto"
	"damage-claim-service/pkg/services"
	"damage-claim-service/pkg/types"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

type ClaimController struct {
	service *services.ClaimService
}

func NewClaimController() *ClaimController {
	return &ClaimController{
		service: services.NewClaimService(),
	}
}

func (con *ClaimController) SubmitClaim(c *gin.Context) {
	var claim *dto.ClaimDTO

	if err := c.BindJSON(&claim); err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Invalid request body"})
		return
	}

	newClaim, err := dto.ConvertToClaim(claim)

	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "String to date conversion failed"})
		return
	}

	newClaim.Status = types.Submitted
	res := con.service.SubmitClaim(newClaim)

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}

func (con *ClaimController) ReviewClaim(c *gin.Context) {
	id := c.Param("id")

	uintId, err := strconv.ParseUint(id, 10, 64)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Id must be a number!"})
		return
	}

	var data *dto.ReviewClaimDTO

	if err := c.BindJSON(&data); err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Invalid request body"})
		return
	}

	res := con.service.ReviewClaim(uint(uintId), data)

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}

func (con *ClaimController) GetClaim(c *gin.Context) {

	id := c.Param("id")

	uintId, err := strconv.ParseUint(id, 10, 64)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Id must be a number!"})
		return
	}

	res := con.service.GetClaim(uint(uintId))

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}
