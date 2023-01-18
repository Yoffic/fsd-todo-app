import { Checkbox } from '@mui/material';
import { useNewsContext } from '@app/providers/news/NewsProvider';

import { styles } from './styles';

function ToggleNews() {
  const { isNewsShown, toggleNewsShown } = useNewsContext();

  return <Checkbox checked={isNewsShown} onChange={toggleNewsShown} sx={styles.checkbox} />;
}

export default ToggleNews;
