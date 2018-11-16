'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    ctx.render('show_ndex.ejs', {})
  }
}

module.exports = HomeController;
