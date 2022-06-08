-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "topCommentId" INTEGER;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_topCommentId_fkey" FOREIGN KEY ("topCommentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;