import 'reflect-metadata';
import {interfaces, Container as ContainerMain} from "inversify";
import {container} from "inversify-props";
import {PeliculasContDom} from "~/components/peliculas/domain/container/peliculas-cont-dom";

export class Container {
  private static _instance : Container | null = null
  private readonly _container : interfaces.Container
  private constructor () {
    this._container = ContainerMain.merge(
      container,
      PeliculasContDom.get_actions_container()
    )
  }
  public static get_init_instance () {
    if (this._instance === null) Container._instance = new Container()
    return this._instance!._container
  }
}

Container.get_init_instance()
