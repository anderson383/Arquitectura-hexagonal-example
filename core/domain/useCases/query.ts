import {UseCase} from "~/core/domain/useCases/use-case";

export abstract class Query<Result = void, Params=void> extends UseCase<Result, Params> {
  readonly: true;
}

