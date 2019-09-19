export interface Utxo {
  txid: string;
  vout: number;
  amount: number;
  satoshis: number;
  height: number;
  confirmations: number;
}

export type Output = Recipient | OpReturn;

export interface OutputForBuilder {
  to: string | Buffer;
  amount: number;
}

export const isRecipient = (o: Output): o is Recipient => 'to' in o;
export const isOpReturn = (o: Output): o is OpReturn => 'opReturn' in o;

export interface Recipient {
  to: string;
  amount: number;
}

export interface OpReturn {
  opReturn: string[];
}

export interface TxOptions {
  time?: number;
  age?: number;
}

export enum SignatureAlgorithm {
  ECDSA = 0x00,
  SCHNORR = 0x01,
}
