export function saveTokenToLocalStorage(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }
  
  export function getTokenFromLocalStorage(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    return null; // Return null if localStorage is not available
  }
  
  export function removeTokenFromLocalStorage(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
  }
  