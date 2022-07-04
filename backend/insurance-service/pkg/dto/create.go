package dto

import (
	"insurance-service/pkg/models"
	"time"
)

type InsuranceDTO struct {
	Firstname           string `json:"firstname"`
	Lastname            string `json:"lastname"`
	Type                string `json:"type"`
	From                string `json:"from"`
	To                  string `json:"to"`
	VehicleRegistration string `json:"vehicleRegistration"`
	VehicleType         string `json:"vehicleType"`
	VehicleKm           int    `json:"vehicleKm"`
	SpeedingTickets     int    `json:"speedingTickets"`
	DrunkDrivingTickets int    `json:"drunkDrivingTickets"`
}

func ConvertToInsurance(dto *InsuranceDTO) (*models.Insurance, error) {
	from, err := time.Parse("2006-01-02", dto.From)

	if err != nil {
		return nil, err
	}

	to, err := time.Parse("2006-01-02", dto.To)

	if err != nil {
		return nil, err
	}

	return &models.Insurance{
		Firstname:           dto.Firstname,
		Lastname:            dto.Lastname,
		Type:                dto.Type,
		From:                &from,
		To:                  &to,
		VehicleRegistration: dto.VehicleRegistration,
		VehicleType:         dto.VehicleType,
		VehicleKm:           dto.VehicleKm,
		SpeedingTickets:     dto.SpeedingTickets,
		DrunkDrivingTickets: dto.DrunkDrivingTickets,
	}, nil
}
