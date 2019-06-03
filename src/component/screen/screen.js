import React, { Component } from 'react';

import './screen.scss';

export default class Screen extends Component {
    constructor() {
        super();
        this.state = {
            glaps: [],          // 存放所有图形

        };
    }

    drop = (e) => {
        e.preventDefault();
        var dropLeft = e.pageX,
            dropTop = e.pageY;

        let oldState = this.state.glaps;

        oldState.push({
            top: dropTop + 'px',
            left: dropLeft + 'px'
        });

        this.setState({
            glaps: oldState
        });

        console.log(e.dataTransfer.getData('src'));
    }

    dragOver(e) {
        e.preventDefault();
    }

    renderAllGlap() {
        let temp = [];

        this.state.glaps.forEach((val, ind) => {
            temp.push(
                <Glap key={ ind } top={ val.top } left={ val.left } />
            );
        });

        return (
            <div>
                { temp }
            </div>
        );
    }

    render() {
        return (
            <div className="screen">
                <div className="screen-show" onDragOver={ this.dragOver } onDrop={ this.drop }>
                    { this.renderAllGlap() }
                </div>
            </div>
        );
    }
}

class Glap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            title: {                    // 标题配置
                text: '啥啥',            // 图形的标题
                color: '',              // 颜色
                fontSize: '',           // 字体大小
                fontFamily: ''          // 字体
            },
            type: '',                   // 图形类型
            width: 1920 / 3,            // 图形宽
            height: 1080 / 3,           // 图形高
            top: this.props.top,        // 图形距离顶部高度
            left: this.props.left,      // 图形距离左侧高度
            border: '1px solid #ccc'
        };
    }

    outerStyle = () => {
        let styles = {};
        
        ['width', 'height'].forEach((val, ind) => {
            styles[ val ] = this.state[val];
        });

        return styles;
    }

    choose = (e) => {
        
    }

    render() {
        let styles = {};

        ['width', 'height', 'top', 'left', 'border'].forEach((val, ind) => {
            styles[ val ] = this.state[val];
        });

        return (
            <div style={ styles } className="grap" onClick={ this.choose }>
                <div className="glap-title">{ this.state.title.text }</div>
                <div className="glap-body"></div>
            </div>
        );
    }
}
/*

        this.id = '';
        this.title = {                    // 标题配置
            text: '啥啥',               // 图形的标题
            color: '',              // 颜色
            fontSize: '',           // 字体大小
            fontFamily: ''          // 字体
        };
        this.type = '';                   // 图形类型
        this.width = '100px';             // 图形宽
        this.height = '100px';            // 图形高
        this.top = '10px';                // 图形距离顶部高度
        this.left = '10px';               // 图形距离左侧高度
{
    id: '',                     // 图形id，唯一
    title: {                    // 标题配置
        text: '啥啥'，               // 图形的标题
        color: '',              // 颜色
        fontSize: '',           // 字体大小
        fontFamily: ''          // 字体
    },
    type: '',                   // 图形类型
    width: '100px',             // 图形宽
    height: '100px',            // 图形高
    top: '10px',                // 图形距离顶部高度
    left: '10px',               // 图形距离左侧高度

}





*/