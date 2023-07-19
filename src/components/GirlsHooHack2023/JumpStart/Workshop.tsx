interface Props {
    name: string;
    date: string;
    detail: string;
    link?: string;
    linkName?: string;
}

function Workshop(props: Props): JSX.Element {
  return (
      <div className="pb-3">
        <h4 className="hack"><b>{props.name}</b></h4>
        <p><b>{props.date}</b></p>
        <p>
          {props.detail}
          {props.link == null ? "" : 
            <a href={props.link} className="text-blue interactive mb-0">
              <br></br>
              <u>{(props.linkName == null || props.linkName.length === 0) ? props.link : props.linkName}</u> &#8599;
            </a>
          }
        </p>
        <p></p>
      </div>
    );
  }
  
  export default Workshop;