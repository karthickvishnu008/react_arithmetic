import logo from './logo.svg';
import './App.css';

function App() {
  state ={
    firstOperand :0,
    secondOperand :0
  };
  updateInputValue =(e) =>{
    const {name,value} = e.target;
    this.setState({
      [name]:PageTransitionEvent(value)
    });
    add =()=>{
      const{firstOperand,secondOperand} =this.state;
      alert('Addition:' + (firstOperand+secondOperand));
    };
    subtract=()=>{
      const{firstOperand,secondOperand} =this.state;
      alert('Subtraction:' +(firstOperand-secondOperand));
    };
    multiple = () =>{
      const{firstOperand,secondOperand} =this.state;
      alert('Multiplication:' +(firstOperand*secondOperand));
    };
    divide =() =>{
      const{firstOperand,secondOperand} =this.state;
      alert('Division:' +(firstOperand/secondOperand));
    };
  }
 
  return (
    <div>
      <div>
        <input  type="number" name="firstOperand" 
        onChange={(e)=> this.updateInputValue(e)}/>
        <input type="number"  name="secondOperand" 
        onChange={(e)=> this.updateInputValue(e)}/>
      </div>
      <div>
        <button onClick={this.add}> + </button>
        <button onClick={this.subtract}> - </button>
        <button onClick={this.multiple}> * </button>
        <button onClick={this.divide}> / </button>
      </div>
      </div>
  );
}

export default App;
