import { Request, Response, NextFunction } from 'express';
import movies from "../db/db.json";

export const moviesRouter = (req: Request, res: Response) => {
    return res.send(JSON.stringify(movies.movies, null, 10));
};

export const movieRouter = (req: Request, res: Response) => {
    const { params } = req;
    const { id = 0 } = params;
    return res.send(movies.movies.find((v)=>v.id==id));
};

export const addData = function(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    var movie =  movies.movies.find((v)=>v.id == body.id)
    if(movie != null)
    {
        movie.id = <number>body.id;
        movie.name = body.name;
        movie.director = body.director;
        movie.rating = <number>body.rating;
        console.log(`更新\n${req.body}`);
        next();
    }

    console.log(`新規追加\n${req.body}`);

    movies.movies.push(body);
    next();
};