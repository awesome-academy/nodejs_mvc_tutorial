import { DataSource } from "typeorm";
import { dbConfig } from "./config/db.config";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: dbConfig.HOST || "localhost",
  port: parseInt(dbConfig.DB || "3306"),
  username: dbConfig.USER || "root",
  password: dbConfig.PASS || "",
  database: dbConfig.USERNAME || "test",
  entities: ["src/models/database/*.ts"],
  migrations: ["src/migrations/*.ts"],
  logging: dbConfig.logging,
  synchronize: dbConfig.synchronize,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });
