class WeatherApi {
    constructor(apiContext) {
        this.apiContext = apiContext;
    }

    async getWeather(city, apiKey) {
        return await this.apiContext.get(
            'https://api.openweathermap.org/data/2.5/weather',
            {
                params: {
                    q: city,
                    appid: apiKey,
                    units: 'metric'
                }
            }
        );
    }
}

module.exports = { WeatherApi };