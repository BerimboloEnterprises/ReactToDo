import React from 'react';
import TodosListHeader from './header';
import TodosListItem from './todo-list-item';
import _ from 'lodash';


export default class TodosList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');

        return _.map(
            this.props.todos
            , (todo, index) => <TodosListItem key={index} {...todo} {...props } />);
    }

    render() {
        return (
            <table>
                <TodosListHeader />
                <tbody>
                {this.renderItems()}
                </tbody>
            </table>
        );
    }
}