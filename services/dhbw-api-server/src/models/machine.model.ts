import {Entity, model, property} from '@loopback/repository';

@model()
export class Machine extends Entity {
  @property({id: true}) id: string

  @property({
    type: 'string',
    required: true,
  })
  serialNumber: string;

  @property({
    type: 'string',
  })
  label?: string;


  constructor(data?: Partial<Machine>) {
    super(data);
  }
}

export interface MachineRelations {
  // describe navigational properties here
}

export type MachineWithRelations = Machine & MachineRelations;
