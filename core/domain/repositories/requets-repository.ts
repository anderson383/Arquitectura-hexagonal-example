import {ID} from "~/core/domain/uuid";




export interface IRequetsRepository<Result = void, params = void> {
  list (params:string, filters:any) : Promise<Result>
  retrieve ( id: ID ): Promise<Result>
  create ( data: params ): Promise<void>
  update (id: ID, data: params): Promise<void>
  delete (id: ID): Promise<void>
}
