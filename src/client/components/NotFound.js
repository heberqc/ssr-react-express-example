import React from 'react';

const App = ({ staticContext = {} }) => {
    staticContext.status = 404;
    return (
      <div>
        <h1>404 Not Found</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam natus quae voluptas, molestias maiores quas. Possimus tenetur fugiat tempore amet? Harum unde non ratione eaque tempora. Vitae quam inventore nostrum!</p>
      </div>
    );
};

export default App;
