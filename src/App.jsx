import { useEffect } from "react";
import userData from "./data/data";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data/data.json"); // Replace with the path to your JSON file
      const data = await response.json();

      setUsers(data);
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-red-200 flex flex-col justify-center items-center gap-4">
        <h1 className="text-bold text-xl font-bold">
          Todo list that come from a data.js file in src directory(import)!
        </h1>
        <div className="flex flex-col gap-4 p-4">
          <h3 className="font-bold text-lg">Todo List</h3>
          <ul>
            {userData.map((d) => (
              <li className="font-bold text-blue-900" key={d.id}>
                {d.id}. {d.name} - {d.age}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-green-200 flex flex-col justify-center items-center gap-4">
        <h1 className="text-bold text-xl font-bold">
          Todo list that come from a data.js file in public directory(fetch and
          useEffect)!
        </h1>
        <div className="flex flex-col gap-4 p-4">
          <h3 className="font-bold text-lg">Todo List</h3>
          <ul>
            {users.map((d) => (
              <li className="font-bold text-blue-900" key={d.id}>
                {d.id}. {d.name} - {d.age}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
