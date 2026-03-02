export class APIService {
  constructor(entity) {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL;
    this.entity = entity;

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.patch = this.patch.bind(this);
    this.delete = this.delete.bind(this);
    this.request = this.request.bind(this);
    this.buildUrl = this.buildUrl.bind(this);
  }

  buildUrl(id = "") {
    let url = `${this.baseUrl}/${this.entity}`;
    if (id) url += `/${id}`;
    return url;
  }

  async request(url, method, data) {
    const options = {
      method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      let error = {};
      try {
        error = await response.json();
      } catch (_) {}

      throw {
        status: response.status,
        message: error.message || "API request failed",
      };
    }

    return response.json();
  }

  get(id = "") {
    return this.request(this.buildUrl(id), "GET");
  }

  post(data) {
    return this.request(this.buildUrl(), "POST", data);
  }

  put(id, data) {
    return this.request(this.buildUrl(id), "PUT", data);
  }

  patch(id, data) {
    return this.request(this.buildUrl(id), "PATCH", data);
  }

  delete(id) {
    return this.request(this.buildUrl(id), "DELETE");
  }
}
