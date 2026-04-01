import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          color: '#fff',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Algo salió mal</h1>
            <p style={{ color: '#888', marginBottom: '2rem' }}>
              Ha ocurrido un error inesperado. Por favor, recarga la página.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#2ef59a',
                color: '#0a0a0a',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Recargar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
