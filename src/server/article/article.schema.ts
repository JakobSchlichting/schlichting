import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";


export const articles = sqliteTable('articles', {
    id: integer('id').primaryKey(),
    titel: text('title').notNull().unique(),
    description: text('description'),
    link: text('link').notNull(),
    published: integer('published', { mode: 'boolean' }).notNull().default(false),
}, (table) => {
    return {
        titleIdx: uniqueIndex("title_idx").on(table.titel),
    }
});
