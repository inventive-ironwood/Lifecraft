var PetCommand = (props) => (
  <div className="pet-commandbar">
    <img className='command' src={props.cmdImg.food} onClick={() => {props.executeCommand('eating')}}/>
    <img className='command' src={props.cmdImg.love} onClick={() => {props.executeCommand('playing')}}/>
    <img className='command' src={props.cmdImg.code} onClick={() => {props.executeCommand('coding')}}/>
    <img className='command' src={props.cmdImg.sleep} onClick={() => {props.executeCommand('sleeping')}}/>
  </div> 
);

window.PetCommand = PetCommand;





