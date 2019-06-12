import { BITBOX } from 'bitbox-sdk';
import { HDNode, ECPair } from 'bitcoincashjs-lib';

export const network: string = 'testnet';
export const bitbox: BITBOX = new BITBOX({ restURL: 'https://trest.bitcoin.com/v2/' });

const rootSeed: Buffer = bitbox.Mnemonic.toSeed('CashScript');
const hdNode: HDNode = bitbox.HDNode.fromSeed(rootSeed, network);

export const alice: ECPair = bitbox.HDNode.toKeyPair(bitbox.HDNode.derive(hdNode, 0));
export const bob: ECPair = bitbox.HDNode.toKeyPair(bitbox.HDNode.derive(hdNode, 1));

export const alicePk: Buffer = bitbox.ECPair.toPublicKey(alice);
export const bobPk: Buffer = bitbox.ECPair.toPublicKey(bob);

export const alicePkh: Buffer = bitbox.Crypto.hash160(alicePk);
export const bobPkh: Buffer = bitbox.Crypto.hash160(bobPk);
