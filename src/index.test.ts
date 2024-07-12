import ts2js from './index'

const tsCode = `
let x: string;
interface Person {
    name: string;
    age: number;
}
type CoolBool = boolean;
function equals(x: number, y: number): boolean {
    return x === y;
}
function split(str: string, separator?: string) {}
function foo<T>(x: T) {
    return x;
}
function sum(this: SomeType, x: number, y: number) {}
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getGreeting(): string {
        return "Hello, " + this.name;
    }
}
export type SpecialBool = boolean;
export interface Person {
    name: string;
    age: number;
}
export type { SomeLocalType };
import type { Person } from "schema";
const point = JSON.parse(serializedPoint) as ({ x: number, y: number });
document.getElementById("entry")!.innerText = "...";
`

const expectedJsCode = `
let x;
function equals(x, y) {
    return x === y;
}
function split(str, separator) {}
function foo(x) {
    return x;
}
function sum(this, x, y) {}
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    getGreeting() {
        return "Hello, " + this.name;
    }
}
const point = JSON.parse(serializedPoint);
document.getElementById("entry").innerText = "...";
`

test('transpile', () => {
    expect(
        ts2js(tsCode)
            .trim()
            .replace(/(\n *)+/g, ''),
    ).toBe(expectedJsCode.trim().replace(/(\n *)+/g, ''))
})
