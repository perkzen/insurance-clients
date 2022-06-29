package services

import (
	"request-insurance/pkg/dto"
	"request-insurance/pkg/models"
	"request-insurance/pkg/repository"
)

type InsuranceService struct {
	repository *repository.InsuranceRep
}

func NewInsuranceService() *InsuranceService {
	return &InsuranceService{repository: repository.NewInsuranceRep()}
}

func (i *InsuranceService) Save(insurance *models.Insurance) dto.Response {
	res := i.repository.Save(insurance)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "Insurance was saved.",
		Data:    res.Data,
	}
}

func (i *InsuranceService) FindByUser(userId uint) dto.Response {
	res := i.repository.FindByUser(userId)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "Insurance was found.",
		Data:    res.Data,
	}
}

func (i *InsuranceService) FindByRegistration(reg string) dto.Response {
	res := i.repository.FindByRegistration(reg)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "Insurance was found.",
		Data:    res.Data,
	}

}
