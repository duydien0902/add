'use strict'

const queryBuilder = require("../config/database");

class FilmService {
    static async getList(req) {
        try {
            let data = await queryBuilder('movie_type').orderBy('MovieId', 'DESC').select();
            return data;
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}

module.exports = FilmService;