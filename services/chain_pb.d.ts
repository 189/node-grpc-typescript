// package: chain
// file: chain.proto

import * as jspb from "google-protobuf";

export class TxReq extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxReq.AsObject;
  static toObject(includeInstance: boolean, msg: TxReq): TxReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxReq;
  static deserializeBinaryFromReader(message: TxReq, reader: jspb.BinaryReader): TxReq;
}

export namespace TxReq {
  export type AsObject = {
    hash: string,
  }
}

export class TxReply extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxReply.AsObject;
  static toObject(includeInstance: boolean, msg: TxReply): TxReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxReply;
  static deserializeBinaryFromReader(message: TxReply, reader: jspb.BinaryReader): TxReply;
}

export namespace TxReply {
  export type AsObject = {
    hash: string,
  }
}

