import React from 'react';
import { MockThreeItems } from './helpers';

import { TodoListFooterWrapper } from './../components/TodoListFooterWrapper/TodoListFooterWrapper';

export default {
  title: 'Library/TodoListFooterWrapper',
  component: TodoListFooterWrapper,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TodoListFooterWrapper {...args} />;

export const EmptyArgs = Template.bind({});
EmptyArgs.args = {
};

export const DataThreeItems = Template.bind({});
DataThreeItems.args = {
  data: MockThreeItems
};

export const DataEmpty = Template.bind({});
DataEmpty.args = {
  data: []
};
