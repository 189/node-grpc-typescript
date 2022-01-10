// GENERATED CODE -- DO NOT EDIT!

// package: chain
// file: chain.proto

import * as chain_pb from "./chain_pb";
import * as grpc from "@grpc/grpc-js";

interface IkaasService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getTx: grpc.MethodDefinition<chain_pb.TxReq, chain_pb.TxReply>;
}

export const kaasService: IkaasService;

export interface IkaasServer extends grpc.UntypedServiceImplementation {
  getTx: grpc.handleUnaryCall<chain_pb.TxReq, chain_pb.TxReply>;
}

export class kaasClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getTx(argument: chain_pb.TxReq, callback: grpc.requestCallback<chain_pb.TxReply>): grpc.ClientUnaryCall;
  getTx(argument: chain_pb.TxReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<chain_pb.TxReply>): grpc.ClientUnaryCall;
  getTx(argument: chain_pb.TxReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<chain_pb.TxReply>): grpc.ClientUnaryCall;
}
