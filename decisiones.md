# Decisiones de Diseño y Testing – TP06 Pruebas Unitarias

## 1. Frameworks de testing elegidos y justificación

### Backend
- **Framework:** Jest + Supertest  
- **Motivo:** Jest ofrece un entorno de pruebas rápido y simple para Node.js, mientras que Supertest facilita probar endpoints HTTP sin levantar el servidor.  
  Esto permitió validar el comportamiento de las rutas `/api/plants` asegurando que las respuestas fueran correctas (códigos 200, 201, 400, etc.).

### Frontend
- **Framework:** Jest + React Testing Library  
- **Motivo:** permite probar los componentes de React simulando la interacción real del usuario (inputs, botones, render dinámico), sin depender de un backend real.

---

## 2. Estrategia de mocking implementada

- En el **frontend**, se utilizó `global.fetch = jest.fn()` para simular las peticiones HTTP.  
  Esto permitió aislar el comportamiento del componente y validar la lógica sin conexión real con la API.
- En el **backend**, la función de negocio `validatePlantName()` se probó de forma aislada, sin necesidad de Express ni base de datos, garantizando independencia y pureza de las pruebas.

---

## 3. Casos de prueba más relevantes

### Backend
- **GET /api/plants** → devuelve lista de plantas (status 200).  
- **POST /api/plants (válido)** → crea correctamente una nueva planta (status 201).  
- **POST /api/plants (inválido)** → devuelve error (status 400).  
- **validatePlantName()** → prueba distintos escenarios: vacío, corto, con números, demasiado largo.

### Frontend
- Render inicial del componente principal: muestra datos obtenidos desde el mock.  
- Envío del formulario: simula un POST y valida que se ejecuta el `fetch` con el cuerpo `{ name: 'Carlos Gómez' }`.

---

## 4. Integración con CI/CD en Azure DevOps

- Se creó un pipeline (`azure-pipelines.yml`) que ejecuta los tests automáticamente en cada push a `main`.  
- El pipeline utiliza una imagen de Ubuntu con Node.js 20 e incluye los siguientes pasos:
  1. Instalación de dependencias del backend (`npm ci`).
  2. Ejecución de tests de backend (`npm test`).
  3. Instalación de dependencias del frontend (`npm ci`).
  4. Ejecución de tests de frontend (`npm test -- --watch=false`).
- Si algún test falla, el pipeline se marca como **Failed**, deteniendo la ejecución.

---

## 5. Evidencias de ejecución

Capturas disponibles en la carpeta `docs/imagenes`, incluyendo:
- `backend-tests.png`  
- `frontend-tests.png`  
- `pipeline-passed.png`

---

## 6. Conclusión

Este trabajo permitió aplicar pruebas unitarias tanto en el frontend como en el backend de una aplicación web, además de integrar la ejecución automática de las mismas en un pipeline CI/CD.  
Se logró aislar correctamente la lógica de negocio, implementar mocks para dependencias externas y garantizar la calidad del software de forma continua.

