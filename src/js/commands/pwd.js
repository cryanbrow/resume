function handlePwd(homeDirReturn) {
    if (homeDirReturn && pwd.join('/') === 'home/user') {
        return '~';
    }
    return '/' + pwd.join('/');
}

var pwd = ['home', 'user']