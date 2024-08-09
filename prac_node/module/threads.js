import { Worker, isMainThread, parentPort } from 'worker_threads';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

if (isMainThread) {
    // 쓰레드를 생성
    const worker = new Worker(__filename);

    // 쓰레드에서 메시지를 받음.
    worker.on('message', message => console.log(`from worker ${message}`))
    
    // 쓰레드 종료
    worker.on('exit', () => console.log(`worker exit`))

    // 쓰레드로 메시지를 보냄.
    worker.postMessage('ping');
} else {
    // 부모 스레드에서 메세지 받기
    parentPort.on('message', (value) => {
        console.log(`from parent ${value}`);
        parentPort.postMessage('pong');
        parentPort.close();
    })
}

// 실행 순서
// 1. 메인 스레드에서 워커 스레드로 ‘ping’ 메세지를 보냅니다.
// 2. 워커 스레드는 ‘ping’ 메세지를 받고 “from parent ping”을 출력한 후 ‘pong’ 메세지를 메인 스레드로 보냅니다.
// 3. 메인 스레드는 ‘pong’ 메세지를 받고 “from worker pong”을 출력합니다.
// 4. 워커 스레드는 parentPort.close()를 호출하여 종료되고, 메인 스레드는 “worker exit”을 출력합니다.
