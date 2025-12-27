class HttpStatus {
  static internalServerError(res, rest = {}) {
    return res.status(500).json({
      success: false,
      ...rest,
    });
  }
  static success(res, rest = {}) {
    return res.status(200).json({
      success: true,
      ...rest,
    });
  }
  static created(res, rest = {}) {
    return res.status(201).json({
      success: true,
      ...rest,
    });
  }
  static unauthorized(res, rest = {}) {
    return res.status(401).json({
      success: false,
      ...rest,
    });
  }
  static notFound(res, rest = {}) {
    return res.status(404).json({
      success: false,
      ...rest,
    });
  }
  static forbidden(res, rest = {}) {
    return res.status(403).json({
      success: false,
      ...rest,
    });
  }
  static badRequest(res, rest = {}) {
    return res.status(400).json({
      success: false,
      ...rest,
    });
  }
}

export { HttpStatus };
