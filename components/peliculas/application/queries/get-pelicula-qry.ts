import {inject, injectable} from "inversify-props";
import {PELICULAS_TYPES} from "~/components/peliculas/infrastructure/types/peliculas-type.inf";
import {PeliculasRepositoryDom} from "~/components/peliculas/domain/repositories/peliculas-repository.dom";
import {PeliculasModelDom} from "~/components/peliculas/domain/models/peliculas-model.dom";
import {Query} from "~/core/domain/useCases/query";


@injectable()
export class GetPeliculaQry extends Query<Promise<PeliculasModelDom>, string> {

  constructor(
    @inject(PELICULAS_TYPES.HTTP_SERVICE)
    private peliculaService:PeliculasRepositoryDom<PeliculasModelDom>
  ) {
    super()
  }

  public async execute (id:string) : Promise<PeliculasModelDom> {
    return await this.peliculaService.retrieve(id)
  }

}
