import { createServerHandler } from "uploadthing/server";
import { uploadRouter } from "~/server/uploadthing_handler";

export const { GET, POST } = createServerHandler({
    router: uploadRouter,
    config: {
        callbackUrl: import.meta.env.UPLOADTHING_CALLBACK_URL,
    },
});
