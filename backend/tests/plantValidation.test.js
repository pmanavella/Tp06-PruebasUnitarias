const { validatePlantName } = require('../src/plantValidation');

describe('validatePlantName', () => {
  it('acepta un nombre válido', () => {
    const result = validatePlantName('Aloe Vera');
    expect(result.ok).toBe(true);
    expect(result.value).toBe('Aloe Vera');
  });

  it('rechaza nombre vacío', () => {
    const result = validatePlantName('');
    expect(result.ok).toBe(false);
    expect(result.message).toBe('El nombre es obligatorio');
  });

  it('rechaza nombre muy corto', () => {
    const result = validatePlantName('A');
    expect(result.ok).toBe(false);
  });

  it('rechaza nombres con números', () => {
    const result = validatePlantName('Planta 123');
    expect(result.ok).toBe(false);
  });

  it('rechaza nombre demasiado largo', () => {
    const result = validatePlantName('X'.repeat(60));
    expect(result.ok).toBe(false);
  });
});
