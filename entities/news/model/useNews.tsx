import { useQuery, useQueryClient } from 'react-query';
import { getRssNews } from 'shared/api/rssnews';

export function useNews() {
  const queryClient = useQueryClient();
  const { data } = useQuery('news', getRssNews);

  const news = data?.data.rss.channel.item;

  return { news };
}
