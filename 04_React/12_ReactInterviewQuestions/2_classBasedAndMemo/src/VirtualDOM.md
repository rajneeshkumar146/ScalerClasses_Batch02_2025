To understand how React is fast and efficient, we need to understand how it **renders UI** behind the scenes.


## DOM

DOM stands for **Document Object Model**. It represents the structure of your webpage — like a **tree of elements**: buttons, paragraphs, images, etc.

Whenever something changes in the UI (like a button click or input text), the DOM needs to **update and redraw** that part of the screen.

But here’s the catch:

> **Direct manipulation of the DOM is slow**, especially when done frequently.


## What makes DOM manipulation slow?
The DOM is represented as a tree data structure. Because of that, the changes and updates to the DOM are fast. But after the change, the updated element and its children have to be re-rendered to update the application UI. 

The re-rendering or re-painting of the UI is what makes it slow. 

Therefore, the more UI components you have, the more expensive the DOM updates could be, since they would need to be re-rendered for every DOM update.

DOM manipulation is the heart of the modern, interactive web. Unfortunately, it is also a lot slower than most JavaScript operations. This slowness is made worse by the fact that most JavaScript frameworks update the DOM much more than they have to.

### Example of Wasteful DOM Update

As an example, let’s say that you have a list that contains ten items. You check off the first item. Most JavaScript frameworks would rebuild the entire list. 

That’s ten times more work than necessary! Only one item changed, but the remaining nine get rebuilt exactly how they were before.

Rebuilding a list is no big deal to a web browser, but modern websites can use huge amounts of DOM manipulation. Inefficient updating has become a serious problem. To address this problem, the people at React popularized something called the virtual DOM.


## The Virtual DOM
In React, for every DOM object, there is a corresponding “virtual DOM object.”

A virtual DOM object is a representation of a DOM object, like a lightweight copy. 

A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.

“The Virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.”

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.


### How is Virtual DOM faster?

When new elements are added to the UI, a virtual DOM, which is represented as a tree is created. 

Each element is a node on this tree.

If the state of any of these elements changes, a new virtual DOM tree is created. 

This tree is then compared or “diffed” with the previous virtual DOM tree.

Once this is done, the virtual DOM calculates the best possible method to make these changes to the real DOM. This ensures that there are minimal operations on the real DOM. Hence, reducing the performance cost of updating the real DOM.

The image below shows the virtual DOM tree and the diffing process.

<img src='https://miro.medium.com/v2/resize:fit:1400/format:webp/0*Ps8GIxbQspLkXXDC'>

The red circles represent the nodes that have changed. These nodes represent the UI elements that have had their state changed. The difference between the previous version of the virtual DOM tree and the current virtual DOM tree is then calculated. The whole parent subtree then gets re-rendered to give the updated UI. This updated tree is then batch updated to the real DOM.

So,
React uses it like this:

1. **Render UI** → in memory (Virtual DOM)
2. **Compare** it with the previous version (diffing)
3. **Update** only the changed parts in the real DOM (reconciliation)


Process of Reconciliation

<img src='https://miro.medium.com/v2/resize:fit:1276/format:webp/1*InX4By1HRVlNV2qqAMXtMA.jpeg'>

### How does React use Virtual DOM?
Now that you have a fair understanding of what a Virtual DOM is, and how it can help with the performance of your app, let's look into how React leverages the virtual DOM.

1. React follows the observable pattern and listens for state changes.
2. In React every UI piece is a component, and each component has a state. When the state of a component changes, React updates the virtual DOM tree. 

3. Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. This process is called “diffing”.

4. Once React knows which virtual DOM objects have changed, then React updates only those objects, in the real DOM. This makes the performance far better when compared to manipulating the real DOM directly. This makes React stand out as a high-performance JavaScript library.



5. React follows a batch update mechanism to update the real DOM.
Hence, leading to increased performance. This means that updates to the real DOM are sent in batches, instead of sending updates for every single change in state.

The repainting of the UI is the most expensive part, and React efficiently ensures that the real DOM receives only batched updates to repaint the UI.


3. React follows an efficient Diffing Algorithm
React implements a heuristic O(n) algorithm based on two assumptions:

a. Two elements of different types will produce different trees.
b. The developer can hint at which child elements may be c. stable across different renders with a key prop.
d. In practice, these assumptions are valid for almost all practical use cases.

When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of root elements.



### Elements Of Different Types

- Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch.

- When tearing down a tree, old DOM nodes are destroyed. Component instances receive componentWillUnmount(). When building up a new tree, new DOM nodes are inserted into the DOM.
- Any state associated with the old tree is lost.
Any components below the root will also get unmounted and have their state destroyed. For example, when diffing:


```
<div>
  <Counter />
</div>

<span>
  <Counter />
</span>

```

This will destroy the old Counter and remount a new one.


### Recursing On Children Issue

By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there’s a difference.

For example, when adding an element at the end of the children, converting between these two trees works well:

```html
<ul>
  <li>first</li>
  <li>second</li>
</ul>
<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```

React will match the two <li>first</li> trees, match the two <li>second</li> trees, and then insert the <li>third</li> tree.

If you implement it naively, inserting an element at the beginning has worse performance. For example, converting between these two trees works poorly:

```html
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```
React will mutate every child instead of realizing it can keep the <li>Duke</li> and <li>Villanova</li> subtrees intact. This inefficiency can be a problem.


### Use of Keys
In order to solve this issue, React supports a key attribute. When children have keys, React uses the key to match children in the original tree with children in the subsequent tree. For example, adding a key to our inefficient example above can make the tree conversion efficient:

```html
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

Now React knows that the element with key '2014' is the new one, and the elements with the keys '2015' and '2016' have just moved.

In practice, finding a key is usually not hard. The element you are going to display may already have a unique ID, so the key can just come from your data:


```html
<li key={item.id}>{item.name}</li>
```

In this way you can use Keys for better performance in React!

## Summary

| Concept              | What it Means                                                                 |
|----------------------|--------------------------------------------------------------------------------|
| Real DOM             | The actual UI structure shown in the browser                                  |
| Virtual DOM          | A fast, in-memory copy of the DOM used by React                               |
| Reconciliation       | Comparing new and old virtual DOMs to find what needs to change               |
| Diffing              | The process of identifying minimal changes                                     |
| Keys                 | Help React identify which list items changed, added, or were removed          |