// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chain_pb = require('./chain_pb.js');

function serialize_chain_TxReply(arg) {
  if (!(arg instanceof chain_pb.TxReply)) {
    throw new Error('Expected argument of type chain.TxReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chain_TxReply(buffer_arg) {
  return chain_pb.TxReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chain_TxReq(arg) {
  if (!(arg instanceof chain_pb.TxReq)) {
    throw new Error('Expected argument of type chain.TxReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chain_TxReq(buffer_arg) {
  return chain_pb.TxReq.deserializeBinary(new Uint8Array(buffer_arg));
}


var kaasService = exports.kaasService = {
  getTx: {
    path: '/chain.kaas/getTx',
    requestStream: false,
    responseStream: false,
    requestType: chain_pb.TxReq,
    responseType: chain_pb.TxReply,
    requestSerialize: serialize_chain_TxReq,
    requestDeserialize: deserialize_chain_TxReq,
    responseSerialize: serialize_chain_TxReply,
    responseDeserialize: deserialize_chain_TxReply,
  },
};

exports.kaasClient = grpc.makeGenericClientConstructor(kaasService);
