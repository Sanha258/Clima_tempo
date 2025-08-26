const { getWeatherFlorianopolis } = require('../service/WstackAPI');

describe('Teste integrado da função getWeather', () => {
  it('deve executar sem lançar erro', async () => {
    await expect(getWeatherFlorianopolis()).resolves.not.toThrow();
  });
});