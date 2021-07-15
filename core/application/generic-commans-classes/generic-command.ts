
import {ID} from "~/core/domain/uuid";
import {IRequetsRepository} from "~/core/domain/repositories/requets-repository";
import {LoggerManager} from "typescript-logger";


export class GenericCommand {

  private logg = LoggerManager.create('Modulo de usuarios')
  public readonly repositoryService : IRequetsRepository
  public _model:any = null

  /**
   * Obtener genericamente un listado de un modulo cualquiera.
   *
   * @returns Un array o un objecto dependiendo del endpoint.
   * */
  async list () {
    this.logg.info('Listando', this)
    return await this.repositoryService.list('', {})
  }

  async create (data:any) {
    this.logg.info('Creando Usuario')
    await this.repositoryService.create(data)
  }

  async retrieve (id: ID) {
    this.logg.info('Recogiendo un usuario')
    return await this.repositoryService.retrieve(id)
  }

  async update (id: ID, data: any) {
    this.logg.info('Actualizando user')
    await this.repositoryService.update(id, data)
  }
}
