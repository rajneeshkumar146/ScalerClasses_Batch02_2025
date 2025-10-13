import React from 'react'
import { useContext } from 'react';

// Step 1:
const contextWrapper = React.createContext();

function Context() {
  return (

    // Step 2: Here I'm setting the value =
    <contextWrapper.Provider value="Be Safe">
      <GrandParent />
    </contextWrapper.Provider>
  )
}

function GrandParent() {
  return <>
    <h2>Grand Parent</h2>
    <div>⬇</div>
    <Parent />
  </>
}

function Parent() {
  return <>
    <h2>Parent</h2>
    <div>⬇</div>
    <Children />
  </>
}

function Children() {
  // Step 3: Here we will try to get Value.
  const message = useContext(contextWrapper);
  return <>
    <h2>Children</h2>
    <div>⬇</div>
    {/* Step 4: Here we will use that value. */}
    <div>Hi Rajneesh We hve meesage for you: {message}</div>
  </>
}

export default Context
