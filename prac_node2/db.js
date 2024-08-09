const getUser = (userId, callback) => {
    db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, results[0]);
    });
};

getUser(1, (err, user) => {
    if (err) {
        console.error('사용자 조회 실패:', err);
        return;
    }
    console.log('사용자 정보:', user);
});