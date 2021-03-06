package models

type Recipe struct {
	Recipe_ID    string `json:"recipe_id"`
	Name         string `json:"name"`
	Ingredients  string `json:"ingredients"`
	Instructions string `json:"instructions"`
	Opened       bool   `json:"opened"`
	Message      string `json:"message,omitempty"`
}
