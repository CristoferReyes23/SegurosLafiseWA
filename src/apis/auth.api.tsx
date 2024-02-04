export class AuthApi {
  static ValidateQueryParams(
    _a: string,
    _b: string
  ): Promise<{ isValid: number }> {
    return new Promise((res) => {
      setTimeout(() => {
        res({ isValid: Math.floor(Math.random() * 10) });
      }, 3000);
    });
  }
}
