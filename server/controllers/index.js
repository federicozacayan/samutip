const { pool } = require("../db/postgresql")

const getUser = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM authentication.users")
        res.status(200)
        res.json(response.rows)
    } catch (error) {
        res.status(500)
        res.json({ "error": 500 })
        return
    }
}

module.exports = {
    getUser
}