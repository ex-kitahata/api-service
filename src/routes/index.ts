import { Request, Response, NextFunction } from 'express';
import movies from "../db/db.json";
import fs from 'fs';

export const moviesRouter = (req: Request, res: Response) => {
    const { query } = req;
    if (query.id != null) {
        return res.send(JSON.stringify(movies.movies.find((v) => v.id == Number.parseInt(<string>query.id)), null, '    '));
    }
    return res.send(JSON.stringify(movies.movies, null, '    '));
};

export const movieRouter = (req: Request, res: Response) => {
    const { params } = req;
    const { id = 0 } = params;
    return res.send(JSON.stringify(movies.movies.find((v) => v.id == id), null, 10));
};

export const addData = function (req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    var movie = movies.movies.find(v => v.id == body.id);
    if (movie == null) {
        pushData(body);
    } else {
        refreshData(body);
    }
    next();
};

const pushData = function (data: any) {
    movies.movies.push(data);
}

const refreshData = function (data: any) {
    var movie = movies.movies.find(v => v.id == data.id);
    movie.id = <number>data.id;
    movie.name = data.name;
    movie.director = data.director;
    movie.rating = <number>data.rating;
}