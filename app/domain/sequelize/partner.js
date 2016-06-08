'use strict';

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Partner', {
		id: {
			field: 'PartnerID',
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		externalUid: {
			field: 'ExternalUID',
			type: DataTypes.STRING,
			allowNull: true
		},
		name: {
			field: 'Name',
			type: DataTypes.STRING,
			allowNull: false
		},
		url: {
			field: 'Url',
			type: DataTypes.STRING,
			allowNull: false
		},
		logoUrl: {
			field: 'LogoUrl',
			type: DataTypes.STRING,
			allowNull: true
		},
		smallLogoUrl: {
			field: 'LogoSmallUrl',
			type: DataTypes.STRING,
			allowNull: true
		},
		marketplaceLogoUrl: {
			field: 'LogoMarketplaceUrl',
			type: DataTypes.STRING,
			allowNull: true
		},
		vendorLogoUrl: {
			field: 'LogoVendorUrl',
			type: DataTypes.STRING,
			allowNull: true
		},
		cssUrl: {
			field: 'CssUrl',
			type: DataTypes.STRING,
			allowNull: true
		},
		vendorUrl: {
			field: 'VendorUrl',
			type: DataTypes.STRING,
			allowNull: true
		},
		active: {
			field: 'IsActive',
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		createdBy: {
			field: 'CreatedBy',
			type: DataTypes.STRING,
			allowNull: true
		},
		modifiedBy: {
			field: 'ModifiedBy',
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Partner',
		timestamps: true,
		createdAt: 'CreatedDate',
		updatedAt: 'ModifiedDate',
		//defaultScope: {
		//	attributes: {
		//		exclude: ['id', 'active', 'createdBy', 'modifiedBy', 'CreatedDate', 'ModifiedDate']
		//	},
		//	where: {
		//		active: true
		//	}
		//},
		classMethods: {
			associate: function (models) {

				models.Partner.hasMany(models.Image, {
					as: 'carouselImages',
					foreignKey: {
						name: 'PartnerID'
					}
				});

			}
		}
	});
};
