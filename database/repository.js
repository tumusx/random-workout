import { openDatabase } from "react-native-sqlite-storage";

export const getDatabaseConnection = async () => {
    const db = openDatabase({ name: "workout.db" });
    return db;
};

export const createTable = async () => {
    const db = await getDatabaseConnection();
    const query = 'CREATE TABLE IF NOT EXISTS workout (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, exercices TEXT)';
    await db.executeSql(query);
};