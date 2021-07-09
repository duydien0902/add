'use strict'

const queryBuilder = require("../config/database");

class CinemaService {
    static async getList(req) {
        try {
            let data = await queryBuilder('cinema').orderBy('CinemaId', 'DESC').select();
            return data;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

module.exports = CinemaService;