import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Card = ({logo,company,time,job,salary,location}) => {
  return (
    <div className='card'>
        <div className="container">
        <div className="nav">
            <FontAwesomeIcon className='company-logo' icon={logo} />
            <p>Save<FontAwesomeIcon icon={faBookmark} /></p>
        </div>

        <div className="hero">
            <div className="company">
            <h2>{company}</h2>
            <p>{time}</p>
            </div>
            <div className="position">
                <h1>{job}</h1>
                <div className="level">
                <p>Part-Time</p>
                <p>Senior Level</p>
                </div>
            </div>
        </div>

        <div className="footer">
            <div className="footer-left">
                <h2>${salary}/hr</h2>
                <p>{location}</p>
            </div>
            <div className="footer-right">
                <button>Apply Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card