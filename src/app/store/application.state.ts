export interface ApplicationState {
  loading: boolean;
  success: boolean;
  error: any;
}

export function DefaultApplicationState(): ApplicationState {
  return {
    loading: false,
    success: false,
    error: null,
  };
}

export function LoadingApplicationState(): ApplicationState {
  return {
    loading: true,
    success: false,
    error: null,
  };
}

export function LoadedApplicationState(): ApplicationState {
  return {
    loading: false,
    success: true,
    error: null,
  };
}

export function ErrorApplicationState(error: Error): ApplicationState {
  return {
    loading: false,
    success: false,
    error: error,
  };
}