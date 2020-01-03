# Overview 

This is a personal project where I set out to practice refurbishing a React App, in this case a ToDo List, that was initially created using class based components and prop drilling to manage and update state, to utilize Redux. Then after successfully implementing Redux by connecting my components to the store, converting formerly class components into functional components, and reorganzing my file architecture to utilize the Redux conventions of containers, actions, and reducers, I DELETED ALL OF IT and refurbished the project again to use the React Hooks API! This time I around I undid a lot of the file architecture that Redux relies on, and moved all of my components back into the components folder and deleted out the containers, actions, and reducers files entirely. Through the use of useState, useContext, and useReducer I was able to reimplement the same functionality into my ToDo app, and converted all of my components into functional components. 

I was excited to get the hooks functionality working, as some resources I read mentioned that hooks will not be able to completely replace Redux. If anything they are tools that will work nicely together. For instance, with a ToDo App that has a Form which generally requires local state to handle input changes, a base React or Redux application requires that that Form component be class based. Or requires that the Form be dispatching its changes up to the store, to pull them back down again, which is not particularly useful since only the Form will be utilizing that portion of the store. Insert hooks! The useState hook simplifies this process considerably, and allows for the Form component to be functional. As I get more and more familiar with hooks and with Redux, I am sure there will be more rules of thumb when one is preferential over the other. The Redux devtools are extrememly useful when requiring 'time-travel' capabilites and debugging, though I found the React Dev Tools to be just as useful with hooks implemented, though the time-travel feature had been lost. 

Future iterations: I created test files but did not write any tests, so I think that will be a good exercise as well to see how testing evolves alongside the various implementations. 

## APPLICATION IN ACTION 

#### Add ToDos
![2020-01-03 09 28 33](https://user-images.githubusercontent.com/27719824/71735438-aff7ec00-2e0b-11ea-8045-ee773c0a3376.gif)

#### Remove ToDos 

![2020-01-03 09 29 13](https://user-images.githubusercontent.com/27719824/71735399-96ef3b00-2e0b-11ea-81a2-920fc64f3c25.gif)


## SEE FOR YOURSELF 

If you are interested in exploring this application I would recommend cloning down a copy into a local repository and 
``` npm install``` so that you have access to all the react and redux dependencies required for the application to run properly. Then you can run   ```npm start``` to launch a local server in your broswer window and see the application in action.

The master branch was the original starting point, so that will be where you see the more 'traditional' ToDo List implementation. By running ```git fetch``` in the terminal, you should then be able to access the other two feature branches : 'redux' and 'hooks' and be able to see the differences in the file structure, the size of each component, and how state is being passed across the components and managed globally. To switch to those branches run ```git checkout <nameOfBranch>```

Thanks for stopping by and if you have any questions or suggestions on how to better implement you can connect with me via Twitter: @JamesRexMiller4 or by submitting an issue to the repo. 

Happy Coding!
