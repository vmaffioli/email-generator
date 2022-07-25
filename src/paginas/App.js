import React from 'react';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";







function App() {




  return (

    <DndProvider backend={HTML5Backend}>


      <div class="container">
        <div class="cabecalho"></div>
        <div class="corpo">
          <div class="janela"></div>
          <div class="selecionaveis"></div>
        </div>
      </div>



    </DndProvider>

  );
}

export default App;
