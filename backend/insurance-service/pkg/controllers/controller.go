package controllers

import (
	"github.com/gin-gonic/gin"
	"insurance-service/pkg/dto"
	"insurance-service/pkg/services"
	"net/http"
	"strconv"
)

type InsuranceController struct {
	service *services.InsuranceService
}

func NewInsuranceController() *InsuranceController {
	return &InsuranceController{
		service: services.NewInsuranceService(),
	}
}

func (con *InsuranceController) GetInsurance(c *gin.Context) {
	id := c.Param("id")

	uintId, err := strconv.ParseUint(id, 10, 64)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Id must be a number!"})
		return
	}

	res := con.service.GetInsurance(uint(uintId))

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}

func (con *InsuranceController) GetAllInsurance(c *gin.Context) {
	res := con.service.GetAllInsurance()

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}

func (con *InsuranceController) CreateInsurance(c *gin.Context) {
	var insurance *dto.InsuranceDTO

	if err := c.BindJSON(&insurance); err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Invalid request body"})
		return
	}

	newInsurance, err := dto.ConvertToInsurance(insurance)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "String to date conversion failed"})
		return
	}

	res := con.service.CreateInsurance(newInsurance)

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}

func (con *InsuranceController) UpdateInsurance(c *gin.Context) {
	id := c.Param("id")

	uintId, err := strconv.ParseUint(id, 10, 64)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Id must be a number!"})
		return
	}

	var insurance *dto.InsuranceDTO

	if err := c.BindJSON(&insurance); err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Invalid request body"})
		return
	}

	newInsurance, err := dto.ConvertToInsurance(insurance)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "String to date conversion failed"})
		return
	}
	res := con.service.UpdateInsurance(uint(uintId), newInsurance)

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}
