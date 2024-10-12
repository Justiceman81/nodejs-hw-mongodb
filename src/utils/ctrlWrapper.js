export const ctrlWrapper = (controller) => async (req, res, next) => {
  try {
    const result = await controller(req, res, next);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
