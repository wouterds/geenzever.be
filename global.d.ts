declare global {
  type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
  type Diff<T, K> = Omit<T, keyof K>;
}

export {};
