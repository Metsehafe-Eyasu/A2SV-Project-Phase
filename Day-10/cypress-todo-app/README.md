# Tasks App Cypress Tests

This repository contains end-to-end tests for the Tasks App using Cypress. The tests cover various scenarios related to task creation, deletion, marking tasks as done, and updating tasks.

## Table of Contents

- [Test Cases](#test-cases)
- [Additional Notes](#additional-notes)

## Test Cases

### Front page can be opened

**Description:** This test verifies that the front page of the Tasks App can be opened successfully.

**Steps:**
1. The application is loaded.
2. The user accesses the main page.

**Expected Outcome:** The main page should be displayed with the title "Tasks App."

### New task can be created

**Description:** This test verifies that a new task can be created successfully.

**Steps:**
1. The application is loaded.
2. The user enters a title and description for the new task.
3. The user clicks the submit button.

**Expected Outcome:** The new task should be displayed on the page with the entered title and description.

### Task can be deleted

**Description:** This test verifies that a task can be deleted successfully.

**Steps:**
1. The application is loaded.
2. The user creates a new task.
3. The user clicks the delete icon for the task.

**Expected Outcome:** The task should be removed from the page and should not be visible.

### Task can be marked as done

**Description:** This test verifies that a task can be marked as done, and its text decoration changes to "line-through."

**Steps:**
1. The application is loaded.
2. The user creates a new task.
3. The user clicks the check icon for the task.

**Expected Outcome:** The task's text should have a "line-through" text decoration, indicating that it's marked as done.

### Task can be updated

**Description:** This test verifies that a task can be updated successfully.

**Steps:**
1. The application is loaded.
2. The user creates a new task.
3. The user clicks the arrow icon to focus on the task.
4. The user clicks the edit button.
5. The user updates the title and description of the task.
6. The user clicks the submit button.

**Expected Outcome:** The task's title and description should be updated with the new values.

## Additional Notes

- **Challenges Faced:** While writing these tests, one challenge was ensuring proper synchronization between test steps and the application's behavior. Using Cypress's commands like `.should()` and `{force: true}` helped mitigate these challenges.

- **Noteworthy Observations:** It's important to have a consistent starting point for each test. The `beforeEach` hook clears the data and visits the main page before each test, providing a reliable foundation for test execution.

- **Insights:** Writing comprehensive end-to-end tests not only ensures that the application's features are working correctly but also aids in identifying potential bugs early in the development process. Regularly maintaining and updating these tests is crucial as the application evolves.
