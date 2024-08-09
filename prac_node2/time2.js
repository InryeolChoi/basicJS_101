const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const runTimer = async () => {
    try {
        await delay(2000);
        console.log('타이머가 완료되었습니다.');
    } catch (err) {
        console.error(`타이머 오류 : ${err}`)
    }
}