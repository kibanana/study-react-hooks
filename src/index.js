import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch
} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function BlogPostList() {
  const history = useHistory();
  let location = useLocation();
  const match = useRouteMatch('/blog/posts/:id');

  const posts = ['asdf1', 'asdf2', 'asdf3'];

  const handleLinkButtonClick = () => history.push(`/blog/posts/${posts[0]}`);
  
  return (
    <>
      <ul>
        {
          posts && posts.map(post => (
            <li><Link to={`/blog/posts/${post}`}>{post}</Link></li>
          ))
        }
        <li>이건 useRouteMatch로 체크한 것: {String(match)}</li>
        <li>location: {String(JSON.stringify(location))}</li>
      </ul>
      <button type="button" onClick={handleLinkButtonClick}>Go first blog post</button>
    </>
  );
}

function BlogPostItem() {
  const history = useHistory();
  let location = useLocation();
  const { id } = useParams();
  const match = useRouteMatch('/blog/posts/:id'); // object or null

  const handleLinkButtonClick = () => history.push('/blog/posts');

  return (
    <div>
      <div>
        <Link to="/blog/posts">목록으로</Link>
      </div>
      <div>Now showing post {id}</div>
      <button type="button" onClick={handleLinkButtonClick}>Go blog post list</button>
      <div>이건 useRouteMatch로 체크한 것: {String(JSON.stringify(match))}</div>
      <div>location: {String(JSON.stringify(location))}</div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/blog/posts" exact>
          <BlogPostList />
        </Route>
        <Route path="/blog/posts/:id" exact>
          <BlogPostItem />
        </Route>
      </Switch>
    </Router>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();