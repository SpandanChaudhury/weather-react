export type SearchBoxTypes = {
    query : string;
    setQuery: (query: string) => void;
    findWeather: () => void;
}
export type RequiredData = {
    app_max_temp: number;
    valid_date : string;
    max_temp: number;
    min_temp: number;
    weather: string;
    location?: string;
    icon?: string;
}
export type MainCardProps = {
    data : RequiredData
}
