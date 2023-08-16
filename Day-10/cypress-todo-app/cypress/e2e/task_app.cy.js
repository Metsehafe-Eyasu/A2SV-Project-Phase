describe("template spec", () => {
  // This code block runs before each test case
  beforeEach(() => {
    // Clear data before each test
    cy.request('DELETE', 'http://localhost:3001/clear');
    // Visit the main page before each test
    cy.visit("/");
  });

  // Test case: Check if the front page can be opened
  it("Front page can be opened", () => {
    // Verify that the page contains the text "Tasks App"
    cy.contains("Tasks App");
  });

  // Test case: Check if a new task can be created
  it("New task can be created", () => {
    // Type title and description, submit the form
    cy.get("#new_title").type("a new task");
    cy.get("#new_description").type("a new description");
    cy.get("#new_submit").click();
    // Verify that the new task is displayed
    cy.contains("a new task");
  });

  // Test case: Check if a task can be deleted
  it("Task can be deleted", () => {
    // Create a new task
    cy.get("#new_title").type("a new task");
    cy.get("#new_description").type("a new description");
    cy.get("#new_submit").click();
    // Verify that the new task is displayed
    cy.contains("a new task");
    // Click the delete icon, verify the task is deleted
    cy.get("#trash_1").click({ force: true });
    cy.contains("a new task").should("not.exist");
  });

  // Test case: Check if a task can be marked as done
  it("Task can be marked as done", () => {
    // Create a new task
    cy.get("#new_title").type("a new task");
    cy.get("#new_description").type("a new description");
    cy.get("#new_submit").click();
    // Verify that the new task is displayed
    cy.contains("a new task");
    // Click the check icon, verify task text decoration
    cy.get("#check_1").click({ force: true });
    cy.contains("a new task").should("have.css", "text-decoration").and("include", "line-through");
  });

  // Test case: Check if a task can be updated
  it("Task can be updated", () => {
    // Create a new task
    cy.get("#new_title").type("a new task");
    cy.get("#new_description").type("a new description");
    cy.get("#new_submit").click();
    // Verify that the new task is displayed
    cy.contains("a new task");
    // Click the arrow icon to focus on the task
    cy.get("#arrow_1").click({ force: true });
    // Click the edit button
    cy.get('#edit_button').click();
    // Update title and description, submit the form
    cy.get("#edit_title").clear().type("a new title update");
    cy.get("#edit_description").clear().type("a new description update");
    cy.get("#edit_submit").click();
    // Verify that the updated title and description are displayed
    cy.contains("a new title update");
    cy.contains("a new description update");
  });

  // This code block runs after each test case
  afterEach(() => {
    // Add a wait of 1 second between test cases
    cy.wait(1000);
  });
});
