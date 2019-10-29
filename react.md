# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1a. Indicate which of the following statements about React are false:

- React is a modern, efficient answer to complex UI applications (true/false)
  True
  True - React is a great fit for web applications where you need complex, interactive UI in sync with frequent changes in the underlying data.

- React will only render on the server using Node.js (true/false)
  True
  True - node will render React on the server side to keep the JS from rendering on the web side.

- React is a full stack framework for modern web applications (true/false)
  False. React is front-end.
  False - React is a frontend library.

- React is a flexible library that plays the role of V in an MVC framework (true/false)
  Not sure what MVC stands for...False?
  True - model view controller. React is often referred to as the view in MVC.

- You should always update a component's state directly using this.state (true/false)
  True.
  True - using this.state will allow the update to be re rendered

- React is made up of encapsulated components that manage their own state (true/false)
  True.
  True - React is is used to build encapsulated components that manage their own state, then compose them to make complex UIs.

- React components render HTML (true/false)
  True.
  True. React knows to only update text components that need updating.


1b. Add an interesting TRUE fact about React to the list.
React was created by Facebook due to their website having several components to reduce the refresh time of the website.

2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer: I think smart components could be manipulated while dumb components could not.

  Researched answer: Smart components are app level components that perform functions and manage data while dumb components focus solely on the UI. Dumb components are mainly just renders and are JS functions. Once it renders, it's done. Smart components deal with the state changes.



3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: yarn is adding the yarn files necessary to run a server to reflect the React app.

  Researched answer: yarn also installs the json files necessary to describe the contents.



4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer: Component state is the parent. Prop is the child.

  Researched answer: State is data maintained within a component is updated by that component using setState. Props is data passed in from a parent component and is read-only in the child component.



5. How would you explain state to a friend who doesn't know code?

  Your answer: State is the information contained in a component. For example, a list of personal information may have a state that contains everyone's names, phone numbers, emails, etc. It can be changed if anyone needed to update their personal info.