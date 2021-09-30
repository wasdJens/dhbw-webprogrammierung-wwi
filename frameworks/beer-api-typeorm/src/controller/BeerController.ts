import { getRepository } from "typeorm";
import { Beer } from "../entity/Beer";
import { NextFunction, Request, Response } from "express";

export class BeerController {
  private beerRepository = getRepository(Beer);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.beerRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.beerRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const beers = await this.beerRepository.find({
      name: request.body.name
    });
    if (beers.length > 0) {
      response.statusCode = 400;
      response.send('Beer already exists!')
    } else {
      return this.beerRepository.save(request.body);
    }
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const beerToRemove = await this.beerRepository.findOne(request.params.id);
    await this.beerRepository.remove(beerToRemove);
  }
}
