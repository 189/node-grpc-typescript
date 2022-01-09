"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("@grpc/grpc-js"));
const example_grpc_pb_1 = require("./proto/example_grpc_pb");
const example_pb_1 = require("./proto/example_pb");
const host = '0.0.0.0:9050';
const client = new example_grpc_pb_1.ExampleClient(host, grpc.credentials.createInsecure());
const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (error) => {
    if (error) {
        console.log(`Client connect error: ${error.message}`);
    }
    else {
        onClientReady();
    }
});
function onClientReady() {
    switch (process.argv[process.argv.length - 1]) {
        case '--unary':
            doUnaryCall();
            break;
        case '--server-streaming':
            doServerStreamingCall();
            break;
        case '--client-streaming':
            doClientStreamingCall();
            break;
        case '--bidi-streaming':
            doBidirectionalStreamingCall();
            break;
        default:
            throw new Error('Example not specified');
    }
}
function doUnaryCall() {
    const clientMessage = new example_pb_1.ClientMessage();
    clientMessage.setClientMessage('Message from client');
    client.unaryCall(clientMessage, (error, serverMessage) => {
        if (error) {
            console.error(error.message);
        }
        else if (serverMessage) {
            console.log(`(client) Got server message: ${serverMessage.getServerMessage()}`);
        }
    });
}
function doServerStreamingCall() {
    const clientMessage = new example_pb_1.ClientMessage();
    clientMessage.setClientMessage('Message from client');
    const stream = client.serverStreamingCall(clientMessage);
    stream.on('data', (serverMessage) => {
        console.log(`(client) Got server message: ${serverMessage.getServerMessage()}`);
    });
}
function doClientStreamingCall() {
    const stream = client.clientStreamingCall((error) => {
        if (error) {
            console.error(error.message);
        }
    });
    const clientMessage = new example_pb_1.ClientMessage();
    clientMessage.setClientMessage('Message from client');
    stream.write(clientMessage);
}
function doBidirectionalStreamingCall() {
    const stream = client.bidirectionalStreamingCall();
    // Server stream
    stream.on('data', (serverMessage) => {
        console.log(`(client) Got server message: ${serverMessage.getServerMessage()}`);
    });
    // Client stream
    const clientMessage = new example_pb_1.ClientMessage();
    clientMessage.setClientMessage('Message from client');
    stream.write(clientMessage);
}
