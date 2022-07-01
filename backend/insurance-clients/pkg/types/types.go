package types

type Relationship int
type Gender string
type Income string

const (
	Married Relationship = 1
	Single  Relationship = 0
)

const (
	Male   Gender = "male"
	Female Gender = "female"
)

const (
	MINMAL        Income = "minmal"
	BELOW_AVERAGE Income = "below average"
	AVERAGE       Income = "average"
	ABOVE_AVERAGE Income = "above average"
)
