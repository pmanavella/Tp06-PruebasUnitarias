function validatePlantName(name) {
    if (!name || typeof name !== 'string') {
      return { ok: false, message: 'El nombre es obligatorio' };
    }
  
    const trimmed = name.trim();
  
    if (trimmed.length < 2) {
      return { ok: false, message: 'El nombre debe tener al menos 2 caracteres' };
    }
  
    if (/[0-9]/.test(trimmed)) {
      return { ok: false, message: 'El nombre no puede contener números' };
    }
  
    if (trimmed.length > 50) {
      return { ok: false, message: 'El nombre es demasiado largo' };
    }
  
    return { ok: true, value: trimmed };
  }
  
  module.exports = { validatePlantName };
  