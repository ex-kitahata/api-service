import { Request, Response } from 'express';
import movies from "../db/db.json";

export const moviesRouter = (req: Request, res: Response) => {
    return res.send(JSON.stringify(movies.movies));
};

export const movieRouter = (req: Request, res: Response) => {
    const { params } = req;
    const { id = 0 } = params;
    return res.send(movies.movies.find((v)=>v.id==id));
};