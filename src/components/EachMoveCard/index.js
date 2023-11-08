import {Link} from 'react-router-dom'
import {
  AiOutlineArrowRight,
  AiFillHome,
  AiOutlineFieldTime,
  AiOutlineInfoCircle,
} from 'react-icons/ai'
import {FaBoxes} from 'react-icons/fa'
import {GiPathDistance} from 'react-icons/gi'

import './index.css'

const EachMoveCard = props => {
  const {eachItem} = props
  const {
    fromAddress,
    movingFrom,
    totalItems,
    distance,
    dateCreated,
    toAddress,
    customStatus,
    estimateId,
    estimateStatus,
    movingOn,
    movingTo,
    newElevatorAvailability,
    newFloorNo,
    newHouseAdditionalInfo,
    newParkingDistance,
    propertySize,
    serviceType,
    userId,
  } = eachItem
  return (
    <li>
      <Link to="/moveDetails" className="move-item">
        <div className="from-to-container">
          <div className="from">
            <h4>From</h4>
            <p>{movingFrom}</p>
          </div>
          <div className="arrow-icon-container">
            <AiOutlineArrowRight className="arrow-icon" />
          </div>
          <div className="to">
            <h4>To</h4>
            <p>{movingTo}</p>
          </div>
          <div className="request">
            <h4>Request#</h4>
            <p className="request-para">{estimateId}</p>
          </div>
        </div>
        <div className="details-container">
          <div className="detail">
            <AiFillHome className="details-icon" />
            <p>{propertySize}</p>
          </div>
          <div className="detail">
            <FaBoxes className="details-icon" />
            <p>{totalItems}</p>
          </div>
          <div className="detail">
            <GiPathDistance className="details-icon" />
            <p>{distance}</p>
          </div>
          <div className="detail">
            <AiOutlineFieldTime className="details-icon" />
            <p>{dateCreated}</p>
          </div>
          <div className="detail">
            <button type="button" className="view-more-btn">
              View More Details
            </button>
            <button type="button" className="quotes-btn">
              Quotes Awaiting
            </button>
          </div>
        </div>

        <div className="disclimer">
          <AiOutlineInfoCircle size="22px" color="rgb(255, 102, 0)" />
          <p className="info">
            <strong>Disclimer: </strong>
            Please Update your move date before two days of shifting
          </p>
        </div>
        <hr />
      </Link>
    </li>
  )
}

export default EachMoveCard
