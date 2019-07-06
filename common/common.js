const getProfile = () => {
    return process.env.NODE_ENV ? process.env.NODE_ENV : 'develop';
};

exports.get = (param) => {
    const config = require(`../config/${getProfile()}`);
    const keys = param.split('.');
    let curr = config;
    for (const key of keys) {
        if (curr.hasOwnProperty(key)) {
            curr = curr[key];
        } else {
            return new Error('속성이 없습니다.');
        }
    }

    return curr;
};