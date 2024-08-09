import { spawn } from 'child_process';

const process = spawn('python3', ['./test.py']);
process.stdout.on('data', (data) => {
    console.log(data.toString());
})

process.stderr.on('data', (data) => {
    console.error(data.toString());
})