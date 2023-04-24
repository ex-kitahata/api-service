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
    var movie = movies.movies.find(v => v.id == body.id);
    if(movie == null){
        movies.movies.push(body);
    }
    else {
        movie = JSON.parse(body);
     }
    next();
};