import axios from 'axios'
export const READ_POSTS = 'READ_POSTS'

const ROOT_URL = 'http://test.local/wp-json/wp/v2'
const QUERYSTRING = '?per_page=100'

export const readPosts = () => async dispatch => {
	const response = await axios.get(`${ROOT_URL}/posts${QUERYSTRING}`)
	dispatch({type: READ_POSTS, response})
}
