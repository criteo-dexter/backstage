/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/CheckCircle';
import { ToggleButton } from '@material-ui/lab';
import { FeatureFlagsRegistryItem } from '@backstage/core';

type Props = {
  flag: FeatureFlagsRegistryItem;
  enabled: boolean;
  toggleHandler: Function;
};

export const FlagItem = ({ flag, enabled, toggleHandler }: Props) => (
  <ListItem>
    <ListItemText
      primary={flag.name}
      secondary={`Registered in ${flag.pluginId} plugin`}
    />
    <ListItemSecondaryAction>
      <Tooltip placement="top" arrow title={enabled ? 'Disable' : 'Enable'}>
        <ToggleButton
          size="small"
          value="flag"
          selected={enabled}
          onChange={() => toggleHandler(flag.name)}
        >
          <CheckIcon color={enabled ? 'primary' : undefined} />
        </ToggleButton>
      </Tooltip>
    </ListItemSecondaryAction>
  </ListItem>
);
