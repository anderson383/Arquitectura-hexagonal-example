import { Vue, Component, Ref } from 'vue-property-decorator'
import {injectable, inject} from "inversify-props";
import {PELICULAS_TYPES} from "~/components/peliculas/infrastructure/types/peliculas-type.inf";
import {
  IPeliculasPaginateDataDTO,
  PeliculasModelDom
} from "~/components/peliculas/domain/models/peliculas-model.dom";
import {IPaginateData} from "~/core/domain/models/paginate-data";
import {GetPeliculaQry} from "~/components/peliculas/application/queries/get-pelicula-qry";

@Component
@injectable()
export default class PeliculasList extends Vue {

  @inject(PELICULAS_TYPES.GET_RETRIEVE_PELICULAS) peliculaService : GetPeliculaQry

  public peliculaData : PeliculasModelDom = {}

  async created () {
    await this.getDetallePelicula(this.$route.params.retrieve)
  }

  public async getDetallePelicula (id:string) : Promise<void> {
    this.peliculaData = await this.peliculaService.execute(id)
  }
}
