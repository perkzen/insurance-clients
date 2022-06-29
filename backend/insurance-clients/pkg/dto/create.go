package dto

import (
	"insurance-clients/pkg/models"
	"insurance-clients/pkg/types"
	"time"
)

type UserDTO struct {
	Firstname          string             `json:"firstname"`
	Lastname           string             `json:"lastname"`
	Email              string             `json:"email"`
	Gender             types.Gender       `json:"gender"`
	Birthday           string             `json:"birthday"`
	RelationshipStatus types.Relationship `json:"relationshipStatus"`
	Children           int                `json:"children"`
	SalaryType         types.Salary       `json:"salaryType"`
}

func ConvertToUser(dto *UserDTO) (*models.User, error) {
	date, err := time.Parse("2006-01-02", dto.Birthday)

	if err != nil {
		return nil, err
	}

	return &models.User{
		Firstname:          dto.Firstname,
		Lastname:           dto.Lastname,
		Email:              dto.Email,
		Birthday:           &date,
		RelationshipStatus: dto.RelationshipStatus,
		Children:           dto.Children,
		SalaryType:         dto.SalaryType,
	}, nil
}
