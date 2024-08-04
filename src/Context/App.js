import React, { createContext, useContext } from 'react';

// Create a context
const FamilyContext = createContext();

// GrandParent component
const GrandParent = () => {
  const familyInfo = {
    name: "John Doe",
    age: 70
  };

  return (
    <FamilyContext.Provider value={familyInfo}>
      <div className="p-4 border border-gray-300 rounded">
        <h1 className="text-xl font-bold mb-2">GrandParent</h1>
        <Parent />
      </div>
    </FamilyContext.Provider>
  );
};

// Parent component
const Parent = () => {
  return (
    <div className="p-4 border border-gray-300 rounded mt-2">
      <h2 className="text-lg font-semibold mb-2">Parent</h2>
      <Child />
    </div>
  );
};

// Child component
const Child = () => {
  return (
    <div className="p-4 border border-gray-300 rounded mt-2">
      <h3 className="text-md font-medium mb-2">Child</h3>
      <GrandChild />
    </div>
  );
};

// GrandChild component
const GrandChild = () => {
  const familyInfo = useContext(FamilyContext);

  return (
    <div className="p-4 border border-gray-300 rounded mt-2">
      <h4 className="text-sm font-medium mb-2">GrandChild</h4>
      <p>Name: {familyInfo.name}</p>
      <p>Age: {familyInfo.age}</p>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div className="container mx-auto mt-8">
      <GrandParent />
    </div>
  );
};

export default App;