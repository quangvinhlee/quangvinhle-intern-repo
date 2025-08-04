## 🔍 Reflections

### ❓ Why is mocking important in unit tests?

Mocking helps isolate the unit being tested by **replacing real dependencies with fake versions**. This means:

- I can test the behavior of a controller or service **without relying on real APIs or databases**.
- It ensures tests run faster and don’t break due to external changes.
- I can simulate different responses (success, failure, exceptions) to test how the logic handles edge cases.

Without mocking, tests would be more like integration tests slower and more brittle.

---

### ❓ How do you mock a NestJS provider (e.g., a service in a controller test)?

I used the `@nestjs/testing` module to create a testing module and override the real service with a mock:

```ts
const mockMyService = {
  getData: jest.fn().mockResolvedValue({ result: "mocked" }),
};

beforeEach(async () => {
  const moduleRef = await Test.createTestingModule({
    controllers: [MyController],
    providers: [
      {
        provide: MyService,
        useValue: mockMyService,
      },
    ],
  }).compile();

  myController = moduleRef.get<MyController>(MyController);
});
```
