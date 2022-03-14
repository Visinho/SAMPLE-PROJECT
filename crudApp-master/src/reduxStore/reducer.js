import { ADD_CRUD, EDIT_CRUD, UPDATE_CRUD, DELETE_CRUD } from '../reduxStore/Action';

const initialState = {
	cruds: [
		
	]
}
const reducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_CRUD:
			
			let crud = [...state.cruds, action.payload]
			return {
				...state,
				cruds: crud,
			}
		case EDIT_CRUD:
			let editCrud = state.cruds
			editCrud[action.payload].isEditing = true;
			return {
				...state,
				cruds: [...editCrud]
			}
		case DELETE_CRUD:
			let deletedCrud = state.cruds.filter(deletCrud => {
				return deletCrud.id !== action.payload;
			})
			return {
				...state,
				cruds: deletedCrud
			}
		case UPDATE_CRUD:
			const updated = state.cruds.map(crud => {
				if (crud.id === action.payload.id) {
					crud.title = action.payload.title || crud.title;
					crud.entries = action.payload.entries || crud.entries;
					crud.isEditing = false;
				}
				return crud
			})
			return { ...state, cruds: updated}
		default:
			return state;
	}

}

export default reducer;