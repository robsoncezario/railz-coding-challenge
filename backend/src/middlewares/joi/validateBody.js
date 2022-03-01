export default (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
      const message = error.details.map((e) => e.message).join(", ");

      res.status(400).json({ message: message });
    } else {
      next();
    }
  };
};
