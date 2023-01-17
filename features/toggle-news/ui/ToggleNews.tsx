import { Checkbox } from '@mui/material';

import { useToggleNews } from '@features/toggle-news/model';

import { styles } from './styles';

function ToggleNews() {
  const { isNewsShown, toggleNewsShown } = useToggleNews();

  return <Checkbox checked={isNewsShown} onChange={toggleNewsShown} sx={styles.checkbox} />;
}

export default ToggleNews;
