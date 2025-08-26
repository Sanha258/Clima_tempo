// Função para buscar previsão do tempo em Florianópolis - SC
async function getWeather() {
  const accessKey = "4fe555082902ea92dc943bd2d1694746"; // sua chave da API
  const city = "Florianópolis, SC"; // cidade que você deseja consultar
  const url = `https://api.weatherstack.com/forecast?access_key=${accessKey}&query=${encodeURIComponent(city)}&forecast_days=7`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Erro na requisição: " + response.status);
    }

    const data = await response.json();

    // Retornar apenas os dados relevantes
    return {
      location: data.location,
      current: {
        temperature: data.current.temperature,
        weather_descriptions: data.current.weather_descriptions,
        wind_speed: data.current.wind_speed,
        humidity: data.current.humidity
      },
      forecast: data.forecast
    };

  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return { error: error.message };
  }
}

// Exemplo de uso:
getWeather().then(result => console.log(result));
