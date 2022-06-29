package repository

import (
	"insurance-clients/pkg/db"
	"insurance-clients/pkg/models"
	"strconv"
)

type UserRep struct{}

func NewUserRepository() *UserRep {
	return &UserRep{}
}

func (u *UserRep) Save(user *models.User) Result {
	err := db.Client.Create(user).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: user}
}

func (u *UserRep) FindOne(id uint) Result {
	var user models.User
	err := db.Client.Where(&models.User{ID: id}).Take(&user).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: &user}
}

func (u *UserRep) FindAll() Result {
	var user []models.User

	res := db.Client.Find(&user)

	if res.Error != nil {
		return Result{Error: res.Error}
	}

	return Result{Data: &user}
}

func (u *UserRep) Update(id uint, data *models.User) Result {
	var user models.User
	err := db.Client.Where(&models.User{ID: id}).Take(&user).Error

	if err != nil {
		return Result{Error: err}
	}

	user = *data
	user.ID = id

	db.Client.Save(&user)

	return Result{Data: &user}
}

func (u *UserRep) Delete(id uint) Result {
	err := db.Client.Delete(&models.User{ID: id}).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: "User with id " + strconv.Itoa(int(id)) + " was deleted."}

}
