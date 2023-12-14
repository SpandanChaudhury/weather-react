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
    country?: string;
    icon?: string;
    precipitation: number;
    wind_speed: number;
}
export type MainCardProps = {
    data : RequiredData,
}

export type useWeatherReturn = {
    currWeather: RequiredData | undefined | null,
    forecast: RequiredData[] | undefined | null
}
export type ToggleSwitchProps = {
    fetched: string;
    changeData: () => void;
}
export type FilterProps = {
    value: number;
    handleChange : (event: React.ChangeEvent<HTMLSelectElement>) => void;
}