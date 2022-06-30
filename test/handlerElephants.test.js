const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Testa se a função está definida', () => {
    expect(handlerElephants).toBeDefined();
  });
  it('Testa se retorna undefined quando nenhum parâmetro é passado', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se retorna "Parâmetro inválido, é necessário uma string" se o parâmetro passado não for uma string', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(123)).toBe(expected);
    expect(handlerElephants({ param: 'names' })).toBe(expected);
    expect(handlerElephants(['names'])).toBe(expected);
  });
  it('Testa se retorna null quando o parâmetro passado é uma string mas não tem aplicabilidade na função', () => {
    const expected = null;
    expect(handlerElephants('colors')).toBe(expected);
    expect(handlerElephants('weights')).toBe(expected);
    expect(handlerElephants('origin')).toBe(expected);
  });
  it('Testa se retorna a quantidade de elefantes quando o paramêtro é "count"', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Testa se retorna um array com a relação dos nomes de todos os elefantes quando o paramêtro é "names"', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Testa se retorna a média de idade dos elefantes quando o paramêtro é "averageAge"', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Testa se retorna a localização dos elefantes dentro do Zoológico quando o paramêtro é "location"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa se retorna a popularidade dos elefantes quando o paramêtro é "popularity"', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('Testa se retorna um array com a relação de dias em que é possível visitar os elefantes quando o paramêtro é "availability"', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
});
