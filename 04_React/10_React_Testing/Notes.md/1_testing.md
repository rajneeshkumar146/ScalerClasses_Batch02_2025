# Testing
## Defination:
    Your code should match the required specification/expectations.

# Way to you test
    - Manual testing : where a qa will test whether all the features are working according to the specification
    - Automated testing : We use different types of test that automatically runs when a new feature is added / component is added or a new flow is added

# Areas of testing

    - Unit Testing: Verifying the smallest units (components) of the app in isolation to ensure individual functionality.
      Example : testing a counter component in isolation

    - Functional Testing/Integration Testing:: Assessing how multiple components interact to achieve specific functions within the application.

    - End-to-End Testing(Sandbox testing):: Evaluating the entire application workflow to ensure alignment with specified requirements.

    - Shadow Testing:: 1% of Prod traffic. 

    - Stress Testing:: Assessing how well the system performs under extreme conditions, identifying breaking points.
      Example : flipkart usually test it's application everytime before a new sale arrives to test how good the application will perform during high traffic during the sale
      
    - Performance Testing:: Measuring responsiveness and efficiency to ensure smooth user experience under normal conditions.
    
    - Security Testing:: Identifying vulnerabilities and weaknesses to ensure protection against security threats.
      Generally it is done by pen tester to identify any secuirty vulnerability that can be exploited by malicious users/elements

    - Regression Testing : it is done by re-running non- all tests to ensure that a software application works as intended after any code changes, updates, revisions, improvements, or optimizations


## Generic Level:
1. Arrange.
2. Act -> run your app in a kind of virtual/real environment.
3. assert your expectation. 

## snapshot testing

# Explanation: A snapshot test captures the current state of a React component's rendered output. It takes a snapshot of the component's markup and compares it to the stored snapshot. If there are unintended changes, the test fails, highlighting potential issues with the component's visual representation.

# Use Case: Verifying that the rendered output of a component remains consistent over time, helping detect unexpected changes.
    
### React : unit testing  
## Tech:(create-react-app) 
* JEST 
    * test runner : it finds and excutes all the tests
    * It also provides you feature of describe , test and expect
    * snapshot testing
    *  https://jestjs.io/

    * Test a particular file: npm test -- SomeTestFileToRun 

* React Testing Library
    * Emulate rendering.
    * Find element on the emulated UI.
    * Fire events.

Testing Redux files: https://redux.js.org/usage/writing-tests#writing-integration-tests-with-components
    
### What is required to test a react component???
* Initial State
* Multiples Update to that initial state  
* Snapshot test  -> snapshot will created automatically when you run your test file. `expect(asFragment()).toMatchSnapshot();`
