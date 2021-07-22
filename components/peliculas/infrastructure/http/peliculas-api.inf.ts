
import {injectable} from "inversify-props";
import {GenericRequest} from "~/core/infrastructure/generic-request-classes/generic-request";
import {PeliculasRepositoryDom} from "~/components/peliculas/domain/repositories/peliculas-repository.dom";
import {PeliculasModelDom} from "~/components/peliculas/domain/models/peliculas-model.dom";

@injectable()
export class PeliculasApiInf extends GenericRequest<PeliculasModelDom, any> implements PeliculasRepositoryDom<PeliculasModelDom, any> {
  endpoint = '/movie/'
  constructor () {
    super();
  }

}
