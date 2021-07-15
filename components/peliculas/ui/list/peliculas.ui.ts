import { Vue, Component, Ref } from 'vue-property-decorator'
import {injectable, inject} from "inversify-props";
import {PELICULAS_TYPES} from "~/components/peliculas/infrastructure/types/peliculas-type.inf";
import {PeliculasQueriesApp} from "~/components/peliculas/application/queries/peliculas-queries.app";
import {
  IPeliculasPaginateDataDTO,
  PeliculasModelDom
} from "~/components/peliculas/domain/models/peliculas-model.dom";
import {IPaginateData} from "~/core/domain/models/paginate-data";

@Component
@injectable()
export default class PeliculasList extends Vue {

  @inject(PELICULAS_TYPES.QUERIES) peliculaService : PeliculasQueriesApp

  public paginateData: IPaginateData = { total_pages: 0, total_results: 0, page: 1 }
  public listadoPeliculas : Array<PeliculasModelDom> = []

  async created () {
    await this.getAllPeliculas({page: this.paginateData.page})
  }

  public async getAllPeliculas (filters:IPaginateData) : Promise<void> {
    let { results, total_results, page, total_pages } = await this.peliculaService.getAll(filters)
    this.listadoPeliculas = results
    this.paginateData = { total_results, page, total_pages }
  }

  public async paginatePage (data:number) {
    await this.getAllPeliculas({page: data})
  }
}
