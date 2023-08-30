 // not so truvial pursuit

// an application (using the open trivia api and firebase) that lets us generate customizable trivia games for parties, with the ability to save these games for play at a future date 


// MVP

// Start with just 1 player!!!
// leaderboards are part of the mvp

// 1. Initialize Firebase
//    - Import and initialize the Firebase SDK with your project's configuration.

// 2. Create State Variables
//    - Create state variables*, such as: 
//      - questions (array to hold fetched questions)
//      - selectedCategory (string to hold selected category ID)
//      - numOfQuestions (number to hold selected number of questions)
//      - loading (boolean for API loading state)
//      - error (string for error handling)

//* example variables, may change in development process

// 3. Fetch Categories from Open Trivia Database API
//    - Use an effect to fetch categories on component mount
//    - Store categories in a state variable

// 4. Define a function ton fetch questions from the API
//   - Inside the function:
//      - Set error to an empty string
//      - Make an API request to the Open Trivia Database API using state variables
//      - On success:
//        - Set questions state with fetched questions
//      - On error:
//        - Set error state with an error message  

// 5. Define saveGame Function (the complexity of this will vary depending on mvp or stretch goal)
//    - Define a function named saveGame to save the current game to Firebase
//    - Inside the function:
//      - Create a reference to the Firebase database collection for saved games
//      - Add the current questions and relevant data to the collection

// 6. Create JSX for the App Component
//    - Render a div element containing:
//      - An h1 heading with the title of the app
//      - Inside another div:
//        - A select element with options for categories (map over categories state)
//        - An input element for selecting the number of questions (controlled by numOfQuestions state)
//        - A button to trigger the fetchQuestions function
//      - If questions array has elements:
//        - Render the fetched questions with options for a trivia game
//        - Render a button to trigger the saveGame function

// 7. Implement User Interactions
//    - Attach event handlers to the select element (onChange)
//      - Update selectedCategory state when a category is selected
//    - Attach event handlers to the input element (onChange)
//      - Update numOfQuestions state when the input changes
//    - Attach an event handler to the "Generate Questions" button (onClick)
//      - Call the fetchQuestions function
//    - Attach an event handler to the "Save Game" button (onClick)
//      - Call the saveGame function

// 8. Export the App Component
//    - Export the App component as the default export

// 9. Styling and stuff 


// Stretch goals

// Potentially more players - aim for 2, but if it can be a component then its infinitely scaleable in theory!

// total game history instead of just leaderboards?

// 10. Use Firebase Authentication (Optional)
//    - Implement user authentication with Firebase Authentication if needed
//    - Allow users to sign in to save and view their games

// 11. Add loading animations

// 12. Enhanced UI animations

// 13. Users can set the difficulty

// 14. Users can mix question types (MC and True/False)