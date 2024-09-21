import List from './List.jsx'

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "orange", calories: 60 },
    { id: 4, name: "mango", calories: 100 },
    { id: 5, name: "pineapple", calories: 82 },
    { id: 6, name: "strawberry", calories: 33 },
    { id: 7, name: "grape", calories: 67 },
    { id: 8, name: "kiwi", calories: 61 },
    { id: 9, name: "pear", calories: 60 },
    { id: 10, name: "peach", calories: 68 },
  ]

  const vegetables = [
    { id: 1, name: "cucumber", calories: 16 },
    { id: 2, name: "carrot", calories: 45 },
    { id: 3, name: "broccoli", calories: 55 },
    { id: 4, name: "spinach", calories: 23 },
    { id: 5, name: "tomato", calories: 22 },
    { id: 6, name: "pepper", calories: 49 },
    { id: 7, name: "onion", calories: 44 },
    { id: 8, name: "mushroom", calories: 22 },
    { id: 9, name: "zucchini", calories: 25 },
    { id: 10, name: "beetroot", calories: 45 },
  ]
  return (
    <>
      <List category="Vegetables" items={vegetables} /><List category="Fruits" items={fruits}/>
    </>
  );
}

export default App
