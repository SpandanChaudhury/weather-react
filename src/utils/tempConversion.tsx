import { RequiredData } from "../types";

export const convertData = (data: RequiredData, degree: string) : RequiredData => {
    if(degree == 'celsius')
    {
        data.curr_temp = parseFloat(celsiusToFahrenheit(data.curr_temp).toFixed(2));
        data.max_temp = parseFloat(celsiusToFahrenheit(data.max_temp).toFixed(2));
        data.min_temp = parseFloat(celsiusToFahrenheit(data.min_temp).toFixed(2));   
    }
    else
    {
        data.curr_temp = parseFloat(fahrenheitToCelsius(data.curr_temp).toFixed(2));
        data.max_temp = parseFloat(fahrenheitToCelsius(data.max_temp).toFixed(2));
        data.min_temp = parseFloat(fahrenheitToCelsius(data.min_temp).toFixed(2)); 
    }   
    return data;
}

const fahrenheitToCelsius = (data: number) : number => {
    data = (data - 32) * 5/9;
    return data;
}

const celsiusToFahrenheit = (data: number) : number => {
    data = data * (9/5) + 32;
    return data;
}