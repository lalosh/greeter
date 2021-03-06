/// <reference types="lodash" />
interface Person {
    name: string;
}
export declare function makeHttpRequest(): Promise<Response> | Promise<import("axios").AxiosResponse<any>>;
export declare function makeImmutableChange(obj: any): <Base extends (newObj: any) => void>(base?: Base | undefined, ...rest: unknown[]) => any;
export declare function useLodashToo(): import("lodash").Dictionary<string | undefined>;
export declare function greetPerson(person: Person): string;
export declare const BUILD_TARGET: string | undefined;
export {};
