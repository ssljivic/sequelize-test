'use strict';

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Image', {
		id: {
			field: 'ImageID',
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		index: {
			field: 'Index',
			type: DataTypes.INTEGER,
			allowNull: true
		},
		url: {
			field: 'Url',
			type: DataTypes.STRING,
			allowNull: true
		},
		title: {
			field: 'Title',
			type: DataTypes.STRING,
			allowNull: true
		},
		text: {
			field: 'Text',
			type: DataTypes.STRING,
			allowNull: true
		},
		color: {
			field: 'BackgroundColor',
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
		tableName: 'Image',
		timestamps: true,
		createdAt: 'CreatedDate',
		updatedAt: 'ModifiedDate',
		defaultScope: {
			attributes: {
				exclude: ['id', 'active', 'createdBy', 'modifiedBy', 'CreatedDate', 'ModifiedDate']
			},
			where: {
				active: true
			}
		},
		classMethods: {
			associate: function (models) {
				models.Image.belongsTo(models.ImageType, {
					foreignKey: {
						name: 'ImageTypeID'
					},
					as: 'imageType'
				});

				models.Image.belongsTo(models.Album, {
					foreignKey: {
						name: 'AlbumID'
					},
					as: 'album'
				});
			}
		}
	});
};
