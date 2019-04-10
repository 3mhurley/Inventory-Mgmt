// Export MySQL creds from .env
const un = process.env.SQL_USER;
const pw = process.env.SQL_PASSWORD;

module.exports = {
    un: un,
    pw: pw,
}