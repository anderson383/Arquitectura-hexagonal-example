import {UseCase} from "~/core/domain/useCases/use-case";


export abstract class Command extends UseCase {
  readonly: false;
}
