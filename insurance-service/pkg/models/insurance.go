package models

import (
	"insurance-service/pkg/types"
	"time"
)

type Insurance struct {
	ID                  uint                `gorm:"primary_key" json:"id"`
	UserId              uint                `json:"userId"`
	Firstname           string              `json:"firstname"`
	Lastname            string              `json:"lastname"`
	Type                types.InsuranceType `json:"type"`
	From                *time.Time          `json:"from"`
	To                  *time.Time          `json:"to"`
	VehicleRegistration string              `json:"vehicleRegistration"`
	VehicleType         types.VehicleType   `json:"vehicleType"`
	VehicleKm           int                 `json:"vehicleKm"`
	SpeedingTickets     int                 `json:"speedingTickets"`
	DrunkDrivingTickets int                 `json:"drunkDrivingTickets"`
}
