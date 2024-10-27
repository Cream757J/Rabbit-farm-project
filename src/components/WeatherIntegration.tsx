import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';

interface WeatherData {
  temperature: number;
  humidity: number;
  description: string;
  windSpeed: number;
}

const WeatherIntegration: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    // Simulating API call to get weather data
    const fetchWeather = () => {
      // In a real application, you would make an API call here
      const mockWeatherData: WeatherData = {
        temperature: 22,
        humidity: 60,
        description: 'Partly cloudy',
        windSpeed: 5,
      };
      setWeather(mockWeatherData);
    };

    fetchWeather();
    // Set up interval to fetch weather data every hour
    const interval = setInterval(fetchWeather, 3600000);

    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (description: string) => {
    switch (description.toLowerCase()) {
      case 'clear':
        return <Sun className="w-8 h-8" />;
      case 'partly cloudy':
        return <Cloud className="w-8 h-8" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8" />;
      default:
        return <Cloud className="w-8 h-8" />;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Weather Information</h2>
      {weather ? (
        <div className="bg-white p-4 rounded shadow">
          <div className="flex items-center mb-4">
            {getWeatherIcon(weather.description)}
            <span className="ml-2 text-xl">{weather.description}</span>
          </div>
          <p className="mb-2">Temperature: {weather.temperature}°C</p>
          <p className="mb-2">Humidity: {weather.humidity}%</p>
          <p className="flex items-center">
            <Wind className="w-4 h-4 mr-1" /> Wind Speed: {weather.windSpeed} m/s
          </p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Weather-based Recommendations</h3>
        <ul className="list-disc pl-5">
          {weather && (
            <>
              {weather.temperature > 30 && (
                <li>High temperature alert: Ensure rabbits have access to shade and cool water.</li>
              )}
              {weather.temperature < 5 && (
                <li>Low temperature alert: Provide extra bedding for warmth.</li>
              )}
              {weather.humidity > 80 && (
                <li>High humidity alert: Monitor for respiratory issues and ensure good ventilation.</li>
              )}
              {weather.windSpeed > 10 && (
                <li>Strong wind alert: Secure outdoor enclosures and provide wind barriers.</li>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default WeatherIntegration;