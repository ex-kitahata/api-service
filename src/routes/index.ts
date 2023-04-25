import { Request, Response, NextFunction } from 'express';
import movies from "../db/db.json";

const title = "TypeScript Api";

export const moviesRouter = (req: Request, res: Response) => {
    let data = {
        "title": title,
        "contents": JSON.stringify(movies.movies, null, 10),
    }
    return res.render("movies.ejs", data);
};

export const movieRouter = (req: Request, res: Response) => {
    const { params } = req;
    const { id = 0 } = params;
    let data = {
        "title": title,
        "contents": JSON.stringify(movies.movies.find((v) => v.id == id), null, 10)
    }
    return res.render("index.ejs", data);
};

export const addData = function (req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    var movie = movies.movies.find(v => v.id == body.id);
    if (movie == null) {
        movies.movies.push(body);
    } else {
        movie.id = <number>body.id;
        movie.name = body.name;
        movie.director = body.director;
        movie.rating = <number>body.rating;
    }
    next();
};