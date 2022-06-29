package types

type Status string

const (
	Submitted Status = "submitted"
	Approved  Status = "approved"
	Rejected  Status = "rejected"
)
