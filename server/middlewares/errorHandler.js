export function errorHandler(error, req, res, next) {
    console.log(error, ">> error handler");

    let status = error.status || 500;
    let message = error.message || "Internal Server Error";

    switch (error.name) {
      case "JsonWebTokenError":
        status = 401;
        message = "Invalid Token";
        break;

      case "NotFound":
        status = 404;
        message = "Data not found";
        break;

      case "Forbidden":
        status = 403;
        message = "You are not authorized";
        break;

      case "SequelizeValidationError":
        status = 400;
        message = error.errors.map(e => e.message).join(", ");
        break;

      case "Unauthorized":
        status = 401;
        message = "You are not authorized";
        break;

      case "BadRequest":
        status = 400;
        message = "Bad Request";
        break;

      case "InvalidToken":
        status = 401;
        message = "Invalid Token";
        break;

      default:
        if (error.message === "Email or Password required") {
          status = 400;
          message = "Email or Password required";
        } else if (error.message === "Email or Password is wrong") {
          status = 400;
          message = "Email or Password is wrong";
        } else if (error.message === "Email already registered") {
          status = 400;
          message = "Email already registered";
        } else if (error.message === "Input must be in email format") {
          status = 400;
          message = "Input must be in email format";
        }
        break;
    }

    res.status(status).json({ message });
}
