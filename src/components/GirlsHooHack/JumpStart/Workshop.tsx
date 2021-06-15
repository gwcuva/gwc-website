interface Props {
    key: string;
    name: string;
    date: string;
    detail: string;
}

function Workshop(props: Props) {
    return (
      <div className="pb-3">
        <h4 className="hack"><b>{props.name}</b></h4>
        <p><b>{props.date}</b></p>
        <p>{props.detail}</p>
      </div>
    );
  }
  
  export default Workshop;