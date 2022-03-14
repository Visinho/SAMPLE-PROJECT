import React, { Component } from 'react';
import { connect } from 'react-redux';

import './styleCss/AddDairy.css';
import { ADD_CRUD } from './reduxStore/Action';
import {ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
const { uuid } = require('uuidv4');

class AddDiary extends Component {
  state = {
    title: " ",
    entries: " ",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSumbmit = (e) => {
    e.preventDefault();
    const data = {
      ...this.state,
       id : uuid(),
       date: Date.now(), 
       isEditing: false 
      }
    this.props.onAddCrud(data)
    ToastsStore.info("Added, Successfully!") 
    e.target.reset()
  }
  render() {
    const { handleChange, handleSumbmit } = this;
    return (
    <div className='formcontainer'>
      <div className='container'>
        <form onSubmit={handleSumbmit} className='formbox card'>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5V5D9F"
      height="0" width="0" style="display:none;visibility:hidden">
        <h3>create new note</h3>
           <div className='input'>
            <input type="text"
              className='inputbox'
              id='title'
              required
              placeholder="Note title"
              onChange={handleChange} />
          </div>

          <div className='input'>
            <input type='text'
              className='inputtext'
              id='entries'
              required
              placeholder="What on your mind"
              onChange={handleChange} />
          </div>
          <button className='btn'>Addnote</button>
          </iframe></noscript>
          <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_CENTER}/>
           </form>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddCrud: (newCrud) => dispatch({ type: ADD_CRUD, payload: newCrud })
  }
}
export default connect(null, mapDispatchToProps)(AddDiary);