import React from 'react';
import { render } from 'react-dom';

const Application: React.FC = () => (
  <p>Works!</p>
);

render(<Application />, document.getElementById('root'));
