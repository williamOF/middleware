const path = require ('path')
const fs = require ('fs')

const userLog = (req, res, next) => {
    const url = req.query
    const user = req.session.user.name

    const msgLog = ` '${user}: acessou a página :${url} ';`

    const arquivo = path.join(__dirname,'../logs/userLog.txt')
    const userLog = fs.readFileSync(arquivo,'utf-8')

    const addEventLog = userLog + msgLog

    fs.writeFileSync(arquivo,addEventLog)
}

module.exports = userLog