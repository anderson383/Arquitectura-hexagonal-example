import {container} from "inversify-props";
import {PeliculasApiInf} from "~/components/peliculas/infrastructure/http/peliculas-api.inf";
import {PELICULAS_TYPES} from "~/components/peliculas/infrastructure/types/peliculas-type.inf";
import {GetPeliculasQry} from "~/components/peliculas/application/queries/get-peliculas-qry";
import {GetPeliculaQry} from "~/components/peliculas/application/queries/get-pelicula-qry";


export class PeliculasContDom {
  /**
   * @description Obtiene las uniones del contenedor del modulo de peliculas
   * @return container
   */
  public static get_actions_container () {
    container.bind(PELICULAS_TYPES.GET_ALL_PELICULAS).to(GetPeliculasQry).inSingletonScope()
    container.bind<GetPeliculaQry>(PELICULAS_TYPES.GET_RETRIEVE_PELICULAS).to(GetPeliculaQry).inSingletonScope()
    container.bind<PeliculasApiInf>(PELICULAS_TYPES.HTTP_SERVICE).to(PeliculasApiInf).inSingletonScope()
    return container
  }
}
