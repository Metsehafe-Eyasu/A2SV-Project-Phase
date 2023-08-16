import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // You may need to install this package
import TaskDetails from './TaskDetails'; // Update the import path accordingly

describe('TaskDetails component', () => {
  const mockStore = configureStore([]);

  it('renders "No task selected" message when focusedTask is null', () => {
    const initialState = { focusedTask: null };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <TaskDetails />
      </Provider>
    );

    const messageElement = getByText('No task selected');
    expect(messageElement).toBeDefined();
  });

  it('renders task details when focusedTask is provided', () => {
    const initialState = {
      focusedTask: {
        title: 'Sample Task',
        description: 'This is a sample task',
        complete: false,
      },
    };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <TaskDetails />
      </Provider>
    );

    const titleElement = getByText('Sample Task');
    const descriptionElement = getByText('This is a sample task');
    expect(titleElement).toBeDefined();
    expect(descriptionElement).toBeDefined();
  });
});
