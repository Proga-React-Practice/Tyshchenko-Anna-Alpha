import "./App.css";
import Form, { FormData } from "./components/Form.tsx";
import Cards from "./components/Cards.tsx";
import { useState } from "react";

function App() {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);

  const handleFormSubmit = (data: FormData) => {
    if (formDataList.length === 4) {
      setFormDataList((prevDataList) => prevDataList.slice(1).concat(data));
    } else {
      setFormDataList((prevDataList) => [...prevDataList, data]);
    }
  };
  return (
    <div className="App">
      <div className="content">
        <Form onSubmit={handleFormSubmit} />
        <ul className="cardscontent">
          {formDataList.map((formData, index) => (
            <li key={index}>
              <Cards data={formData} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
