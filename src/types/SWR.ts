export type parkingswr<T> = {
  data: T;
  isLoading: boolean;
  isValidating: boolean;
  error?: Error;
};

export type bikeswr<T> = {
  data: T;
  isLoading: boolean;
  isValidating: boolean;
  error?: Error;
}
