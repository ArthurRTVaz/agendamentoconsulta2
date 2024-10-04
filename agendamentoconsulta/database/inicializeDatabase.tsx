import { SQLiteDatabase } from 'expo-sqlite';

export async function inicializeDatabase(database: SQLiteDatabase) {
  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT NOT NULL,
      senha TEXT NOT NULL,
      cep TEXT,
      endereco TEXT,
      numero TEXT,
      complemento TEXT,
      telefone TEXT,
      selectedPlan TEXT
    );
  `);
}
