
# To Setup:
npx create-react-app my-app
cd my-app
npm start

# npm install react-router-dom


## Please read it.

# Key Points About Dynamic Import
    - Asynchronous Loading: Dynamic import allows you to load modules asynchronously, meaning the rest of your application can continue to run while the module is being fetched.

    - Code Splitting: By using dynamic import, you can split your code into smaller chunks that are loaded on demand. This helps in reducing the initial load time of your application.
    
    - Improved Performance: Loading only the necessary code when it is needed can significantly improve the performance of your application, especially for large applications with many components.
    
    - Better Resource Utilization: Users download only the code they need, which saves bandwidth and results in a more efficient use of resources.


# Dynamic import is a powerful tool for optimizing React applications.
    But, Yes! of course there is a But, There are some cons as well as why only dynamic imports may not be the best techinique for code splitting

    While dynamic import as shown in the example above can be a powerful tool, there are a few reasons why it might not be the best approach for every situation.

        - Manual State Management: In the given example, we manually manage the state for each dynamically imported component. This can become cumbersome and error-prone as the number of components grows, leading to more boilerplate code and potential bugs.
        
        - Lack of Built-in Fallback UI: The example does not provide a built-in way to show a fallback UI while the component is loading. While we can add this manually, it requires additional code and effort. React.Suspense offers a straightforward way to handle this. We will see this next
        
        - Complexity: The code for manually importing and managing state can become complex, especially in larger applications. This complexity can make the code harder to maintain and understand. 
        
        - Best Practices: Using React.lazy and Suspense is a React-recommended approach for code splitting and lazy loading. It leverages React’s built-in mechanisms, ensuring better integration and reliability.