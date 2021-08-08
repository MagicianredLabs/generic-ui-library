import React from 'react';

import { TodoListHeaderWrapper } from './../components/TodoListHeaderWrapper/TodoListHeaderWrapper';

export default {
  title: 'Library/TodoListHeaderWrapper',
  component: TodoListHeaderWrapper,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <TodoListHeaderWrapper {...args} />;

export const EmptyArgs = Template.bind({});
EmptyArgs.args = {
};
