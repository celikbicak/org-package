import { enum2array } from "enum2array";


enum CustomType {
    TypeA = 1,
    TypeB = 2,
    TypeC = 3,
    TypeD = 4,
}

enum CustomValue {
    TypeA = "valueA",
    TypeB = "valueB",
    TypeC = "valueC",
    TypeD = "valueD",
}


console.log(enum2array(CustomType));

console.log(enum2array(CustomValue));