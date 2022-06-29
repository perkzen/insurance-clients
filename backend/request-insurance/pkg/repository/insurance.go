package repository

import (
	"request-insurance/pkg/db"
	"request-insurance/pkg/models"
)

type InsuranceRep struct {
}

func NewInsuranceRep() *InsuranceRep {
	return &InsuranceRep{}
}

func (i *InsuranceRep) Save(insurance *models.Insurance) Result {
	err := db.Client.Create(insurance).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: insurance}
}

func (i *InsuranceRep) FindByUser(userId uint) Result {
	var insurance []models.Insurance

	err := db.Client.Where(&models.Insurance{UserId: userId}).Take(&insurance).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: &insurance}
}

func (i *InsuranceRep) FindByRegistration(reg string) Result {
	var insurance []models.Insurance
	err := db.Client.Where(&models.Insurance{VehicleRegistration: reg}).Take(&insurance).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: &insurance}
}
