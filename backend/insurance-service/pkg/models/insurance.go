package models

import "time"

type Insurance struct {
	ID                  uint       `gorm:"primary_key" json:"id"`
	Firstname           string     `json:"firstname"`
	Lastname            string     `json:"lastname"`
	Type                string     `json:"type"`
	From                *time.Time `json:"from"`
	To                  *time.Time `json:"to"`
	VehicleRegistration string     `json:"vehicleRegistration"`
	VehicleType         string     `json:"vehicleType"`
	VehicleKm           int        `json:"vehicleKm"`
	SpeedingTickets     int        `json:"speedingTickets"`
	DrunkDrivingTickets int        `json:"drunkDrivingTickets"`
}
