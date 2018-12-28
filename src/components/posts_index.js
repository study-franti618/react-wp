import React, {Component} from 'react';
import {connect} from 'react-redux'
import _ from 'lodash'

import {readPosts} from '../actions'


class PostsIndex extends Component {
    componentDidMount() {
        this.props.readPosts()
    }

    renderPosts() {
        return _.map(this.props.posts, post => (
            console.log(post)
        ))
    }

    render() {
        // const props = this.props

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderPosts()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({ posts: state.posts})

const mapDispatchToProps = ({readPosts})

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)
