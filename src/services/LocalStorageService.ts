
class LocalStorageService {
  storeAuthInfo(jwt: string): void {
    localStorage.setItem("jwt", jwt);
  }

  getAuthToken(): string | null {
    return localStorage.getItem("jwt");
  }

  isLogged(): boolean {
    return this.getAuthToken() ? true : false;
  }

  removeAuthInfo(): void {
    const infoToRemove: string[] = ["jwt"];

    infoToRemove.forEach((info) => {
      localStorage.removeItem(info);
    });
  }

}

export default new LocalStorageService();
