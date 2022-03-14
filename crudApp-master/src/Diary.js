import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpenText, faPenSquare, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import './styleCss/Dairy.css'
import { EDIT_CRUD, UPDATE_CRUD, DELETE_CRUD } from './reduxStore/Action';

class Diary extends Component {

    handleUpdate = (i) => {
        this.props.onUpdateCrud({
              ...this.props.dairy[i],
              title: this.title.value,
              entries: this.entries.value,
        });
    }
    render() {
        const { dairy, onEditCrud, onDeleteCrud } = this.props;
        const dairyList = dairy.map((entries, index) => {

            return entries.isEditing === true ? (
                <div key={index} className='update'>
                    <div><input type="text" className='updatetitle' ref={(newVal) => { this.title = newVal }} defaultValue={entries.title} /></div>
                    <div><textarea type="text" className='updateentries' ref={(newVal) => { this.entries = newVal }} defaultValue={entries.entries}/></div>
                    <div>
                        <button onClick={() => this.handleUpdate(index)} className="btnblue">Update</button>
                    </div>
                    <div className='span'><span></span></div>
                </div>
            ) : (<div key={index} className='entries'>
                <div className='date'>{moment(entries.date).calendar()}</div>
                <div className='content'>{entries.entries}</div>
                <div className='title'>{entries.title}</div>
                <div className='btn'>
                <button className="btnblack" onClick={() => onEditCrud(index)}><FontAwesomeIcon icon={faPenSquare} /></button>  
                     <button className="btnred" onClick={() => onDeleteCrud(entries.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
                 <div className='span'><span></span></div>
            </div>);
        });

        return (
            <div className='entrybox'>
                <div>
                    <div className='entrylength'><FontAwesomeIcon icon={faEnvelopeOpenText}/> Entries<span>{dairyList.length}</span></div>
                    <div className='entrylist'>{dairyList}</div>
                </div>
            </div>
        );
    }

}
// componentDidUpdate() {
//     localStorage.setItem("stateCruds", JSON.stringify(state.cruds));
// };

// componentDidMount() {
//     const stateCruds = JSON.parse(localStorage.getItem("stateCruds"));
//     if (stateCruds !== null) {
//         return {dairy: stateCruds };
//     }
// }

const mapStateToProps = state => {
    return { dairy: state.cruds };
}


const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteCrud: (id) => dispatch({ type: DELETE_CRUD, payload: id }),
        onEditCrud: (id) => dispatch({ type: EDIT_CRUD, payload: id }),
        onUpdateCrud: (data) => dispatch({ type: UPDATE_CRUD, payload: data })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Diary);