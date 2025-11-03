### Higher Order Components (HOCs) in React

So far, we've seen how to write individual components — each with their own logic and UI.

But what if you want to **reuse logic** across multiple components without repeating code?

That's where **Higher Order Components (HOCs)** come in.

### Real-World Analogy

Imagine you run a bookstore.

You have different types of books: Novels, Comics, Magazines.
Now you want to apply a **discount rule** to all of them.

Instead of modifying each book type individually, you create a **wrapper** function — a “discount wrapper” — that adds discount logic to any type of book.

That’s exactly what HOCs do — they **wrap components** and give them extra powers.


Higher Order Components (HOCs) are an advanced technique in React for reusing component logic. HOCs are functions that take a component and return a new component with additional props or behaviors. They can be used to abstract and share functionality across different components without duplicating code.

#### Concept

A Higher Order Component is a function that takes a component and returns a new component.

```jsx
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

#### Detailed Example

Let's create an example to understand HOCs better. We'll create a simple `withLoading` HOC that adds loading functionality to any component.

1. **Creating the HOC:**

```jsx
import React from 'react';

// Higher Order Component
const withLoading = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      // Simulating an async operation like fetching data
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    }

    render() {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLoading;
```

2. **Creating a Wrapped Component:**

```jsx
import React from 'react';

const DataComponent = ({ data }) => {
  return (
    <div>
      <h1>Data Loaded</h1>
      <p>{data}</p>
    </div>
  );
};

export default DataComponent;
```

3. **Using the HOC:**

```jsx
import React from 'react';
import withLoading from './withLoading';
import DataComponent from './DataComponent';

const EnhancedDataComponent = withLoading(DataComponent);

const App = () => {
  return (
    <div>
      <EnhancedDataComponent data="Here is some data!" />
    </div>
  );
};

export default App;
```

#### Explanation

1. **HOC (`withLoading`):**
  - The `withLoading` function is a HOC that takes a component (`WrappedComponent`) and returns a new component.
  - The new component maintains its own state (`isLoading`) and simulates an async operation (like fetching data) in `componentDidMount`.
  - If `isLoading` is `true`, it renders a loading message. Otherwise, it renders the `WrappedComponent` with the passed props.

2. **Wrapped Component (`DataComponent`):**
  - A simple component that displays some data.

3. **Using the HOC:**
  - The `DataComponent` is wrapped with `withLoading` to create `EnhancedDataComponent`.
  - In the `App` component, `EnhancedDataComponent` is rendered, and it shows a loading message for 2 seconds before displaying the data.

### When to Use Higher Order Components

- **Code Reusability:** When you have logic that needs to be reused across multiple components, HOCs can help avoid code duplication.
- **Separation of Concerns:** HOCs can encapsulate specific behaviors or logic, making your components more focused on their primary concerns.
- **Enhancing Existing Components:** When you need to add additional functionality to existing components without modifying them directly.

### When Not to Use Higher Order Components

- **Complexity:** Overusing HOCs can make the code harder to understand and maintain due to the added layers of abstraction.
- **Performance Concerns:** Wrapping components in multiple HOCs can sometimes introduce performance issues due to the increased number of renders.

## When Should You Use an HOC?

Use an HOC when you need to:
- Add **common behavior** (e.g. logging, loading, error handling)
- Wrap many components with the **same logic**
- Separate **logic from presentation**


## Important Notes

- HOCs are just **patterns**, not React features.
- They do **not modify** the original component — they **wrap** it.
- HOCs can become complex when nested — use them wisely.



### Conclusion

HOCs are a powerful tool in React for reusing logic across components. However, they should be used judiciously, considering the complexity and performance implications. With the advent of hooks, many use cases for HOCs can now be achieved more elegantly, so it's essential to evaluate the best approach for your specific scenario.