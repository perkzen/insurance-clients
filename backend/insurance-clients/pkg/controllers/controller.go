package controllers

import (
	"github.com/gin-gonic/gin"
	"insurance-clients/pkg/dto"
	"insurance-clients/pkg/services"
	"net/http"
	"strconv"
)

type UserController struct {
	service *services.UserService
}

func NewUserController() *UserController {
	return &UserController{
		service: services.NewClientService(),
	}
}

func (u *UserController) GetAll(c *gin.Context) {

	res := u.service.GetAll()

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}

func (u *UserController) GetOne(c *gin.Context) {

	id := c.Param("id")

	uintId, err := strconv.ParseUint(id, 10, 64)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Id must be a number!"})
		return
	}

	res := u.service.GetOne(uint(uintId))

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}

func (u *UserController) Create(c *gin.Context) {
	var user *dto.UserDTO

	if err := c.BindJSON(&user); err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Invalid request body"})
		return
	}

	newUser, err := dto.ConvertToUser(user)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "String to date conversion failed"})
		return
	}
	res := u.service.Create(newUser)

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}

func (u *UserController) Update(c *gin.Context) {
	id := c.Param("id")

	uintId, err := strconv.ParseUint(id, 10, 64)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Id must be a number!"})
		return
	}

	var user *dto.UserDTO

	if err := c.BindJSON(&user); err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Invalid request body"})
		return
	}

	updatedUser, err := dto.ConvertToUser(user)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "String to date conversion failed"})
		return
	}

	res := u.service.Update(uint(uintId), updatedUser)

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}

func (u *UserController) Delete(c *gin.Context) {
	id := c.Param("id")

	uintId, err := strconv.ParseUint(id, 10, 64)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusPreconditionFailed, gin.H{"message": "Id must be a number!"})
		return
	}

	res := u.service.Delete(uint(uintId))

	if res.Success == false {
		c.AbortWithStatusJSON(http.StatusNotFound, gin.H{"message": res.Message})
		return
	}

	c.JSON(http.StatusOK, res.Data)
}
