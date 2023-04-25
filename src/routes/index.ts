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

export const addData = function(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    refreshData(body);
    next();
};

export const refreshData = function(data: {id:number, name:string, director:string, rating:number}){
    var movie = movies.movies.find(v => v.id == data.id);
    if(movie == null){
        movies.movies.push(data);
    }
    else {
        movie.id = <number>data.id;
        movie.name = data.name;
        movie.director = data.director;
        movie.rating = <number>data.rating;
     }
};