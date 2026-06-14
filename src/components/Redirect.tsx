import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { findOriginalUrl } from '../utils/api';

interface RouteParams {
  slug: string;
}

const Redirect: React.FC = () => {
  const { slug } = useParams<RouteParams>();
  const [error, setError] = useState(false);

  useEffect(() => {
    const redirect = async () => {
      if (!slug) {
        setError(true);
        return;
      }

      const originalUrl = await findOriginalUrl(slug);
      if (originalUrl) {
        window.location.href = originalUrl;
      } else {
        setError(true);
      }
    };

    redirect();
  }, [slug]);

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
        <h1>404 - Link Not Found</h1>
        <p>This shortened URL does not exist or has expired.</p>
        <a href="/">Go back to home</a>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'Arial' }}>
      <h2>Redirecting...</h2>
    </div>
  );
};

export default Redirect;
