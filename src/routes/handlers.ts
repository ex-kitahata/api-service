import { Request, Response } from 'express';

interface HelloResponse {
  hello: string;
}

type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = name => ({ hello: name });

export const rootHandler = (_req: Request, res: Response) => {
  let data = {
    "title": 'Hello, Your API is working!!',
    "contents": 'Hello, Your API is working!!'
}
  return res.render("index.ejs", data);
};

export const helloHandler = (req: Request, res: Response) => {
  const { params } = req;
  const { name = 'World' } = params;
  const response = helloBuilder(name);

  return res.json(response);
};