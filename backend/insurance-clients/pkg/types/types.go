package types

type Relationship string
type Gender string
type Salary string

const (
	Married Relationship = "married"
	Single  Relationship = "single"
)

const (
	Male   Gender = "male"
	Female Gender = "female"
)

const (
	Low  Salary = "low"
	Mid  Salary = "mid"
	High Salary = "high"
)
