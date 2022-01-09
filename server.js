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
const exampleServer = {
    unaryCall(call, callback) {
        if (call.request) {
            console.log(`(server) Got client message: ${call.request.getClientMessage()}`);
        }
        const serverMessage = new example_pb_1.ServerMessage();
        serverMessage.setServerMessage('Message from server');
        callback(null, serverMessage);
    },
    serverStreamingCall(call) {
        const serverMessage = new example_pb_1.ServerMessage();
        serverMessage.setServerMessage('Message from server');
        call.write(serverMessage);
    },
    clientStreamingCall(call) {
        call.on('data', (clientMessage) => {
            console.log(`(server) Got client message: ${clientMessage.getClientMessage()}`);
        });
    },
    bidirectionalStreamingCall(call) {
        call.on('data', (clientMessage) => {
            console.log(`(server) Got client message: ${clientMessage.getClientMessage()}`);
        });
        const serverMessage = new example_pb_1.ServerMessage();
        serverMessage.setServerMessage('Message from server');
        call.write(serverMessage);
    },
};
function getServer() {
    const server = new grpc.Server();
    server.addService(example_grpc_pb_1.ExampleService, exampleServer);
    return server;
}
if (require.main === module) {
    const server = getServer();
    server.bindAsync(host, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            console.error(`Server error: ${err.message}`);
        }
        else {
            console.log(`Server bound on port: ${port}`);
            server.start();
        }
    });
}
