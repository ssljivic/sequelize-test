'use strict';

module.exports = function (sequelize, DataTypes) {
	return sequelize.define('ImageType', {
		id: {
			field: 'ImageTypeID',
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
			allowNull: true
		},
		key: {
			field: 'Key',
			type: DataTypes.STRING,
			allowNull: true
		},
		description: {
			field: 'Description',
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
		tableName: 'ImageType',
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
		//}
	});
};

