'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    const dataList = {
      list: [
        {id: 5, title: 'this is news 1', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539776659304&di=32065a595af320eb77f67abfeb5a6288&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f01755fa141232f875a1320d4c98.jpg%401280w_1l_2o_100sh.png'},
        {id: 1, title: 'this is news 1', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539775972208&di=632883158eba80f40a51554526b534aa&imgtype=0&src=http%3A%2F%2Fwww.szhuodong.com%2Fuploadfile%2F2014%2F1208%2F20141208031324680.jpg'},
        {id: 2, title: 'this is news 1', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539776164105&di=1143d8722bb997d26e82e1c01e48357a&imgtype=0&src=http%3A%2F%2Fs9.knowsky.com%2Fbizhi%2Fl%2F85001-90000%2F20095309841149689793.jpg'},
        {id: 3, title: 'this is news 1', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539776196766&di=5d33c8e21dc8baed04071f4c9f9669f0&imgtype=0&src=http%3A%2F%2Fwww.sinaimg.cn%2Fdy%2Fslidenews%2F21_img%2F2014_48%2F1604_3874998_132327.jpg'},
        {id: 4, title: 'this is news 1', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539776220095&di=7738d1c9357d3da782dedad8f9b4b399&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F16%2F12%2F24%2F4873dad61bf5089d6da5d1734022b043.jpg'},
        {id: 5, title: 'this is news 1', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539776659304&di=32065a595af320eb77f67abfeb5a6288&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f01755fa141232f875a1320d4c98.jpg%401280w_1l_2o_100sh.png'},
        {id: 6, title: 'this is news 1', url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539775972208&di=632883158eba80f40a51554526b534aa&imgtype=0&src=http%3A%2F%2Fwww.szhuodong.com%2Fuploadfile%2F2014%2F1208%2F20141208031324680.jpg'},
      ]
    };
    await this.ctx.render('home/index.tpl', dataList);
    // this.ctx.body = 'hello word';
  }
}

module.exports = HomeController;
