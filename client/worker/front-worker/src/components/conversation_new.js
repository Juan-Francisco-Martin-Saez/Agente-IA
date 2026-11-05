const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 30000,
  maxRetries: 0
});

exports.create = async (req, res, next) => {
  try {

    console.log("\n==================================");
    console.log("1. PETICIÓN RECIBIDA");
    console.log("==================================");

    console.log("Método:", req.method);
    console.log("URL:", req.originalUrl);
    console.log("Body:", req.body);

    const prompt = req.body?.prompt;

    if (typeof prompt !== "string" || !prompt.trim()) {

      console.error("ERROR: El campo prompt está vacío");

      return res.status(400).json({
        error: "El campo prompt es obligatorio"
      });

    }

    console.log("\n==================================");
    console.log("2. ENVIANDO PETICIÓN A OPENAI");
    console.log("==================================");

    console.log("Prompt del usuario:", prompt);
    console.time("Tiempo OpenAI");

    const response = await openai.responses.create({

      prompt: {
        id: "pmpt_6ae4b8a3beec8196b8fa9a2a54fa85310c9187d3627ab2aa"
      },

      input: prompt

    });

    console.timeEnd("Tiempo OpenAI");

    console.log("\n==================================");
    console.log("3. RESPUESTA RECIBIDA DE OPENAI");
    console.log("==================================");

    console.log("ID:", response.id);
    console.log("Estado:", response.status);
    console.log("Contenido:", response.output_text);

    if (
      typeof response.output_text !== "string" ||
      !response.output_text.trim()
    ) {

      console.error("ERROR: OpenAI devolvió una respuesta vacía");

      return res.status(502).json({
        error: "OpenAI no devolvió una respuesta de texto válida",
        status: response.status || null
      });

    }

    console.log("\n==================================");
    console.log("4. ENVIANDO RESPUESTA A POSTMAN");
    console.log("==================================");

    const result = {
      response: response.output_text
    };

    console.log("JSON enviado:", result);

    return res.status(200).json(result);

  } catch (err) {

    console.error("\n==================================");
    console.error("ERROR EN EL CONTROLADOR");
    console.error("==================================");

    console.error("Nombre:", err.name);
    console.error("Mensaje:", err.message);
    console.error("Código:", err.code);
    console.error("Estado HTTP:", err.status);

    if (err.stack) {
      console.error("Stack:", err.stack);
    }

    const statusCode =
      Number.isInteger(err.status) &&
        err.status >= 400 &&
        err.status <= 599
        ? err.status
        : 502;

    if (!res.headersSent) {

      return res.status(statusCode).json({
        error: err.message || "Error al consultar OpenAI",
        code: err.code || null
      });

    }

    return next(err);

  }
};

exports.findAll = async (req, res, next) => {
  try {

    const result = [
      { name: "hola" },
      { name: "adios" }
    ];

    return res.status(200).json(result);

  } catch (err) {

    console.error("Error en findAll:", err);
    next(err);

  }
};