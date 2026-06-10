import 'dotenv/config';

const { test, expect, request } = require('@playwright/test');
const { WeatherApi } = require('../../api/WeatherApi');

const API_KEY = process.env.OPENWEATHER_API_KEY;
const CITY = process.env.CITY || 'Islamabad';

test('Scenario 3', async () => {

  const apiContext = await request.newContext();

  const weatherApi = new WeatherApi(apiContext);

  const response = await weatherApi.getWeather(
    CITY,
    API_KEY
  );

  expect(response).toBeOK();

  const data = await response.json();

  expect(data.name).toBe(CITY);
  expect(data.main.temp).toBeDefined();
  expect(data.main.temp).toBeGreaterThan(-20);
  expect(data.main.temp).toBeLessThan(60);

  console.log('==============================');
  console.log(`City: ${CITY}`);
  console.log(`Temperature: ${data.main.temp} °C`);
  console.log(`Weather Response Name: ${data.name}`);
  console.log('==============================');
});