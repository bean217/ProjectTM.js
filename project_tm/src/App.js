import './index.css';
import BackgroundSlider from 'react-background-slider';

import image1 from './assets/bg-1.jpg';
import image2 from './assets/bg-2.jpg';
import image3 from './assets/bg-3.jpg';
import image4 from './assets/bg-4.jpg';
import image5 from './assets/bg-5.jpg';
import React from 'react';

class App extends React.Component {
  form_current;
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <div className="form">Test</div>
  
        <BackgroundSlider 
          images={[image1, image2, image3, image4, image5]}
          duration={8}
          transition={2}
        />
      </div>
        
    );
  }
}


function ErrorForm(props) {
    return (<div className={"error", "form"}>
      {props.msg}
    </div>);
}

export default App;
