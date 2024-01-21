import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: undefined, errorInfo: undefined };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>Error: {this.state.error?.toString()}</p>
          <p style={{ color: 'grey' }}>
            Where occured: {this.state.errorInfo?.componentStack}
          </p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
