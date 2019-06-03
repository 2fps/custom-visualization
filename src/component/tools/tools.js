import React, { Component } from 'react';

import screen from '../../store/action/screen';

import './tools.scss';

export default class Tools extends Component {
    dragStart = (e) => {
        e.dataTransfer.setData('src', 'src/img/bar-simple.png');
        // debugger;
        screen.dragStart({ceshi: 1});
    }
    render() {
        return (
            <div className="tools">
                <div className="graphic" draggable="true" onDragStart={ this.dragStart }>
                    <img src="src/img/bar-simple.png" width="100%" height="100%" />
                </div>
                <div className="graphic" draggable="true"></div>
                <div className="graphic" draggable="true"></div>
            </div>
        );
    }
}