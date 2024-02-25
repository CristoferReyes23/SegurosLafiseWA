export class AuthApi {
  static ValidateQueryParams(
    _a: string,
    _b: string
  ): Promise<{ isValid: boolean }> {
    console.log(import.meta.env.VITE_API_LAFISE_SERVICE);

    return new Promise((res) => {
      res({
        isValid: true,
      });
    });
  }
}
