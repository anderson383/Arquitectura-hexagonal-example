import {container} from "inversify-props";
import {PeliculasApiInf} from "~/components/peliculas/infrastructure/http/peliculas-api.inf";
import {PELICULAS_TYPES} from "~/components/peliculas/infrastructure/types/peliculas-type.inf";
import {PeliculasQueriesApp} from "~/components/peliculas/application/queries/peliculas-queries.app";


export class PeliculasContDom {
  /**
   * @description Obtiene las uniones del contenedor del modulo de peliculas
   * @return container
   */
  public static get_actions_container () {
    container.bind<PeliculasQueriesApp>(PELICULAS_TYPES.QUERIES).to(PeliculasQueriesApp).inSingletonScope()
    container.bind<PeliculasApiInf>(PELICULAS_TYPES.HTTP_SERVICE).to(PeliculasApiInf).inSingletonScope()
    return container
  }
}
