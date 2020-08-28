export interface DogResponse {
    weight:        Eight;
    height:        Eight;
    id:            number;
    name:          string;
    bred_for?:     string;
    breed_group?:  BreedGroup;
    life_span:     string;
    temperament?:  string;
    origin?:       string;
    country_code?: CountryCode;
    description?:  string;
    history?:      string;
    img?:          string;
}

export enum BreedGroup {
    Empty = "",
    Herding = "Herding",
    Hound = "Hound",
    Mixed = "Mixed",
    NonSporting = "Non-Sporting",
    Sporting = "Sporting",
    Terrier = "Terrier",
    Toy = "Toy",
    Working = "Working",
}

export enum CountryCode {
    Ag = "AG",
    Au = "AU",
    Us = "US",
}

export interface Eight {
    imperial: string;
    metric:   string;
}
