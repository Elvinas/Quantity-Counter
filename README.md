# Quantity Counter Component
This little thing is still in development. Being made only for the sake of interest.
There's still a lot to be done to make it flexible.

Things I consider to add later:
1. Documentation: Add comments or documentation explaining the purpose of each method and its parameters would make it easier for other developers (or even myself in the future) to understand how to use and extend this class.
2. Error Handling: While the component handles unrecognized actions and range validation, it might be useful to throw errors instead of just logging to the console or showing an alert. This will provide better feedback to developers using this component (class).
3. Testing: To improve testability, I might consider breaking down some methods into smaller, more focused functions. This would make it easier to write unit tests for individual behaviors.
4. Separation of Concerns: currently, my Counter class is responsible for both managing the counter state and rendering it. Separating these concerns into different classes or methods could make code more modular and easier to maintain.
5. Flexibility: It might be useful to allow users of Counter class to customize the HTML structure of the counter element. For example, instead of assuming there's an element with the class 'value', it could allow users to pass in a selector for the value element.
6. Consistency in Naming: Some of private methods are named with an underscore prefix (#event_onClick). While this is a common convention, it's inconsistent with the rest of my code, which uses camelCase. Need to pick one naming convention and stick with it throughout the codebase.
7. Default Value for Event Listeners: Considering to provide a default event listener for the 'quantityChange' event, so users of class don't have to set it up manually if they don't need custom behavior.
8. Immutable Range Object: To make the range object immutable to prevent unintentional modification of its properties.
9. Type Checking: Adding type checking for method parameters and options could enhance the robustness of the code, especially if it's used in a larger project.
10. Testing Environment: Testing environment with a testing framework like Jest or Mocha, to write unit tests to ensure that class behaves as expected under different conditions.
