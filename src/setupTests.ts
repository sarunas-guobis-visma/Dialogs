// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util'

global.TextEncoder = TextEncoder
// @ts-expect-error
global.TextDecoder = TextDecoder
global.TransformStream = require('stream/web').TransformStream;
function channelMock() {}
channelMock.prototype.onmessage = function () {}
channelMock.prototype.postMessage = function (data: any) {
    this.onmessage({ data })
}
// @ts-expect-error
global.BroadcastChannel = channelMock

const { mswServer } = require("./__tests__/mocks/mswServer");

beforeAll(() => mswServer.listen())
afterEach(() => mswServer.resetHandlers())
afterAll(() => mswServer.close())
