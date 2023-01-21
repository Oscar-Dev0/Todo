import React, { createContext } from "react";
import useStorage from "../hooks/useStorage";

const Context = createContext();

const Provider = ({children})=>{
    const { data: task, saveData: setTask, isError, isLoad } = useStorage("tasks", []);
    const [ Search, setSearch ] = React.useState("");
    const [ ShowModal, SetShow] = React.useState(false);
    const [ word, SetWord ] = React.useState("");
  
  
  const taskcount = task.length;
  const completedtask = task.filter((t)=> t.completed === true).length;
  
  const onComplete = (item)=>{
    const newTask = task.map((t)=>{
      if(t.title === item.title){
        return{
          ...t,
          completed: !t.completed,
        };
      };
      return t;
    });
    setTask(newTask);
  };
  
    const onSearch = (item)=>{
      setSearch(item.target.value);
    };
  
    const onDelete = (item)=>{
      const newTask = task.filter((t)=> t.title !== item.title);
      setTask(newTask);
    };
  
    const onModal = ()=>{
      SetShow(true);
    };
  
    const ofFModal = ()=>{
      SetShow(false);
    };
  
    const SetTask = (e)=>{
      e.preventDefault();
      const newTask = [...task, { title: word, completed: false}];
      setTask(newTask);
      SetWord("");
      SetShow(false);
    };
  
  const NewWord = (e)=>{
    SetWord(e.target.value)
  };

    return (
        <Context.Provider  value={
            {
                ShowModal,
                Search,
                search: Search,
                task,
                onComplete,
                onDelete,
                onSearch,
                add: onModal,
                ofFModal,
                SetTask,
                New: NewWord,
                two: taskcount,
                one: completedtask,
                isError,
                isLoad,
            }
        }>
            {children}
        </Context.Provider>
        );
};

export { Provider, Context };
