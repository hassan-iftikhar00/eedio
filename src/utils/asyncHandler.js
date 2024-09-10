// this is a custom function wrapper we made so we can wrap other function in it to catch errors more effeciently
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
