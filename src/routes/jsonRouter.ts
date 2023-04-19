import { Request, Response } from 'express';

export const jsonRouter = (req: Request, res: Response) => {
    const { params } = req;
    const { name = "名前", id = 0 } = params;
    var jsonText: string = `{"name": ${name},"id": ${id}}`;
    const obj = JSON.parse(JSON.stringify(jsonText));
   
    return res.render('json',{ title: 'json Api', text: obj});
};