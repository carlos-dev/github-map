import React, { Component } from 'react';

import './index.css';

export default class Modal extends Component {
  handleCloseMap = (e) => {
    e.stopPropagation();
    e.target.classList.remove('active')
  }

  handleAddUser = () => {

  }

  render() {
    return (
      <div className="modal" onClick={this.handleCloseMap}>
        <div>
          <h3>Adicionar novo usuário</h3>

          <form onSubmit={this.handleAddUser}>
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
