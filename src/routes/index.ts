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
    const { params } = req;
    const { id = 0, name = "name", director = "director", rating = 0} = params;
    var movie =  movies.movies.find((v)=>v.id==id)
    if(movie != null)
    {
        movie.id = <number>id;
        movie.name = name;
        movie.director = director;
        movie.rating = <number>rating;
        return res.send(movies.movies.find((v)=>v.id==id));
    }

    const jsonData = { id: <number>id, "name": name, "director": director, "rating":  <number>rating };
    movies.movies.push(jsonData);
    return res.send(movies.movies.find((v)=>v.id==id));
};