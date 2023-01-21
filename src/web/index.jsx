import { AppContainer } from "../style/app"
import { Title, TSearch, CardList, Card, Modal, Create } from "./components/Todo/main";
import React from "react";
import { Context } from "../context/curso";




function App() {

  const { Search, task, onComplete, onDelete, ShowModal, isLoad } = React.useContext(Context);

  return (
    <AppContainer>

      <Title/>
      <TSearch/>
      <CardList>
        { isLoad && ( <div>Loading...</div> ) }

        { task.filter((t)=> t.title.toLocaleLowerCase().includes(Search.toLocaleLowerCase()))
        .map((item)=>(<Card item = {item} Complete= {onComplete} Delete = {onDelete}></Card>))}
      </CardList>

      {
        ShowModal && (
          <Modal>
            <Create/>
        </Modal>
        )
      }
      
    </AppContainer>
  );
}


export default App;