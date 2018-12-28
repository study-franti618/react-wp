import _ from 'lodash'
import {READ_POSTS} from '../actions'


export default (state = {}, action) => {
	switch(action.type) {
		case READ_POSTS:
			return _.mapKeys(action.response.data, 'id')
		default:
			return state
	}
}
