import React, { Component } from 'react';
import './App.css'

class App extends Component {
    constructor() {
      super();
    }
    
    carregarArquivo = () => {
      if (window.File && window.FileReader && window.FileList && window.Blob) {
           const preview = document.getElementById('mostrar-texto');
           const file = document.querySelector('input[type=file]').files[0];
           const reader = new FileReader()
  
           const textFile = /text.*/;
  
           if (file?.type.match(textFile)) {
              reader.onload = function (event) {
                 preview.innerHTML = event.target.result;
              }

              reader.readAsText(file);
           } else {
              preview.innerHTML = "<span class='error'>Não é um arquivo de texto!</span>";
           }
    
  
     } else {
        alert("Erro ao carregar arquivo");
     }
    }
  
    render() {
      return (
        <div className="container">
            <div id="mostrar-texto">Escolha um arquivo de texto</div>
          <input className="button" type="file" onChange={this.carregarArquivo} />
        </div>
      );
    }
  }

export default App; 
