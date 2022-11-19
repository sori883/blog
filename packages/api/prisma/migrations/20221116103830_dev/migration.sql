-- DropForeignKey
ALTER TABLE `Article` DROP FOREIGN KEY `Article_imageId_fkey`;

-- AlterTable
ALTER TABLE `Article` MODIFY `imageId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Image`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
