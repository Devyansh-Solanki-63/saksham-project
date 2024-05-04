import cctvImg from "../../assets/cctv_img.png"
import droneImg from "../../assets/drone_img.png"
import {Link} from 'react-router-dom'
import './PriceCalculator.css'

const PriceCalculator = () => {
  return (
    <>
      <div className="container calculator-section">
        <div className="row drone-row mx-0">
          <div className="col-4 d-flex justify-content-start align-items-center">
            {/* <HomeContent key={"drone"} urlPath={"/"} heading={"Drone"} text={"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}/> */}
            <div className='home-content'>
                <h4>Modern Technology</h4>
                <h1>Drone</h1>
                <p className='my-4'>Modern Day Land Pricing Solutions</p>
                <Link className='btn btn-danger px-5 py-2' to="/land">Get Estimate</Link>
            </div>
          </div>
          <div className="col-8">
            <img src={droneImg} className='img-fluid' alt="" />
          </div>
        </div>

        <div className="row cctv-row mx-0">
          <div className="col-8">
            <img src={cctvImg} className='img-fluid' alt="" />
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            {/* <HomeContent key={"cctv"} urlPath={"/cctv"} heading={"CCTV"} text={"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}/> */}
            <div className='home-content'>
                <h4>Saksham Technolutions</h4>
                <h1>CCTV</h1>
                <p className='my-4'>CCTV and Surveillance Service providers</p>
                <Link className='btn btn-danger px-5 py-2' to="/cctv">Get Estimate</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PriceCalculator