import React, { Component } from 'react';

class DataSource extends Component {
    render() {
        return <></>;
    };
}

class CommentList extends Component {
  render() {
      return <></>;
  };
}

class BlogPost extends Component {
  render() {
      return <></>;
  };
}

const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);

function withSubscription(WrappedComponent, selectData) {
  // ...다른 컴포넌트를 반환하는데...
  return class extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props) // getBlogPost, getComments
      };
    }

    componentDidMount() {
      // ... 구독을 담당하고...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      /// ... 구독취소를 담당하고...
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... 래핑된 컴포넌트를 새로운 데이터로 랜더링 합니다!
      // 컴포넌트에 추가로 props를 내려주는 것에 주목하세요.
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
