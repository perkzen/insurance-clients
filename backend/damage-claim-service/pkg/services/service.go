package services

import (
	"damage-claim-service/pkg/dto"
	"damage-claim-service/pkg/models"
	"damage-claim-service/pkg/repository"
)

type ClaimService struct {
	repository *repository.ClaimRep
}

func NewClaimService() *ClaimService {
	return &ClaimService{
		repository: repository.NewClaimRepository(),
	}
}

func (s *ClaimService) SubmitClaim(claim *models.Claim) dto.Response {
	res := s.repository.Save(claim)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "Claim was submitted for review.",
		Data:    res.Data,
	}
}

func (s *ClaimService) ReviewClaim(id uint, data *dto.ReviewClaimDTO) dto.Response {
	res := s.repository.Update(id, data.Status)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "Claim was reviewed.",
		Data:    res.Data,
	}
}

func (s *ClaimService) GetClaim(id uint) dto.Response {
	res := s.repository.FindOne(id)

	if res.Error != nil {
		return dto.Response{
			Success: false,
			Message: res.Error.Error(),
		}
	}

	return dto.Response{
		Success: true,
		Message: "Claim found.",
		Data:    res.Data,
	}
}
