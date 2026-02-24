import { test, expect } from '@playwright/test';

test.describe('JSONP todos test', ()=>{

    const postId = 1;

    let newPost = {
        userId: 1,
        title: 'New Post Title',
        completed: false
    }
    
    const updatedData = {
        userId: 1,
        title: 'Updated todo title',
        completed: true
    }
    
    const patchData = {
        title: 'title is patched'
    }     

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

    test(`Check Get request for ${postId} todo`, async({request})=>{
        const response = await request.get(`https://jsonplaceholder.typicode.com/todos/${postId}`);

        expect(response.ok()).toBe(true);
        expect(response.status()).toBe(200);

        const todo = await response.json();
        expect(todo).toHaveProperty('userId', 1);
        expect(todo).toHaveProperty('id', 1);
        expect(todo).toHaveProperty('title', 'delectus aut autem');
        expect(todo).toHaveProperty('completed', false);
    });

    test('POST create new Todo', async({request})=>{
        const response = await request.post('https://jsonplaceholder.typicode.com/todos', {
            data: newPost
        });

        expect(response.ok()).toBeTruthy;
        expect(response.status()).toBe(201);

        const data = await response.json();
        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('userId', newPost.userId);
        expect(data).toHaveProperty('title', newPost.title);
        expect(data).toHaveProperty('completed', newPost.completed);

    });

    test(`PUT todo data ${postId}`, async({request})=>{

        const response = await request.put(`https://jsonplaceholder.typicode.com/todos/${postId}`, {
            data: updatedData
        });

        expect(response.ok()).toBeTruthy;
        expect(response.status()).toBe(200);

        const data = await response.json();
        expect(data).toHaveProperty('id');
        expect(data).toHaveProperty('userId', updatedData.userId);
        expect(data).toHaveProperty('title', updatedData.title);
        expect(data).toHaveProperty('completed', updatedData.completed);


    });

    test(`PATCH todo title data ${postId}`, async({request})=>{

        const response = await request.patch(`https://jsonplaceholder.typicode.com/todos/${postId}`, {
            data: patchData
        });

        expect(response.ok()).toBeTruthy;
        expect(response.status()).toBe(200);

        const data = await response.json();
        expect(data).toHaveProperty('id', 1);
        expect(data).toHaveProperty('title', patchData.title);

    });

    test(`Delete todo data ${postId}`, async({request})=>{

        const response = await request.delete(`https://jsonplaceholder.typicode.com/todos/${postId}`);

        expect(response.ok()).toBeTruthy;
        expect(response.status()).toBe(200);

        const data = await response.json();
        expect(data).toEqual({});

    });

    test('GET negative test', async({request})=>{

        const response = await request.get('https://jsonplaceholder.typicode.com/todos/545645');

        expect(response.ok()).toBe(false);
        expect(response.status()).toBe(404);
    });

});