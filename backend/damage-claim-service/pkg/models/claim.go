package models

import (
	"damage-claim-service/pkg/types"
	"time"
)

type Claim struct {
	ID            uint         `gorm:"primary_key" json:"id"`
	Email         string       `json:"email"`
	Comment       string       `json:"comment"`
	InsuranceType string       `json:"insuranceType"`
	Date          time.Time    `json:"date"`
	CreatedAt     time.Time    `json:"submittedAt"`
	Status        types.Status `json:"status"`
}
