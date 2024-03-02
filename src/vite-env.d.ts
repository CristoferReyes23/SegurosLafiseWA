/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_LAFISE_SERVICE: string;
  readonly VITE_API_BILL_PAYMENT_URL: string;
  readonly VITE_API_VALIDATE_SESSION_URL: string;

  readonly VITE_LAFISE_USERNAME: string;
  readonly VITE_LAFISE_PASSWORD: string;
  readonly VITE_LAFISE_EXPIRED: string;
  
  readonly VITE_BIRTHDAY_MIN: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
