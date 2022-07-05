package dto

import (
	"damage-claim-service/pkg/models"
	"time"
)

type ClaimDTO struct {
	Email         string `gorm:"not null" json:"email"`
	Comment       string `json:"comment"`
	InsuranceType string `json:"insuranceType"`
	Date          string `json:"date"`
}

func ConvertToClaim(dto *ClaimDTO) (*models.Claim, error) {
	date, err := time.Parse("2006-01-02", dto.Date)

	if err != nil {
		return nil, err
	}

	return &models.Claim{
		Email:         dto.Email,
		Comment:       dto.Comment,
		InsuranceType: dto.InsuranceType,
		Date:          date,
	}, nil
}
