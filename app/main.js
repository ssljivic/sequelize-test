'use strict';

let async = require('async');
let domain = require('./domain/sequelize/domain');
let service = require('./service')(domain);

async.series([
	findAllAlbumsWithImages,
	findOneAlbumWithImages
]);

function findAllAlbumsWithImages(done) {
	console.log('---------- findAllAlbumsWithImages');
	return service.findAllAlbumsWithImages('summer 2016').then(function (result) {
		console.log('SQL results:', result);
		done(null, 'done');
	});
}

function findOneAlbumWithImages(done) {
	console.log('---------- findOneAlbumWithImages');
	return service.findOneAlbumWithImages('summer 2016').then(function (result) {
		console.log('SQL results:', result);
		done(null, 'done');
	});
}
