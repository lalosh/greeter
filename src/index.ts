import { identity, pickBy } from 'lodash';
import { produce } from 'immer';
import axios from 'axios';


interface Person {
    name: string,
}

export function makeHttpRequest() {
    return axios.get('https://jsonplaceholder.typicode.com/todos/1');
}

export function makeImmutableChange(obj: any) {
    return produce(obj, (newObj: any) => {
        newObj['nice'] = 'yes!';
    });
}


export function useLodashToo() {
    let obj = {
        some: 'yest',
        another: undefined,
        showHaveNoAnother: 'hope that',
    }

    return pickBy(obj, identity);
}

export function greetPerson(person: Person) {
    console.log(`Hello ${person.name}`);
    return (`Hello ${person.name}`);
}

export const BUILD_TARGET = process.env.BUILD_TARGET;