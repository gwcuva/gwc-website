import { Col } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';

interface Props {
  mem: {
    id: string,
    name: string,
    position: string,
    headshot: { url: string },
    linkedin: string;
  }
}

function Profile(props: Props) {

  const mem = props.mem

  const positions = new Map([
    ["President", "President"],
    ["VP", "Vice President"],
    ["Treasurer", "Treasurer"],
    ["Secretary", "Secretary"],
    ["Membership", "Director of Membership"],
    ["Curriculum", "Director of Curriculum"],
    ["Hackathon", "Director of Hackathon"],
    ["PR", "Director of Public Relations"]
  ])

  return (
    <Col xs={6} md={4}>
      <a href={`https://linkedin.com/in/${mem.linkedin}`} target="_blank" rel="noopener noreferrer" className='text-center underline'>
        <div className="justify-content-center">{mem.headshot.url && <img width={isMobile ? "100px" : "156px"} height={isMobile ? "100px" : "156px"} className="circleImg" src={mem.headshot.url} alt={`Headshot of ${mem.name}`} />}</div>
        <p className="text-peacock mt-2 mb-0 text-center">{mem.headshot.url && mem.name}</p>
        <p className="text-peacock p2 text-center">{mem.position && positions.get(mem.position)}</p>
      </a>
    </Col>
  );
}

export default Profile;
