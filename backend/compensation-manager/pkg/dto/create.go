package dto

import (
	"compensation-manager/pkg/models"
	"time"
)

type ClaimDTO struct {
	UserId    uint   `gorm:"not null" json:"userId"`
	Comment   string `json:"comment"`
	Insurance string `json:"insurance"`
	Date      string `json:"date"`
}

func ConvertToClaim(dto *ClaimDTO) (*models.Claim, error) {
	date, err := time.Parse("2006-01-02", dto.Date)

	if err != nil {
		return nil, err
	}

	return &models.Claim{
		UserId:    dto.UserId,
		Comment:   dto.Comment,
		Insurance: dto.Insurance,
		Date:      date,
	}, nil
}
