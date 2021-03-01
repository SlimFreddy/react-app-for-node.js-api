class LocalStorageService {
  storeAuthInfo(jwt: string, userId: string, username: string): void {
    localStorage.setItem("jwt", jwt);
    localStorage.setItem("userId", userId);
    localStorage.username("username", username);
  }

  getAuthToken(): string | null {
    return localStorage.getItem("jwt");
  }

  getUserId(): string | null {
    return localStorage.getItem("userId");
  }

  getUsername(): string| null{
    return localStorage.getItem("username")
  }

  isLogged(): boolean {
    return this.getAuthToken() ? true : false;
  }

  removeAuthInfo(): void {
    const infoToRemove: string[] = ["jwt", "userId","username"];

    infoToRemove.forEach((info) => {
      localStorage.removeItem(info);
    });
  }
}

export default new LocalStorageService();
