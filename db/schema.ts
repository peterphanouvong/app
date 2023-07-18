// import { InferModel } from "drizzle-orm";
// import {
//   sqliteTable,
//   text,
//   integer,
//   uniqueIndex,
// } from "drizzle-orm/sqlite-core";

// export const countries = sqliteTable(
//   "countries",
//   {
//     id: integer("id").primaryKey(),
//     name: text("name"),
//   },
//   (countries) => ({
//     nameIdx: uniqueIndex("nameIdx").on(countries.name),
//   })
// );

// export const cities = sqliteTable("cities", {
//   id: integer("id").primaryKey(),
//   name: text("name"),
//   countryId: integer("country_id").references(() => countries.id),
// });

// export const users = sqliteTable("users", {
//   id: text("id").primaryKey(),
//   firstName: text("first_name"),
//   lastName: text("last_name"),
//   email: text("email"),
// });

// export type Country = InferModel<typeof countries, "select">;
