import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AppSideCheckbox from '../parts/molecules/AppCheckbox'

const stories = storiesOf('Components', module);

stories.add(
  'Checkbox',
  () => <AppSideCheckbox id={0} label={'リストに追加する'} property={'リストに追加する'} />,
  { info: { inline: true } }
);
