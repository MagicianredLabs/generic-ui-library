import React from 'react';

import { TodoListItemWrapper } from './../components/TodoListItemWrapper/TodoListItemWrapper';

export default {
  title: 'Library/TodoListItemWrapper',
  component: TodoListItemWrapper,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TodoListItemWrapper {...args} />;

export const EmptyArgs = Template.bind({});
EmptyArgs.args = {
};
