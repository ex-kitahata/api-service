import { Request, Response } from 'express';
import movies from "../db/db.json";

export const moviesRouter = (req: Request, res: Response) => {
    return res.send(JSON.stringify(movies.movies, null, 10));
};

export const movieRouter = (req: Request, res: Response) => {
    const { params } = req;
    const { id = 0 } = params;
    return res.send(movies.movies.find((v)=>v.id==id));
};

export const addData = (req: Request, res: Response) => {
    const { body } = req;
    var movie =  movies.movies.find((v)=>v.id == body.id)
    if(movie != null)
    {
        movie.id = <number>body.id;
        movie.name = body.name;
        movie.director = body.director;
        movie.rating = <number>body.rating;
        return res.send(movies.movies.find((v)=>v.id == body.id));
    }

    movies.movies.push(body);
    return res.send(JSON.stringify(movies.movies, null, 10));
};