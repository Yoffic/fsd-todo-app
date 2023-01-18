import { Box, Paper, Typography, Link } from '@mui/material';
import { useNews } from '@entities/news/model';

import { styles } from './styles';

function isLastElement<T>(list: T[], index: number) {
  return list.length - 1 === index;
}

function NewsLine() {
  const { news } = useNews();

  if (!news) return null;

  return (
    <Paper sx={styles.wrapper}>
      <Box sx={styles.line}>
        <Typography variant="caption" sx={styles.text}>
          {news.map((item, index) => (
            <Link
              key={item.title}
              href={item.link}
              underline="none"
              target="_blank"
              sx={styles.news}
            >
              {item.title}
              {!isLastElement(news, index) && ' |'}
            </Link>
          ))}
        </Typography>
      </Box>
    </Paper>
  );
}

export default NewsLine;
