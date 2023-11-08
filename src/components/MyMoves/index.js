import {Component} from 'react'
import Loder from 'react-loader-spinner'
import {FaTruckMoving, FaFileInvoiceDollar} from 'react-icons/fa'
import {BiLogOutCircle} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import {v4} from 'uuid'
import EachMoveCard from '../EachMoveCard'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class MyMoves extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    myMoovesDataList: [],
  }

  componentDidMount() {
    this.getMyMovesData()
  }

  // fetching Moves data
  getMyMovesData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl =
      'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b'

    const response = await fetch(apiUrl)
    // console.log(response)
    const data = await response.json()
    console.log(data)
    const formettedData = data.Customer_Estimate_Flow.map(each => ({
      id: v4(),
      fromAddress: each.from_address,
      movingFrom: each.moving_from,
      totalItems: each.total_items,
      distance: each.distance,
      dateCreated: each.date_created,
      toAddress: each.to_address,
      customStatus: each.custom_status,
      estimateId: each.estimate_id,
      estimateStatus: each.estimate_status,
      movingOn: each.moving_on,
      movingTo: each.moving_to,
      newElevatorAvailability: each.new_elevator_availability,
      newFloorNo: each.new_floor_no,
      newHouseAdditionalInfo: each.new_house_additional_info,
      newParkingDistance: each.new_parking_distance,
      propertySize: each.property_size,
      serviceType: each.service_type,
      userId: each.user_id,
    }))
    console.log(formettedData[0])
    if (response.ok) {
      this.setState({
        myMoovesDataList: formettedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  // Success View
  getSuccessView = () => {
    const {myMoovesDataList} = this.state

    return (
      <ul className="my-moves-data-list">
        {myMoovesDataList.map(eachMove => (
          <EachMoveCard eachItem={eachMove} key={eachMove.id} />
        ))}
      </ul>
    )
  }

  // Loading View
  loadingView = () => (
    <div className="loader-container">
      <Loder type="ThreeDots" color="red" width="50" height="50" />
    </div>
  )

  getRenderViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.loadingView()
      case apiStatusConstants.success:
        return this.getSuccessView()
      case apiStatusConstants.failure:
        return this.failureView()
      default:
        return null
    }
  }

  // My Moves Section
  myMovesSection = () => {
    const {myMoovesDataList} = this.state

    return (
      <div className="my-moves-section">
        <h1>My Moves</h1>
        {this.getRenderViews()}
      </div>
    )
  }

  // Left Side Profile Section
  leftProfileSection = () => (
    <div className="profile-section">
      <ul className="profile-section-list">
        <li className="profile-section-list-item">
          <FaTruckMoving className="profile-side-icon" />
          <h3 className="list-item-heading">MY MOVES</h3>
        </li>
        <li className="profile-section-list-item">
          <BsFillPersonFill className="profile-side-icon" />
          <h3 className="list-item-heading">MY PROFILE</h3>
        </li>
        <li className="profile-section-list-item">
          <FaFileInvoiceDollar className="profile-side-icon" />
          <h3 className="list-item-heading">GET QUOTE</h3>
        </li>
        <li className="profile-section-list-item">
          <BiLogOutCircle className="profile-side-icon" />
          <h3 className="list-item-heading">Logout</h3>
        </li>
      </ul>
    </div>
  )

  render() {
    return (
      <div className="main-container">
        {this.leftProfileSection()}
        {this.myMovesSection()}
      </div>
    )
  }
}

export default MyMoves
