import {inject, injectable} from "inversify-props";

import {PELICULAS_TYPES} from "~/components/peliculas/infrastructure/types/peliculas-type.inf";
import {PeliculasRepositoryDom} from "~/components/peliculas/domain/repositories/peliculas-repository.dom";
import {
  IPeliculasPaginateDataDTO,
  PeliculasModelDom
} from "~/components/peliculas/domain/models/peliculas-model.dom";
import {IPaginateData} from "~/core/domain/models/paginate-data";


@injectable()
export class PeliculasQueriesApp {

  @inject(PELICULAS_TYPES.HTTP_SERVICE) readonly repositoryService : PeliculasRepositoryDom

  public async getAll (filters: IPaginateData) : Promise<IPeliculasPaginateDataDTO> {
    const { page, results, total_pages, total_results } : any = await this.repositoryService.list('popular', filters)
    return {
      page,
      results,
      total_pages,
      total_results
    }
  }

  public async getRetrieve (id:string) : Promise<PeliculasModelDom> {
    return  await this.repositoryService.retrieve(id)
  }
}
