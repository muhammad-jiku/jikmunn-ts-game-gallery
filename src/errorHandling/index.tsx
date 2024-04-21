import { ComponentType, FC, useState } from 'react';

interface WrappedComponentProps {
  // Define props for the wrapped component
  hasError: boolean;
}

interface ErrorBoundaryProps {
  onError: (error: Error) => void;
}

const withErrorBoundary = <T extends WrappedComponentProps>(
  WrappedComponent: ComponentType<T>
) => {
  const ErrorBoundary: FC<T & ErrorBoundaryProps> = (props) => {
    const [hasError, setHasError] = useState(false);

    const handleOnError = (error: Error) => {
      console.error(error);
      setHasError(true);
    };

    if (hasError) {
      return <p>Something went wrong!</p>;
    }

    return <WrappedComponent {...(props as T)} onError={handleOnError} />;
  };

  return ErrorBoundary;
};

export default withErrorBoundary;
