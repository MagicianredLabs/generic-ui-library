import React from 'react';
import { MockThreeItems } from './helpers';

import { TodoListWrapper } from './../components/TodoListWrapper/TodoListWrapper';

export default {
  title: 'Library/TodoListWrapper',
  component: TodoListWrapper,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TodoListWrapper {...args} />;

export const EmptyArgs = Template.bind({});
EmptyArgs.args = {
};

export const DataThreeItems = Template.bind({});
DataThreeItems.args = {
  data: MockThreeItems
};
