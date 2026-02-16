import { test, expect } from '@playwright/test';

test.describe('JSONP todos test', ()=>{

    test('Check GET request for todoes', async({request})=>{
        const response = await request.get('https://jsonplaceholder.typicode.com/todos');

        expect(response.ok()).toBe(true);
        expect(response.status()).toBe(200);
        
        const todos = await response.json();

        expect(todos.length).toBeGreaterThan(0);

        for(let todo of todos){
            expect(todo).toHaveProperty('userId');
            expect(todo).toHaveProperty('id');
            expect(todo).toHaveProperty('title');
            expect(todo).toHaveProperty('completed');
        }
    });

    test('Check Get request for 1 todo', async({request})=>{
        const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');

        expect(response.ok()).toBe(true);
        expect(response.status()).toBe(200);

        const todo = await response.json();
        expect(todo).toHaveProperty('userId', 1);
        expect(todo).toHaveProperty('id', 1);
        expect(todo).toHaveProperty('title', 'delectus aut autem');
        expect(todo).toHaveProperty('completed', false);
    });
});