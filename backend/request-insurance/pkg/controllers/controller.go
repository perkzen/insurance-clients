package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"request-insurance/pkg/dto"
	"request-insurance/pkg/services"
	"strconv"
)

type InsuranceController struct {
	service *services.InsuranceService
}

func NewInsuranceController() *InsuranceController {
	return &InsuranceController{service: services.NewInsuranceService()}
}

func (i *InsuranceController) Save(c *gin.Context) {
	var insurance dto.InsuranceDTO

	if err := c.BindJSON(&insurance); err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Invalid request body"})
		return
	}

	newInsurance, err := dto.ConvertToInsurance(&insurance)

	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "String to date conversion failed"})
		return
	}

	res := i.service.Save(newInsurance)

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}

func (i *InsuranceController) GetByUserId(c *gin.Context) {
	userId := c.Param("userId")

	uintId, err := strconv.ParseUint(userId, 10, 64)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Id must be a number!"})
		return
	}

	res := i.service.FindByUser(uint(uintId))

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}

func (i *InsuranceController) GetByRegistration(c *gin.Context) {
	reg := c.Param("reg")

	if reg == "" {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Registration is required"})
		return
	}

	res := i.service.FindByRegistration(reg)

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}
