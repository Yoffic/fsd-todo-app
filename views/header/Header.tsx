import { ReactNode, useState } from 'react';
import { IconButton, Popover, Stack, SvgIcon, Typography } from '@mui/material';
import Gear from 'public/Gear.svg';

import { styles } from './styles';

interface IHeaderProps {
  after?: ReactNode;
}

function Header(props: IHeaderProps) {
  const { after } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  return (
    <Stack direction="row" justifyContent="space-between" sx={styles.wrapper}>
      <Typography variant="h1" sx={styles.heading}>
        To Do
      </Typography>
      <IconButton onClick={handleOpen}>
        <SvgIcon component={Gear} viewBox="0 0 30 30" />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Stack direction="row" alignItems="center" sx={styles.menu}>
          {after}
          <Typography variant="body1">Show News</Typography>
        </Stack>
      </Popover>
    </Stack>
  );
}

export default Header;
