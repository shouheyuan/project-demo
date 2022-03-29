import axios from "axios";
class apiRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //   这里token
        Authorization: "token",
      },
    };
    return config;
  }

  destroy(url) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      // console.log(this.queue);
    }
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        this.queue[url] = true;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res) => {
        //  下载
        if (res.config.responseType === "arraybuffer") {
          const { data, headers } = res;
          return { data, headers };
        }
        this.destroy(url);
        const {
          data: { code, data, message },
        } = res;
        if (code === 200) {
          return data;
        } else {
          return Promise.reject(new Error(message));
        }
      },
      (error) => {
        console.error("请求错误", error);
      }
    );
  }

  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url, options.loading);
    return instance(options);
  }
}

export default apiRequest;
