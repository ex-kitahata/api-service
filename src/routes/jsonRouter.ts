import { Request, Response } from 'express';

export const jsonRouter = (req: Request, res: Response) => {
    const { params } = req;
    const { name = "名前", id = 0 } = params;
    return res.json(
        {
            name: name,
            id: id
        }
    );
};