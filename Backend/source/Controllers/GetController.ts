import {
  Controller,
  HandlerController,
  ServerEvent
} from '../../library/Interfaces/HandlerController';
import { ValidRoutes } from '../../server/ValidRoutes';
import { CheckAuth } from '../Handlers/GetHandlers/CheckAuth';
import { GetHealth } from '../Handlers/GetHandlers/HelloWorld';

export class GetController extends Controller<ServerEvent> {
  private routeId: ValidRoutes;

  constructor(event: ServerEvent) {
    super(event);
    this.routeId = event.route;
  }

  protected resolve(): HandlerController<ServerEvent> | null {
    switch (this.routeId) {
      case ValidRoutes.Health:
        return new GetHealth(this.trigger);
      case ValidRoutes.CheckAuth:
        return new CheckAuth(this.trigger);
      default:
        return null;
    }
  }
}
