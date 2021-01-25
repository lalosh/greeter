import { greetPerson, makeHttpRequest } from "../src";

describe('Test Greeting Function', () => {

    test('Test greeting ahmad', () => {
        let result = greetPerson({ name: 'Ahmad' });
        let rightResult = 'Hello Ahmad';
        expect(result).toEqual(rightResult);
    });


    test('Test async code', async () => {
        let result: any = await makeHttpRequest();
        console.log(result.data)
    });
});