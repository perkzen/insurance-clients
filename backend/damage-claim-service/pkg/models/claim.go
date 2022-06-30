package models

import (
	"damage-claim-service/pkg/types"
	"time"
)

type Claim struct {
	ID          uint         `gorm:"primary_key" json:"id"`
	UserId      uint         `gorm:"not null" json:"userId"`
	Comment     string       `json:"comment"`
	InsuranceId uint         `json:"insuranceId"`
	Date        time.Time    `json:"date"`
	CreatedAt   time.Time    `json:"submittedAt"`
	Status      types.Status `json:"status"`
}
