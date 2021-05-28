import { enum2array } from 'enum2array';

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

  return [...result1, ...result2];
}
