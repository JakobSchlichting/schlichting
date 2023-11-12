/// <reference types="vite/client"

interface ImportMetaEnv {
    readonly UPLOADTHING_SECRET: string;
    readonly UPLOADTHING_APP_ID: string;
    readonly UPLOADTHING_CALLBACK_URL: string;
    readonly SERVER_BASE_URL: string;
    readonly DATABASE_URL:string;
    readonly DATABASE_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
