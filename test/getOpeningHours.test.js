const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Testa se a função está definida', () => {
    expect(getOpeningHours).toBeDefined();
  });
  it('Testa se retorna um objeto com todos os horários e dias quando nenhum parâmetro é passado', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Testa se retorna "The zoo is open" quando o dia e horário forem adequados', () => {
    // Random hours?
    const expected = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '08:00-AM')).toBe(expected);
    expect(getOpeningHours('Wednesday', '02:30-PM')).toBe(expected);
    expect(getOpeningHours('Thursday', '10:45-AM')).toBe(expected);
    expect(getOpeningHours('Friday', '07:59-PM')).toBe(expected);
    expect(getOpeningHours('Saturday', '09:00-PM')).toBe(expected);
    expect(getOpeningHours('Sunday', '04:20-PM')).toBe(expected);
  });
  it('Testa se retorna "The zoo is closed" quando o horário é inadequado', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Tuesday', '05:30-AM')).toBe(expected);
    expect(getOpeningHours('Wednesday', '06:00-PM')).toBe(expected);
    expect(getOpeningHours('Thursday', '08:15-PM')).toBe(expected);
    expect(getOpeningHours('Friday', '09:59-AM')).toBe(expected);
    expect(getOpeningHours('Saturday', '11:30-PM')).toBe(expected);
    expect(getOpeningHours('Sunday', '04:45-AM')).toBe(expected);
  });
  it('Testa se retorna "The zoo is closed" quando o dia é "Monday", independente do horário', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Monday', '06:00-AM')).toBe(expected);
    expect(getOpeningHours('Monday', '12:00-PM')).toBe(expected);
    expect(getOpeningHours('Monday', '06:00-PM')).toBe(expected);
    expect(getOpeningHours('Monday', '12:00-AM')).toBe(expected);
  });
  it('Testa se um erro é lançado quando o dia passado no 1o parâmetro não for válido', () => {
    expect(() => getOpeningHours('Thorsday', '12:00-PM')).toThrow();
  });
  it('Testa se um erro é lançado quando as horas passadas no 2o parâmetro não são números', () => {
    // const expected = 'The hour should represent a number';
    // expect(() => getOpeningHours('Tuesday', 'XX:00-PM')).toThrowError(new Error(expected));
    expect(() => getOpeningHours('Tuesday', 'XX:00-PM')).toThrow();
    expect(() => getOpeningHours('Tuesday', '1X:00-PM')).toThrow();
    expect(() => getOpeningHours('Tuesday', 'X2:00-PM')).toThrow();
  });
  it('Testa se um erro é lançado quando as horas passadas no 2o parâmetro não estão no intervalo de 0 e 12', () => {
    expect(() => getOpeningHours('Tuesday', '13:00-PM')).toThrow();
  });
  it('Testa se um erro é lançado quando os minutos passados no 2o parâmetro não são números', () => {
    expect(() => getOpeningHours('Tuesday', '12:XX-PM')).toThrow();
    expect(() => getOpeningHours('Tuesday', '12:0X-PM')).toThrow();
    expect(() => getOpeningHours('Tuesday', '12:X0-PM')).toThrow();
  });
  it('Testa se um erro é lançado quando os minutos passados no 2o parâmetro não estão no intervalo de 0 e 59', () => {
    expect(() => getOpeningHours('Tuesday', '12:60-PM')).toThrow();
  });
  it('Testa se um erro é lançado quando a abreviação passada no 2o parâmetro não é "AM" ou "PM"', () => {
    expect(() => getOpeningHours('Tuesday', '12:00-XX')).toThrow();
    expect(() => getOpeningHours('Tuesday', '12:00-AX')).toThrow();
    expect(() => getOpeningHours('Tuesday', '12:00-XM')).toThrow();
  });
});
