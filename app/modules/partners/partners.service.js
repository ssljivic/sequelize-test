'use strict';

const DI = ['domain', 'util/q'];
/**
 *
 * Partners service
 *
 *  db
 * @returns {{findAll: findAll, create: create, update: update, findByUrl: findByUrl, findById: findById, findPartnerWithAppCategoriesAndSubCategoriesByUrl: findPartnerWithAppCategoriesAndSubCategoriesByUrl}}
 */
function factory(db, q) {
	return {
		findAll: findAll,
		create: create,
		update: update,
		findByUrl: findByUrl,
		findById: findById,
		findPartnerWithAppCategoriesByUrl: findPartnerWithAppCategoriesByUrl,
		findCarouselImagesByUrl: findCarouselImagesByUrl
	};

	/**
	 *
	 * Returns all partner records from the database.
	 *
	 * @returns {*}
	 */
	function findAll() {
		return db.Partner.findAll();
	}

	/**
	 *
	 * Returns partner record from the database by the url.
	 *
	 * @param {Object} url
	 * @returns {*}
	 */
	function findByUrl(url) {
		return db.Partner.findOne({
			where: {
				url: trimProtocol(url)
			}
		});
	}

	/**
	 * Returns partner record from the database by the id.
	 *
	 * @param {Object} id
	 * @returns {*}
	 */
	function findById(id) {
		return db.Partner.findOne({
			where: {
				id: id
			}
		});
	}

	/**
	 *
	 * Creates partner in the database.
	 *
	 * @param {Object} partner
	 * @returns {partner}
	 */
	function create(partner) {
		return db.Partner.create(partner);
	}

	/**
	 *
	 * Updates partner in the database.
	 *
	 * @param {Object} id
	 * @param {Object} partner
	 * @returns {*}
	 */
	function update(id, partner) {
		return db.Partner.update({id: id}, partner);
	}

	/**
	 *
	 * Returns all AppCategories with all subcategories by partner url
	 *
	 * @param {Object} url
	 * @returns {*}
	 */
	function findPartnerWithAppCategoriesByUrl(url) {
		let deferred = q.defer();

		db.Partner.findAll({
			where: {
				url: trimProtocol(url)
			},
			include: [{
				model: db.ApplicationCategory,
				as: 'appCategory',
				//attributes: {
				//	exclude: ['id']
				//},
				through: {
					attributes: []
				},
				include: [{
					model: db.ApplicationCategory,
					as: 'appSubcategory'
				}]
			}],
			order: [
				[db.sequelize.literal('"appCategory.PartnerApplicationCategory.categoryIndex"'), 'ASC'],
				[db.sequelize.literal('"appCategory.appSubcategory.name"'), 'ASC']
			]
		}).then(function (data) {
			deferred.resolve(data[0]);
		});

		return deferred.promise;
	}

	/**
	 * Returns all CarouselImages by partner url
	 * @param {Object} url
	 * @returns {Object} promise object
	 */
	function findCarouselImagesByUrl(url) {
		return db.Partner.findAll({
			where: {
				url: trimProtocol(url),
				active: true
			},
			attributes: [],
			include: [{
				model: db.Image,
				as: 'carouselImages',
				attributes: {
					exclude: ['id', 'active', 'createdBy', 'modifiedBy', 'CreatedDate', 'ModifiedDate']
				},
				where: {
					active: true
				},
				include: [{
					model: db.ImageType,
					as: 'imageType',
					attributes: {
						exclude: ['id', 'active', 'createdBy', 'modifiedBy', 'CreatedDate', 'ModifiedDate']
					},
					where: {
						active: true
					}
					//,
					//where: {
					//	key: 'home-carousel'
					//}
				}]
			}],
			order: [
				[{model: db.Image, as: 'carouselImages'}, 'slideIndex', 'ASC']
			]
			//,
			//subQuery: false
		});
	}

	/**
	 * Trims the http:// or https:// protocol from the URL
	 *
	 * @param {Object} url
	 * @returns {XML|string}
	 */
	function trimProtocol(url) {
		return url.replace('http://', '').replace('https://', '');
	}
}

module.exports = factory;
module.exports['@singleton'] = true;
module.exports['@require'] = DI;
