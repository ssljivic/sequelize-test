'use strict';

module.exports = function(db) {
	return {
		findAllAlbumsWithImages: findAllAlbumsWithImages,
		findOneAlbumWithImages: findOneAlbumWithImages
	};

	function findAllAlbumsWithImages(name) {
		return db.Album.findAll({
			where: {
				name: name
			},
			include: [{
				model: db.Image,
				as: 'images',
				include: [{
					model: db.ImageType,
					as: 'imageType',
					//,
					//where: {
					//	key: 'party'
					//}
				}]
			}],
			order: [
				[{model: db.Image, as: 'images'}, 'index', 'ASC']
			]
			//,
			//subQuery: false
		});
	}

	function findOneAlbumWithImages(name) {
		return db.Album.findOne({
			where: {
				name: name
			},
			include: [{
				model: db.Image,
				as: 'images',
				include: [{
					model: db.ImageType,
					as: 'imageType',
					//,
					//where: {
					//	key: 'party'
					//}
				}]
			}],
			order: [
				[{model: db.Image, as: 'images'}, 'index', 'ASC']
			]
			//,
			//subQuery: false
		});
	}
};
