'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body>
        <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
          <h1>Something went wrong globally!</h1>
          <p>{error.message}</p>
          <button
            onClick={() => {
              // Try to recover by resetting the error boundary
              reset();
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
