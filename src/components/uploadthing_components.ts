import { generateComponents } from "@uploadthing/solid";
import { type OurFileRouter } from "~/server/uploadthing_handler";

export const { Uploader, UploadButton, UploadDropzone } = generateComponents<OurFileRouter>(import.meta.env.SERVER_BASE_URL);
