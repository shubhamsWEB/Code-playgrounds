import React from 'react';
import Editor from '../../pure-components/Editor/Editor';
import './Home.scss';

const Home = () => (
  <>
    <div className="pane top-pane">
      <Editor />
      <Editor />
      <Editor />
    </div>
    <div className="pane">
      <iframe
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  </>
);
export default Home;
