//#region Imports

import { IncomingMessage, ServerResponse } from 'http';
import type { Server } from 'hapi';
import { FrameworkContract } from '../contracts';

//#endregion

/**
 * The framework that forwards requests to hapi handler
 */
export class HapiFramework implements FrameworkContract<Server> {
  /**
   * @inheritDoc
   */
  public sendRequest(
    app: Server,
    request: IncomingMessage,
    response: ServerResponse,
  ): void {
    const httpServer = app.listener || app.connections[0]?.server;

    (httpServer as any)._events.request(request, response);
  }
}
