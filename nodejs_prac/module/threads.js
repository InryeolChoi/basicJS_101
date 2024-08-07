import { Worker, isMainThread, parentPort } from 'worker_threads';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', message => console.log(`from worker ${message}`))
    worker.on('exit', () => console.log(`worker exit`))
    worker.postMessage('ping');
} else {
    
}