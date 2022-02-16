import {
  AlbAdapter,
  ApiGatewayV1Adapter,
  ApiGatewayV2Adapter,
} from '../../../../src/v2/adapters/aws';
import {
  createAlbEvent,
  createAlbEventWithMultiValueHeaders,
} from './alb-event';
import { createApiGatewayV1 } from './api-gateway-v1';
import { createApiGatewayV2 } from './api-gateway-v2';

export const allAWSEvents: Array<[string, any]> = [
  ['fake-to-test-undefined-event', undefined],
  [
    AlbAdapter.name,
    createAlbEvent('POST', '/users', { name: 'potato with banana' }),
  ],
  [
    AlbAdapter.name,
    createAlbEventWithMultiValueHeaders('PUT', '/users', { name: 'batata' }),
  ],
  [AlbAdapter.name, createAlbEvent('GET', '/users')],
  [AlbAdapter.name, createAlbEventWithMultiValueHeaders('GET', '/users')],
  [
    ApiGatewayV1Adapter.name,
    createApiGatewayV1('POST', '/users', { name: 'Fake' }),
  ],
  [
    ApiGatewayV1Adapter.name,
    createApiGatewayV1('PUT', '/users', { name: 'Fake v2' }),
  ],
  [
    ApiGatewayV1Adapter.name,
    createApiGatewayV1('GET', '/users', undefined, {}, { page: '2' }),
  ],
  [ApiGatewayV2Adapter.name, createApiGatewayV2('GET', '/collaborators')],
  [
    ApiGatewayV2Adapter.name,
    createApiGatewayV2('POST', '/collaborators', { name: 'Fake' }),
  ],
  [
    ApiGatewayV2Adapter.name,
    createApiGatewayV2('PUT', '/collaborators', { name: 'Fake v2' }),
  ],
  [
    ApiGatewayV2Adapter.name,
    createApiGatewayV2('GET', '/collaborators', undefined, {}, { page: '2' }),
  ],
  [ApiGatewayV2Adapter.name, createApiGatewayV2('collaborators', '/users')],
];
