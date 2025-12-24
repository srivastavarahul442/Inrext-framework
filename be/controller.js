export class Controller {
  constructor() {
    this.handler = this.handler.bind(this);
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
    this.patch = this.patch.bind(this);
    this.skipAuth = [];
    this.before = null;
    this.userAuth = null;
  }
  methodNotAllowed(res) {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }
  get(req, res) {
    return this.methodNotAllowed(res);
  }
  post(req, res) {
    return this.methodNotAllowed(res);
  }
  put(req, res) {
    return this.methodNotAllowed(res);
  }
  delete(req, res) {
    return this.methodNotAllowed(res);
  }
  patch(req, res) {
    return this.methodNotAllowed(res);
  }

  handler(req, res) {
    const method = req.method.toLowerCase();
    const fun = this[method];
    if (typeof fun !== "function") {
      return this.methodNotAllowed(res);
    }

    if (this.skipAuth.includes(method)) {
      return fun(req, res);
    } else {
      return this.userAuth(req, res, fun);
    }
  }
}
