import { enum2array } from 'enum2array';
import { storageFunction } from 'storage-function';

enum CustomType {
  TypeA = 1,
  TypeB = 2,
  TypeC = 3,
  TypeD = 4,
}

enum CustomValue {
  TypeA = 'valueA',
  TypeB = 'valueB',
  TypeC = 'valueC',
  TypeD = 'valueD',
}

export function orgPackage(): any[] {
  const result1 = enum2array(CustomType);

  const result2 = enum2array(CustomValue);

  const result = [...result1, ...result2];

  storageFunction.toLocalStorage('localKey', result);
  storageFunction.toSessionStorage('sessionKey', result);

  return result;
}
