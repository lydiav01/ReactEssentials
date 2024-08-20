import React from 'react';

export default function App() {
const [initialVal, finalVal] = React.useState(false);
function handleDeleteClick(){
  finalVal(true)

}
function handleProceedClick(){
  finalVal(false);
}
    return (
      <div>
        
        {initialVal ? <div data-testid="alert" id="alert">
         <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleProceedClick}>Proceed</button>
        </div> : ''}
        <button onClick={handleDeleteClick}>Delete</button>
 
      </div>   
    );
}
