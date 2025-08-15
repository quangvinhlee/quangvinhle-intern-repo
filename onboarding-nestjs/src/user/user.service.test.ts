import { User } from './user.entity';

// Utility function for testing
function getFullName(user: User): string {
  return `${user.username} <${user.email}>`;
}

describe('getFullName', () => {
  it('returns correct format', () => {
    const user = new User();
    user.username = 'testuser';
    user.email = 'test@example.com';
    expect(getFullName(user)).toBe('testuser <test@example.com>');
  });

  it('handles empty username', () => {
    const user = new User();
    user.username = '';
    user.email = 'test@example.com';
    expect(getFullName(user)).toBe(' <test@example.com>');
  });

  it('handles empty email', () => {
    const user = new User();
    user.username = 'testuser';
    user.email = '';
    expect(getFullName(user)).toBe('testuser <>');
  });
});
