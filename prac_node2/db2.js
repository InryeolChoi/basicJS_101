const queryAsync = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

// 사용 예시
const getUser = async (userId) => {
    try {
        const results = await queryAsync('SELECT * FROM users WHERE id = ?', [userId]);
        console.log('사용자 정보:', results[0]);
    } catch (err) {
        console.error('사용자 조회 실패:', err);
    }
}