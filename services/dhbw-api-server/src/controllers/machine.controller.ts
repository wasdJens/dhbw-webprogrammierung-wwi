import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Machine} from '../models';
import {MachineRepository} from '../repositories';

export class MachineController {
  constructor(
    @repository(MachineRepository)
    public machineRepository : MachineRepository,
  ) {}

  @post('/machines')
  @response(200, {
    description: 'Machine model instance',
    content: {'application/json': {schema: getModelSchemaRef(Machine)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Machine, {
            title: 'NewMachine',
            exclude: ['id'],
          }),
        },
      },
    })
    machine: Omit<Machine, 'id'>,
  ): Promise<Machine> {
    return this.machineRepository.create(machine);
  }

  @get('/machines/count')
  @response(200, {
    description: 'Machine model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Machine) where?: Where<Machine>,
  ): Promise<Count> {
    return this.machineRepository.count(where);
  }

  @get('/machines')
  @response(200, {
    description: 'Array of Machine model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Machine, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Machine) filter?: Filter<Machine>,
  ): Promise<Machine[]> {
    return this.machineRepository.find(filter);
  }

  @patch('/machines')
  @response(200, {
    description: 'Machine PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Machine, {partial: true}),
        },
      },
    })
    machine: Machine,
    @param.where(Machine) where?: Where<Machine>,
  ): Promise<Count> {
    return this.machineRepository.updateAll(machine, where);
  }

  @get('/machines/{id}')
  @response(200, {
    description: 'Machine model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Machine, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Machine, {exclude: 'where'}) filter?: FilterExcludingWhere<Machine>
  ): Promise<Machine> {
    return this.machineRepository.findById(id, filter);
  }

  @patch('/machines/{id}')
  @response(204, {
    description: 'Machine PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Machine, {partial: true}),
        },
      },
    })
    machine: Machine,
  ): Promise<void> {
    await this.machineRepository.updateById(id, machine);
  }

  @put('/machines/{id}')
  @response(204, {
    description: 'Machine PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() machine: Machine,
  ): Promise<void> {
    await this.machineRepository.replaceById(id, machine);
  }

  @del('/machines/{id}')
  @response(204, {
    description: 'Machine DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.machineRepository.deleteById(id);
  }
}
