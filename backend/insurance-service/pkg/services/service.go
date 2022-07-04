package services

import (
	"insurance-service/pkg/dto"
	"insurance-service/pkg/models"
	"insurance-service/pkg/repository"
)

type InsuranceService struct {
	repository *repository.InsuranceRep
}

func NewInsuranceService() *InsuranceService {
	return &InsuranceService{
		repository: repository.NewInsuranceRepository(),
	}
}

func (s *InsuranceService) GetInsurance(id uint) dto.Response {
	res := s.repository.FindOne(id)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "",
		Data:    res.Data,
	}

}

func (s *InsuranceService) GetAllInsurance() dto.Response {
	res := s.repository.FindAll()

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "Insurance found",
		Data:    res.Data,
	}

}

func (s *InsuranceService) CreateInsurance(insurance *models.Insurance) dto.Response {
	res := s.repository.Save(insurance)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "",
		Data:    res.Data,
	}

}

func (s *InsuranceService) UpdateInsurance(id uint, data *models.Insurance) dto.Response {
	res := s.repository.Update(id, data)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "",
		Data:    res.Data,
	}

}
