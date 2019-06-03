import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Tools from '../../component/tools/tools';
import Screen from '../../component/screen/screen';
import Property from '../../component/property/property';

import store from '../../store/store';

export default class Index extends Component {
    componentWillMount() {
        // alert();
    }
    render() {
        return (
            <Provider store={store}>
                <Tools />
                <Screen />
                <Property />
            </Provider>
        );
    }
}