import os from 'node:os';
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
console.log('Поточна тека', __dirname)



