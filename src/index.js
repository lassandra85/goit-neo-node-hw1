/* import os from 'node:os';
import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url'

const fullPath = '/home/user/documents/report.txt';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('Директорія:', path.dirname(fullPath));
console.log('Назва файлу:', path.basename(fullPath));
console.log('Розширення:', path.extname(fullPath));


console.log('Платформа:', os.platform());
console.log('Архітектура:', os.arch());
console.log('Домашня тека користувача:', os.homedir());
console.log('Кількість процесорів:', os.cpus().length);
console.log('Загальний обсяг пам’яті (МБ):', Math.round(os.totalmem() / 1024 / 1024));
console.log('Тимчасова директорія:', os.tmpdir());


console.log(process.argv);
console.log(process.version);
console.log('Поточна робоча тека:', process.cwd());

console.log('Поточний файл', __filename)
console.log('Поточна тека', __dirname) */

import fs from 'node:fs/promises';


/* 
try {
  const data = await fs.readFile('example.txt', 'utf8');
  console.log('Вміст файлу:', data);
} catch (error) {
  console.error('Помилка читання файлу:', error.message);
} */

/*  try {
  const files = await fs.readdir('.');
  console.log('Файли в поточній директорії:', files);
} catch (error) {
  console.error('Помилка читання директорії:', error.message);
}  */


/*   try {
  const stats = await fs.stat('index.js');
    console.log('Розмір (байти):', stats.size);
    console.log('Створено:', stats.birthtime);
    console.log('Змінено:', stats.mtime);
    console.log('Це файл?', stats.isFile());
    console.log('Це директорія?', stats.isDirectory());
} catch (error) {
  console.error('Помилка отримання статистики:', error.message);
} */

  import os from 'node:os';
import process from 'node:process';

// Отримуємо шлях з аргументів
const targetPath = process.argv[2];

// Перевіряємо, чи передано аргумент
if (!targetPath) {
  console.error('Помилка: не вказано шлях до директорії');
  console.log('Використання: node analyzer.js <шлях>');
  process.exit(1);
}

// Виводимо інформацію про систему
console.log('=== Аналізатор директорій ===');
console.log(`Система: ${os.platform()} (${os.arch()})`);
console.log(`Аналіз директорії: ${targetPath}\\n`);



