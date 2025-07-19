import { test, expect, request } from '@playwright/test';

test('User journey: create and fetch user', async ({ request }) => {
  // 1. Create user
  const createUserResponse = await request.post('http://localhost:8000/users', {
    data: {
      name: 'Test User',
      email: 'test@example.com'
    }
  });

  expect(createUserResponse.ok()).toBeTruthy();
  const user = await createUserResponse.json();
  const userId = user.id;

  // 2. Fetch user
  const getUserResponse = await request.get(`http://localhost:8000/users/${userId}`);
  expect(getUserResponse.ok()).toBeTruthy();
  const fetchedUser = await getUserResponse.json();

  // 3. Verify data
  expect(fetchedUser.name).toBe('Test User');
  expect(fetchedUser.email).toBe('test@example.com');
});
