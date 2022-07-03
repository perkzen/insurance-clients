package dto

import (
	"insurance-service/pkg/models"
	"insurance-service/pkg/types"
	"insurance-service/pkg/utils"
)

type InsuranceDTO struct {
	UserId              uint                `json:"userId"`
	Type                types.InsuranceType `json:"type"`
	From                string              `json:"from"`
	To                  string              `json:"to"`
	VehicleRegistration string              `json:"vehicleRegistration"`
	VehicleType         types.VehicleType   `json:"vehicleType"`
	VehicleKm           int                 `json:"km"`
	SpeedingTickets     int                 `json:"speedingTickets"`
	DrunkDrivingTickets int                 `json:"drunkDrivingTickets"`
}

func ConvertToInsurance(dto *InsuranceDTO) (*models.Insurance, error) {
	from, err := utils.StringToDate(dto.From)
	to, err := utils.StringToDate(dto.To)

	if err != nil {
		return nil, err
	}

	return &models.Insurance{
		UserId:              dto.UserId,
		Type:                dto.Type,
		From:                from,
		To:                  to,
		VehicleRegistration: dto.VehicleRegistration,
		VehicleType:         dto.VehicleType,
		VehicleKm:           dto.VehicleKm,
		SpeedingTickets:     dto.SpeedingTickets,
		DrunkDrivingTickets: dto.DrunkDrivingTickets,
	}, nil
}
