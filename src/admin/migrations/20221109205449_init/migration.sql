-- CreateTable
CREATE TABLE `_Place_images` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_Place_images_AB_unique`(`A`, `B`),
    INDEX `_Place_images_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_Place_images` ADD CONSTRAINT `_Place_images_A_fkey` FOREIGN KEY (`A`) REFERENCES `Photo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Place_images` ADD CONSTRAINT `_Place_images_B_fkey` FOREIGN KEY (`B`) REFERENCES `Place`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
