import MainLayout from "./layouts/MainLayout";
import ContentLayout from "./layouts/ContentLayout";
import InputTodo from "./modules/InputTodo";
import ListTodo from "./modules/ListTodo";
import { useState } from "react";

const App = () => {
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const getTodo = (id, todo) => {
    setId(id);
    setTodo(todo);
    setIsUpdate(true);
  };

  const updateDone = () => setIsUpdate(false);

  return (
    <MainLayout>
      <ContentLayout>
       <div className="container-sub">
       <h1 className="">
          What's the plan for today ?
        </h1>
       </div>
        <div className="">
          <InputTodo
            id={id}
            todoUpdate={todo}
            isUpdate={isUpdate}
            done={updateDone}
          />

          <ListTodo getTodo={getTodo} />
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export default App;
