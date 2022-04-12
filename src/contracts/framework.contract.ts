//#region Imports

import { IncomingMessage, ServerResponse } from 'http';

//#endregion

/**
 * The interface that represents a contract between the framework and the framework implementation
 */
export interface FrameworkContract<TApp> {
  /**
   * Send the request and response objects to the framework
   *
   * @param app
   * @param request
   * @param response
   */
  sendRequest(
    app: TApp,
    request: IncomingMessage,
    response: ServerResponse,
  ): void;
}