const responseFormatter = (req, res, next) => {
  // Success response method
  res.success = (data, message = 'Success', status = 200) => {
    res.status(status).json({
      success: true,
      message,
      data,
      timestamp: new Date().toISOString()
    });
  };

  // Error response method
  res.error = (error, message = 'Error', status = 500) => {
    const response = {
      success: false,
      message,
      timestamp: new Date().toISOString()
    };

    // Include error details in development
    if (process.env.NODE_ENV === 'development') {
      response.error = error;
      response.stack = error.stack;
    } else {
      response.error = 'Internal server error';
    }

    res.status(status).json(response);
  };

  // Validation error method
  res.validationError = (errors, message = 'Validation failed') => {
    res.status(400).json({
      success: false,
      message,
      errors,
      timestamp: new Date().toISOString()
    });
  };

  // Not found method
  res.notFound = (resource = 'Resource') => {
    res.status(404).json({
      success: false,
      message: `${resource} not found`,
      timestamp: new Date().toISOString()
    });
  };

  // Unauthorized method
  res.unauthorized = (message = 'Unauthorized access') => {
    res.status(401).json({
      success: false,
      message,
      timestamp: new Date().toISOString()
    });
  };

  // Forbidden method
  res.forbidden = (message = 'Access forbidden') => {
    res.status(403).json({
      success: false,
      message,
      timestamp: new Date().toISOString()
    });
  };

  next();
};

module.exports = responseFormatter;