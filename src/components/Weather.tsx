"use client"

import { useState } from 'react'
import axios from 'axios'

export default function Weather() {
    const [city, setCity] = useState<string>('');
    const [searchedCity, setSearchedCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<any>(null);
    const [country, setCountry] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    const getDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const getBackgroundGif = (temp: number) => {
        if (temp < 0) return 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWtzN244ejBwdHF0N20ybHdtdjlwMGJudDE4cmJicWFvY3BocHFyeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cGymv7T9ZzDdLGczy7/giphy.gif';
        if (temp >= 1 && temp <= 20) return 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExemFyMjkyeDh5cWxzeG44YnNvdDh5ZTVuems1bHpjdnM2czAwdmo4ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JRgjhKV4UvgCpcue0q/giphy.gif';
        return 'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N3hhN3RkNW8zdXYybmp0Mm91MTVwZ3N2eWdtN3Fpbm9mdW55aW54OCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/xT0Gqz4x4eLd5gDtaU/giphy.gif';
    }

    const getWeather = async (cityName: string) => {
        try {
            const geoRes = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`);

            if (!geoRes.data.results || geoRes.data.results.length === 0) {
                setError(true);
                setWeatherData(null);
                return;
            }

            setError(false);

            const { latitude, longitude, country } = geoRes.data.results[0];
            setCountry(country);
            setSearchedCity(cityName);

            const weatherRes = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);

            setWeatherData(weatherRes.data.current_weather);
        } catch (err) {
            console.log("Error fetching weather:", err);
        }
    }

    const enterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && city.trim()) {
            getWeather(city);
        }
    }

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-700"
            style={{
                backgroundImage: weatherData ? `url(${getBackgroundGif(weatherData.temperature)})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}
        >
            <div className="min-h-screen backdrop-blur-sm bg-black/20">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex justify-center mb-8">
                        <input
                            type="text"
                            name="searchbar"
                            id="searchbar"
                            placeholder="Enter city name..."
                            value={city}
                            onChange={onChange}
                            onKeyDown={enterPressed}
                            className="w-full max-w-md px-6 py-4 text-lg rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl"
                        />
                    </div>

                    <div className="flex justify-center items-center min-h-[70vh]">
                        {error ? (
                            <div className="text-center">
                                <p className="text-3xl text-white font-semibold">No City Found</p>
                                <p className="text-white/70 mt-2">Please try another city name</p>
                            </div>
                        ) : weatherData ? (
                            <div className="text-center bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
                                <h1 className="text-6xl font-bold text-white mb-4">{searchedCity}, {country}</h1>
                                <p className="text-xl text-white/90 mb-8">{getDate(new Date())}</p>
                                <div className="text-8xl font-bold text-white mb-4">{weatherData.temperature}°C</div>
                                <p className="text-2xl text-white/80">Wind: {weatherData.windspeed} km/h</p>
                            </div>
                        ) : (
                            <div className="text-center">
                                <p className="text-3xl text-white font-semibold">Enter a city name to get started</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}