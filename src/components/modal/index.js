import React, { Component } from 'react';

import './index.css';

export default class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div>
          <h3>Adicionar novo usuário</h3>

          <form>
            <input type="text" />

            <div className="buttons">
              <button>Cancelar</button>
              <button>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
