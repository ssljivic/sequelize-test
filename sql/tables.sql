CREATE TABLE "Image" ("ImageID" serial8 NOT NULL,
"AlbumID" int4 NOT NULL,
"ImageTypeID" serial2,
"Index" int2 NOT NULL,
"Url" varchar(150) DEFAULT NULL,
"Title" varchar(50) DEFAULT NULL,
"Text" varchar(512) DEFAULT NULL,
"BackgroundColor" varchar(6) DEFAULT NULL,
"IsActive" bool NOT NULL DEFAULT true,
"CreatedDate" timestamp(0) DEFAULT CURRENT_TIMESTAMP,
"CreatedBy" varchar(50),
"ModifiedDate" timestamp(0) DEFAULT CURRENT_TIMESTAMP,
"ModifiedBy" varchar(50),
PRIMARY KEY ("ImageID")
)
WITHOUT OIDS;

CREATE TABLE "Album" ("AlbumID" serial4 NOT NULL,
"Name" varchar(50) NOT NULL,
"Description" varchar(250) NOT NULL,
"IsActive" bool NOT NULL DEFAULT true,
"CreatedDate" timestamp(0) DEFAULT CURRENT_TIMESTAMP,
"CreatedBy" varchar(50),
"ModifiedDate" timestamp(0) DEFAULT CURRENT_TIMESTAMP,
"ModifiedBy" varchar(50),
PRIMARY KEY ("AlbumID"),
UNIQUE ("Name")
)
WITHOUT OIDS;

CREATE TABLE "ImageType" ("ImageTypeID" serial2 NOT NULL,
"Key" varchar(25) NOT NULL,
"Name" varchar(50) NOT NULL,
"Description" varchar(250),
"IsActive" bool NOT NULL DEFAULT true,
"CreatedDate" timestamp(0) DEFAULT CURRENT_TIMESTAMP,
"CreatedBy" varchar(50),
"ModifiedDate" timestamp(0) DEFAULT CURRENT_TIMESTAMP,
"ModifiedBy" varchar(50),
PRIMARY KEY ("ImageTypeID") ,
UNIQUE ("Key")
)
WITHOUT OIDS;

ALTER TABLE "Image" ADD CONSTRAINT "fk_Image_Album" FOREIGN KEY ("AlbumID") REFERENCES "Album" ("AlbumID") ON DELETE NO ACTION ON UPDATE NO ACTION;ALTER TABLE "Image" ADD CONSTRAINT "fk_Image_ImageType" FOREIGN KEY ("ImageTypeID") REFERENCES "ImageType" ("ImageTypeID");
