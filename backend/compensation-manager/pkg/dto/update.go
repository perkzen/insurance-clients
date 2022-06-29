package dto

import "compensation-manager/pkg/types"

type ReviewClaimDTO struct {
	Status types.Status `json:"status"`
}
