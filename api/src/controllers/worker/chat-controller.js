const OpenAI = require("openai")

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

exports.create = async (req, res, next) => {
  try {

    const prompt = req.body?.prompt;

    if (typeof prompt !== "string" || !prompt.trim()) {
      return res.status(400).json({
        error: "El campo prompt es obligatorio"
      });
    }

    console.log("Petición recibida:", prompt);

    const response = await openai.responses.create({
      prompt: {
        id: "pmpt_6ae4b8a3beec8196b8fa9a2a54fa85310c9187d3627ab2aa"
      },
      input: prompt
    });

    console.log("Respuesta OpenAI:", response.output_text);

    res.status(200).json({
      prompt: prompt,
      response: response.output_text
    });

  } catch (err) {
    console.error("Error OpenAI:", err);
    next(err);
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const result = [
      { name: "hola" },
      { name: "adios" }
    ];

    res.status(200).send(result);

  } catch (err) {
    next(err)
  }
}