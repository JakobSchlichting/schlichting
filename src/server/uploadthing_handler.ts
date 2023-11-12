import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const uploadRouter = {
    article: f({
        "text/markdown": {
            maxFileSize: "4MB",
        }
    }).onUploadError((errorData) => {
        console.error("Uploathing an error occured:");
        console.error(errorData);
    }).onUploadComplete(({ file, metadata }) => {
        console.log("File upload complete:");
        console.log(file);
        console.log("Metadata:");
        console.log(metadata);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
