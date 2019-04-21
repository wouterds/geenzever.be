import { Request, Response } from 'express';

export default (app: any) => async (
  req: Request,
  res: Response,
): Promise<void> => {
  const actualPage = '/sticker-request';
  const queryParams = { id: req.params.id };

  await app.render(req, res, actualPage, queryParams);
};
