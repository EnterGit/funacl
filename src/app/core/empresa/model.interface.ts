export interface CountryI{
    id:number;
    name:string;
}

export interface CityI{
    id:number;
    countryId:number;
    name:string;
    
}