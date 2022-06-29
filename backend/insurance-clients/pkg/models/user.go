package models

import (
	"insurance-clients/pkg/types"
	"time"
)

type User struct {
	ID                 uint               `gorm:"primary_key" json:"id"`
	Firstname          string             `json:"firstname"`
	Lastname           string             `json:"lastname"`
	Email              string             `json:"email"`
	Gender             types.Gender       `json:"gender"`
	Birthday           *time.Time         `json:"birthday"`
	RelationshipStatus types.Relationship `json:"relationshipStatus"`
	Children           int                `json:"children"`
	SalaryType         types.Salary       `json:"salaryType"`
}
