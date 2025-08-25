// Substitua pela sua chave de API válida
const API_KEY = "4fe555082902ea92dc943bd2d1694746";
const CITY = "Florianopolis, SC, Brazil";

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.weatherstack.com/forecast?access_key=${API_KEY}&query=${encodeURIComponent(CITY)}&forecast_days=7`
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      console.error("Erro retornado pela API:", data.error.info);
      return;
    }

    console.log("📍 Local:", data.location.name, "-", data.location.country);
    console.log("🌡️ Temperatura atual:", data.current.temperature + "°C");
    console.log("☁️ Clima:", data.current.weather_descriptions.join(", "));

    console.log("📅 Previsão para os próximos dias:");
    for (const [date, forecast] of Object.entries(data.forecast)) {
      console.log(
        `${date} → Máx: ${forecast.maxtemp}°C | Mín: ${forecast.mintemp}°C | Chance de chuva: ${forecast.daily_chance_of_rain}%`
      );
    }
  } catch (error) {
    console.error("Erro ao buscar dados:", error.message);
  }
}

getWeather();
