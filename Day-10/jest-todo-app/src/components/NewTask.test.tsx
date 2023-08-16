import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import NewTask from '../components/NewTask';

// Mocking the addTask service function
jest.mock('../services/tasks');

const mockStore = configureMockStore()({
  task: [], // Initial state
});

describe('NewTask Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders properly', () => {
    render(<Provider store={mockStore}><NewTask /></Provider>);
    expect(screen.getByPlaceholderText('Task Title')).toBeDefined();
    expect(screen.getByPlaceholderText('Task Description')).toBeDefined();
    expect(screen.getByRole('button', { name: /add-task/i })).toBeDefined();
  });
});
