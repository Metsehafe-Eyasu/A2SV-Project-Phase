import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Filter from "./Filter";
import { filterAction } from "../reducers/filterReducer";

// Create a mock store
const mockStore = configureMockStore([]);

// Define the initial state
const initialState = {};

// Create the mock store with initial state
const store = mockStore(initialState);

describe("Filter component", () => {
  it("should dispatch the correct action when the filter selection changes", () => {
    // Render the Filter component wrapped in the Provider with the mock store
    const { getByLabelText } = render(
      <Provider store={store}>
        <Filter />
      </Provider>
    );

    // Simulate a change event on the select element
    fireEvent.change(getByLabelText("Filter"), { target: { value: "COMPLETED" } });

    // Verify that the correct action was dispatched
    const actions = store.getActions();
    expect(actions).toEqual([filterAction("COMPLETED")]);
  });
});
