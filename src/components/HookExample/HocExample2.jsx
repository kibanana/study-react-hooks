import React, { Component } from 'react';

function logProps(WrappedComponent) {
    return class extends Component {
      componentDidUpdate(prevProps) {
        console.log('Current props: ', this.props);
        console.log('Previous props: ', prevProps);
      }
      render() {
        // 들어온 component를 변경하지 않는 container입니다. 좋아요!
        return <WrappedComponent {...this.props} />;
      }
    }
}