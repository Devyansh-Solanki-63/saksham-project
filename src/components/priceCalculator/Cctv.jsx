import { useState } from 'react'
import cctv_img from '../../assets/cctv_img.png'

const Cctv = () => {

    const [totalCost, setTotalCost] = useState(1780)
    const [cameraNo, setCameraNo] = useState(1)
    const [cameraType, setCameraType] = useState('null')
    const [storage, setStorage] = useState('null')
    const [configuration, setConfiguration] = useState({
        nvrCost: '200', nvrType: '4',
        poeCost: '300', poeType: '4',
        storageCost: '0', cableCost: '30',
        cameraCost: '1000', cameraInstallationCost: '250',
        showData: false
    })
    const [showBreakdown, setShowBreakdown] = useState(false)
    const [email, setEmail] = useState('')
    const [isDisable, setIsDisable] = useState(true)


    const perfomCalculation = () => {
        let showData = true
        let nvrCost
        let nvrType
        let poeCost
        let poeType
        if (cameraNo <= 32) {
            nvrCost = 800
            poeCost = 1200
            nvrType = 32
            poeType = 32
            if (cameraNo <= 16) {
                nvrCost = 600
                poeCost = 900
                nvrType = 16
                poeType = 16
                if (cameraNo <= 8) {
                    nvrCost = 400
                    poeCost = 600
                    nvrType = 8
                    poeType = 8
                    if (cameraNo <= 4) {
                        nvrCost = 200
                        poeCost = 300
                        nvrType = 4
                        poeType = 4
                    }
                }
            }
        }

        let storageCost
        if (storage === '2') { storageCost = 6000 }
        else if (storage === '1') { storageCost = 3000 }
        else if (storage === '0.5') { storageCost = 1500 }
        else { storageCost = 0 }

        let cableCost = 30 * cameraNo
        let cameraCost = 1000 * cameraNo
        let cameraInstallationCost = 250 * cameraNo

        setConfiguration({ nvrCost, poeCost, nvrType, poeType, storageCost, cableCost, cameraCost, cameraInstallationCost, showData })
        setTotalCost(nvrCost + poeCost + storageCost + cableCost + cameraCost + cameraInstallationCost)
    }

    const checkEmail = (e) => {
        let newEmail = e.target.value
        setEmail(newEmail)

        if(newEmail.includes('@')  &&  newEmail.includes('.com')){
            setIsDisable(false)
        }
        else{
            setIsDisable(true)
        }
    }

    const sendInvoice = () => {
        setShowBreakdown(true)
    }

    return (
        <>
            <div className='container cctv-container mb-5 pb-5'>
                <div className="row mx-0">
                    <div className="col-4 d-flex align-items-end">
                        <div className="content-container">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="pb-3">
                                    <label htmlFor="camType">Type of System : &nbsp;</label>
                                    <select name="camType" id="camType" onChange={(e) => setCameraType(e.target.value)}>
                                        <option value="null">Select Type</option>
                                        <option value="hdd">HD</option>
                                        <option value="ip">IP Camera</option>
                                    </select>
                                </div>
                                <div className="pb-3">
                                    <p className='mb-0'><small>(max camera limit = 32)</small></p>
                                    <label htmlFor="numOfCamera" className='mb-0 mr-2'>Number of Cameras : </label>
                                    <input type="number" id="numOfCamera" className="form-control" value={cameraNo} onChange={(e) => setCameraNo(e.target.value)} />
                                </div>
                                <div className="pb-3">
                                    <label htmlFor="storage">Storage Quantity : &nbsp;</label>
                                    <select name="storage" id="storage" onChange={(e) => setStorage(e.target.value)}>
                                        <option value="null">Select Size</option>
                                        <option value="0.5">512 GB</option>
                                        <option value="1">1 TB (1024 GB)</option>
                                        <option value="2">2 TB (2048 GB)</option>
                                    </select>
                                </div>
                                <button type='submit' className='btn btn-danger my-3 px-3' onClick={perfomCalculation}>Calculate Price</button>
                            </form>
                            { configuration.showData &&
                                <div>
                                    <hr className='bg-secondary my-4 mb-5' />
                                    <div className='mt-4'>
                                        <div>
                                            <label htmlFor="email">Enter Your Email : &nbsp;</label>
                                            <input value={email} onChange={checkEmail} className='form-control' id='email' name='email' type="email" />
                                            <button onClick={sendInvoice} type='submit' className={`btn btn-danger my-3 px-3`} disabled={isDisable}>Send Invoice</button>
                                        </div>
                                        { showBreakdown &&
                                            <>
                                                <h5 className='mb-1 mt-4'>Breakdown of costs</h5>
                                                <div className='breakdown-container border border-dark rounded p-3'>
                                                    <p>NVR Cost : {configuration.nvrCost}/-</p>
                                                    <p>POE Switch Cost : {configuration.poeCost}/-</p>
                                                    <p>Storage Cost : {configuration.storageCost}/-</p>
                                                    <p>Cable Laying Charges : {configuration.cableCost}/-</p>
                                                    <p>Camera Cost : {configuration.cameraCost}/-</p>
                                                    <p>Camera Installation Cost : {configuration.cameraInstallationCost}/-</p>
                                                </div>
                                            </>
                                        }
                                        <h2 className='mt-4'>Total Cost : {totalCost}/-</h2>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                        <div className="img-container">
                            <img src={cctv_img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cctv