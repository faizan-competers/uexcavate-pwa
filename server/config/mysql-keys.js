var port = process.env.PORT || 4200
if(port === 4200) {
    // dev keys
    var keys = {
        host: 'dbdev.uexcavate.com',
        port: '3306',
        user: 'root',
        password: 'gica238',
        database: 'DevuExcavate'
    }
} else {
    // live keys
    var keys = {
        host: '',
        port: '',
        user: '',
        password: '',
        database: '',
        insecureAuth: ''
    }
}

module.exports = keys