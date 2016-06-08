'use strict';

let domain = require('./domain/sequelize/domain');
let q = require('./util/q');
let partnersService = require('./modules/partners/partners.service')(domain, q);

partnersService.findCarouselImagesByUrl('url').then(function (result) {
	console.log('result', result);
});
