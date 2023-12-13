export type SearchBoxTypes = {
    query : string;
    setQuery: (query: string) => void;
    findWeather: () => void;
}
export type RequiredData = {
    curr_temp: number;
    valid_date : string;
    max_temp: number;
    min_temp: number;
    weather: string;
    location?: string;
    icon?: string;
    precipitation: number;
    wind_speed: number;
}
export type MainCardProps = {
    data : RequiredData
}
