

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



