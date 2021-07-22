import {ID} from "~/core/domain/uuid";
import {IRequetsRepository} from "~/core/domain/repositories/requets-repository";
import {IPaginateData} from "~/core/domain/models/paginate-data";

export interface PeliculasRepositoryDom<Result = void, Param = void> extends IRequetsRepository<Result, Param>{
}
