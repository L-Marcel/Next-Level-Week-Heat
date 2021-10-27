import { Request, Response } from "express";
import { GetLastThreeMessagesServer } from "../services/GetLastThreeMessagesServer";


class GetLastThreeMessagesController {
  async handle(request: Request, response: Response) {
    const service = new GetLastThreeMessagesServer();
    const result = await service.execute();
    
    return response.json(result);
  };
};

export { GetLastThreeMessagesController };