import {$axios} from "~/utils/api";
import {ID} from "~/core/domain/uuid";
import {IRequetsRepository} from "~/core/domain/repositories/requets-repository";
import {AxiosRequest} from "~/core/infrastructure/request-axios";
import {FilteringData} from "~/utils/filtering-data";

export class GenericRequest<Result = void, Params = void> implements IRequetsRepository<Result, Params>  {
  endpoint = ''
  private axiosInstance = new AxiosRequest()

  get getAxiosInstance () {
    return this.axiosInstance
  }

  public async list(params: string, queryParams:any): Promise<Result> {
    let filters:string = FilteringData(queryParams)
    return await this.axiosInstance.get(`${this.endpoint}${params}${filters}`)
  }

  public async retrieve(id: ID): Promise<Result> {
    return  await this.axiosInstance.get(this.endpoint + '/' + id)
  }

  public async create(data: Params): Promise<void> {
    await this.axiosInstance.post(this.endpoint, data)
  }

  public async update(id: ID, data: Params): Promise<void> {
    await this.axiosInstance.put(this.endpoint + '/' + id, data)
  }

  public async delete(id: ID) : Promise<void> {
    console.log('delete')
  }

}
