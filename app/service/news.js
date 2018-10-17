// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    // read config
    const {serverUrl, pageSize} = this.config.news;
    // use build-in http client to GET hacker-news api
    let res = await this.ctx.curl(`${serverUrl}/api/banners`, {
      dataType: 'json',
      timeout: 3000,
    });
    return res.data
  }
}

module.exports = NewsService;
