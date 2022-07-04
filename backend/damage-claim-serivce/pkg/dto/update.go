package dto

import "damage-claim-service/pkg/types"

type ReviewClaimDTO struct {
	Status types.Status `json:"status"`
}
