import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatabaseDataSource} from '../datasources';
import {Machine, MachineRelations} from '../models';

export class MachineRepository extends DefaultCrudRepository<
  Machine,
  typeof Machine.prototype.id,
  MachineRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Machine, dataSource);
  }
}
