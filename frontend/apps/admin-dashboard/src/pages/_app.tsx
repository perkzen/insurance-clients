import type { AppProps } from 'next/app';
import '../styles/global.css';
import { Layout } from '../components/Layout/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '../context/AuthContext';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster position={'top-right'} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
