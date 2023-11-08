import EachMoveCard from '../EachMoveCard'
import {AiOutlineArrowDown} from 'react-icons/ai'
import './index.css'

const MoveTrackerDetails = () => {
  const ab = 'jay'

  return (
    <div className="move-details-container">
      <div className="info-container">
        <h3>Additional Information</h3>
        <button type="button" className="edit-btn">
          Edit Additional Info
        </button>
      </div>
      <div className="house-info-container">
        <div className="house-detail-heading-container">
          <h3>House Details</h3>
          <button type="button" className="edit-btn">
            Edit House Details
          </button>
        </div>
        <div>
          <div>
            <h5 className="house-heading">Existing House Details</h5>
            <div className="existing-house">
              <div className="house-details">
                <h6>floor No.</h6>
                <p>1</p>
              </div>
              <div className="house-details">
                <h6>Elevator Available</h6>
                <p>Yes</p>
              </div>
              <div className="house-details">
                <h6>Distance from Elevator/ Staircase to truck</h6>
                <p>11 Meters</p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="house-heading">New House Details</h5>
            <div className="existing-house">
              <div className="house-details">
                <h6>floor No.</h6>
                <p>11</p>
              </div>
              <div className="house-details">
                <h6>Elevator Available</h6>
                <p>Yes</p>
              </div>
              <div className="house-details">
                <h6>Distance from Elevator/ Staircase to truck</h6>
                <p>11 Meters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inventory-details">
        <div className="inventory">
          <h5>Inventory Details</h5>
          <button type="button" className="edit-btn">
            Edit Inventory
          </button>
        </div>
        <ul className="inventory-list">
          <li className="inventory-item">
            <div className="inventory-heading">
              <h4>Furniture</h4>
              <AiOutlineArrowDown />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MoveTrackerDetails
