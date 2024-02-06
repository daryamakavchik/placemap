-- CreateTable
CREATE TABLE `Place` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL DEFAULT '',
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Photo` (
    `id` VARCHAR(191) NOT NULL,
    `image_filesize` INTEGER NULL,
    `image_extension` VARCHAR(191) NULL,
    `image_width` INTEGER NULL,
    `image_height` INTEGER NULL,
    `image_id` VARCHAR(191) NULL,
    `place` VARCHAR(191) NULL,

    INDEX `Photo_place_idx`(`place`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_place_fkey` FOREIGN KEY (`place`) REFERENCES `Place`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
