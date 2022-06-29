package repository

import (
	"compensation-manager/pkg/db"
	"compensation-manager/pkg/models"
	"compensation-manager/pkg/types"
)

type ClaimRep struct {
}

func NewClaimRepository() *ClaimRep {
	return &ClaimRep{}
}

func (c *ClaimRep) Save(claim *models.Claim) Result {
	err := db.Client.Create(claim).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: claim}
}

func (c *ClaimRep) Update(id uint, status types.Status) Result {
	var claim models.Claim

	err := db.Client.Model(&claim).Where("id = ?", id).Update("status", status).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: claim}
}

func (c *ClaimRep) FindOne(id uint) Result {
	var claim models.Claim
	err := db.Client.Where(&models.Claim{ID: id}).Take(&claim).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: &claim}
}
