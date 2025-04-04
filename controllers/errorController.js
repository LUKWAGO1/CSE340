const errorController = {};

errorController.triggerError = function (req, res, next) {
  next(new Error("Intentional 500 Error"));
};

module.exports = errorController;