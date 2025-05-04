## 🧠 Microservicio de Creación de Usuarios — Node.js + GraphQL

Este microservicio permite registrar usuarios a través de una **mutación GraphQL**. Los datos son enviados a un backend FastAPI mediante una llamada REST (`POST /users/register`), el cual los almacena en una base de datos PostgreSQL.

---

## 📌 Funcionalidad

🔹 Recibe datos del usuario por GraphQL  
🔹 Envía los datos al backend principal (FastAPI)  
🔹 Devuelve al cliente los datos del usuario creado

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express
- GraphQL (`express-graphql`)
- Axios
- Dotenv
- FastAPI (backend)
- PostgreSQL (base de datos)

---

## 📂 Estructura del proyecto

```

microservicio/
├── index.js         # Servidor Express + GraphQL
├── schema.js        # Esquema GraphQL con mutaciones
├── .env             # Configuración de entorno
├── package.json     # Dependencias

````

---

## ⚙️ Configuración

1. Clonar el repositorio  
2. Instalar dependencias:

```bash
npm install
````

3. Crear el archivo `.env`:

```
FASTAPI_URL=http://localhost:8000
```

4. Iniciar el servidor:

```bash
npm start
```

---

## 🚀 Endpoint

> [http://localhost:4000/graphql](http://localhost:4000/graphql)

---

## ✨ Ejemplos de uso (GraphQL)

### 1️⃣ Crear usuario

```graphql
mutation {
  createUser(email: "maria@ucb.edu.bo", password: "clave123") {
    id
    email
    is_active
  }
}
```

---

### 2️⃣ Usuario ya registrado (error esperado)

```graphql
mutation {
  createUser(email: "maria@ucb.edu.bo", password: "otraClave") {
    id
    email
    is_active
  }
}
```

📨 **Respuesta esperada:**

```json
{
  "errors": [
    {
      "message": "Email ya registrado"
    }
  ]
}
```

---

### 3️⃣ Query de prueba (verificar si el servidor GraphQL está activo)

```graphql
query {
  _empty
}
```

---

## ✅ Pruebas realizadas

✔️ Registro de usuario exitoso
✔️ Manejo de error por email duplicado
✔️ Integración completa Node.js → FastAPI → PostgreSQL

---

## 📚 Créditos

Desarrollado por **Joan Riveros Soria**, para la materia de **Tecnologías Web II**
**Universidad**: Universidad Católica Boliviana San Pablo
**Fecha**: 3 de Mayo, 2025
