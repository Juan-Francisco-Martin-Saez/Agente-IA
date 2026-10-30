exports.create = async (req, res, next) => {
  try {
    const result = {
      response: "hola"
    }

    res.status(200).send(result)
  } catch (err) {
    next(err)
  }
}