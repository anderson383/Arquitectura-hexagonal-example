import {inject, injectable} from "inversify-props";
import {PELICULAS_TYPES} from "~/components/peliculas/infrastructure/types/peliculas-type.inf";
import {PeliculasRepositoryDom} from "~/components/peliculas/domain/repositories/peliculas-repository.dom";
import {IPeliculasPaginateDataDTO, PeliculasModelDom} from "~/components/peliculas/domain/models/peliculas-model.dom";
import {Query} from "~/core/domain/useCases/query";


@injectable()
export class GetPeliculasQry extends Query<Promise<IPeliculasPaginateDataDTO>, any> {

  constructor(
    @inject(PELICULAS_TYPES.HTTP_SERVICE)
    readonly repositoryService:PeliculasRepositoryDom<IPeliculasPaginateDataDTO>
  ) {
    super()
  }

  public async execute (filters?:any) : Promise<IPeliculasPaginateDataDTO> {
    return await this.repositoryService.list('popular', filters)
  }
}
