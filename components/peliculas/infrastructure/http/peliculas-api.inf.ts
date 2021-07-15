
import {injectable} from "inversify-props";
import {GenericRequest} from "~/core/infrastructure/generic-request-classes/generic-request";
import {PeliculasRepositoryDom} from "~/components/peliculas/domain/repositories/peliculas-repository.dom";

@injectable()
export class PeliculasApiInf extends GenericRequest implements PeliculasRepositoryDom {
  endpoint = '/movie/'
  constructor () {
    super();
  }

}
