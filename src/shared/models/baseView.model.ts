//generic view model response catcher

export class BaseViewModel<T> {
  response?: T | undefined;
  isOk: boolean = false;
  message?: string | null;
}
