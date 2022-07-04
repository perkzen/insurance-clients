package repository

import (
	"insurance-service/pkg/db"
	"insurance-service/pkg/models"
)

type InsuranceRep struct{}

func NewInsuranceRepository() *InsuranceRep {
	return &InsuranceRep{}
}

func (i *InsuranceRep) Save(insurance *models.Insurance) Result {
	err := db.Client.Create(insurance).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: insurance}
}

func (i *InsuranceRep) FindOne(id uint) Result {
	var insurance models.Insurance
	err := db.Client.Where(&models.Insurance{ID: id}).Take(&insurance).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: &insurance}
}

func (i *InsuranceRep) FindAll() Result {
	var insurance []models.Insurance

	res := db.Client.Find(&insurance)

	if res.Error != nil {
		return Result{Error: res.Error}
	}

	return Result{Data: &insurance}
}

func (i *InsuranceRep) Update(id uint, data *models.Insurance) Result {
	var insurance models.Insurance
	err := db.Client.Where(&models.Insurance{ID: id}).Take(&insurance).Error

	if err != nil {
		return Result{Error: err}
	}

	insurance = *data
	insurance.ID = id

	db.Client.Save(&insurance)

	return Result{Data: &insurance}
}
