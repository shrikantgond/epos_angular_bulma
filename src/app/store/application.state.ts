export interface ApplicationState {
  loading: boolean;
  success: boolean;
  error: any;
}

export function createDefaultApplicationState(): ApplicationState {
  return {
    loading: false,
    success: false,
    error: null,
  };
}