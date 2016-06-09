'use strict';

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('Album', {
		id: {
			field: 'AlbumID',
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			field: 'Name',
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		description: {
			field: 'Description',
			type: DataTypes.STRING,
			allowNull: false
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
		tableName: 'Album',
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
				models.Album.hasMany(models.Image, {
					as: 'images',
					foreignKey: {
						name: 'AlbumID'
					}
				});
			}
		}
	});
};
