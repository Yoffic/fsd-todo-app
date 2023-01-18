import { QueryClient, QueryClientProvider } from 'react-query';
import { useNewsContext } from '@app/providers/news/NewsProvider';
import NewsLine from '@entities/news/ui';

function News() {
  const queryClient = new QueryClient();
  const { isNewsShown } = useNewsContext();

  return (
    <QueryClientProvider client={queryClient}>{isNewsShown && <NewsLine />}</QueryClientProvider>
  );
}

export default News;
