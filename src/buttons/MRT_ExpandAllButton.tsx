import React, { FC } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { MRT_TableInstance } from '..';

interface Props {
  tableInstance: MRT_TableInstance;
}

export const MRT_ExpandAllButton: FC<Props> = ({ tableInstance }) => {
  const {
    getIsAllRowsExpanded,
    getIsSomeRowsExpanded,
    getCanSomeRowsExpand,
    getState,
    options: {
      icons: { DoubleArrowDownIcon },
      localization,
      renderDetailPanel,
    },
    toggleAllRowsExpanded,
  } = tableInstance;

  const { isDensePadding } = getState();

  return (
    <Tooltip
      arrow
      enterDelay={1000}
      enterNextDelay={1000}
      title={localization.expandAll}
    >
      <IconButton
        aria-label={localization.expandAll}
        disabled={!getCanSomeRowsExpand() && !renderDetailPanel}
        onClick={() => toggleAllRowsExpanded(!getIsAllRowsExpanded())}
        sx={{
          height: isDensePadding ? '1.75rem' : '2.25rem',
          width: isDensePadding ? '1.75rem' : '2.25rem',
        }}
      >
        <DoubleArrowDownIcon
          style={{
            transform: `rotate(${
              getIsAllRowsExpanded() ? -180 : getIsSomeRowsExpanded() ? -90 : 0
            }deg)`,
            transition: 'transform 0.2s',
          }}
        />
      </IconButton>
    </Tooltip>
  );
};
