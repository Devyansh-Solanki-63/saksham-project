import { useState } from 'react';
import drone_img from '../../assets/drone_img.png';

const LandPriceCalculator = () => {
    const [area, setArea] = useState('');
    const [unit, setUnit] = useState('sqm');
    const [price, setPrice] = useState('');

    const calculatePrice = () => {
        let areaInSqm;

        switch (unit) {
            case 'sqkm':
                areaInSqm = parseFloat(area) * 1000000;
                break;
            case 'sqm':
                areaInSqm = parseFloat(area);
                break;
            case 'yards':
                areaInSqm = parseFloat(area) * 0.836127;
                break;
            case 'hectare':
                areaInSqm = parseFloat(area) * 10000;
                break;
            case 'acre':
                areaInSqm = parseFloat(area) * 4046.86;
                break;
            case 'sqmile':
                areaInSqm = parseFloat(area) * 2589988.11;
                break;
            default:
                areaInSqm = 0;
        }

        const calculatedPrice = areaInSqm * 100; // Assuming price to be 1000rs per sqkm
        setPrice(calculatedPrice);
    };

    return (
        <>
            <div className='container land-calculator-container mb-5 pb-5'>
                <div className="row mx-0">
                    <div className="col-4 d-flex align-items-end">
                        <div className="content-container">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="pb-3">
                                    <label htmlFor="totalArea">Enter Total Area : &nbsp;</label>
                                    <input type="number" id="totalArea" className="form-control" value={area} onChange={(e) => setArea(e.target.value)} />
                                </div>
                                <div className="pb-3">
                                    <label htmlFor="unit">Unit :</label>
                                    <select name="unit" id="unit" onChange={(e) => setUnit(e.target.value)}>
                                        <option value="sqkm">sqkm</option>
                                        <option value="sqm">sqm</option>
                                        <option value="yards">yards</option>
                                        <option value="hectare">hectare</option>
                                        <option value="acre">acre</option>
                                        <option value="sqmile">square mile</option>
                                    </select>
                                </div>
                                <button type='button' className='btn btn-danger my-3 px-3' onClick={calculatePrice}>Calculate Price</button>
                            </form>
                            {price !== '' &&
                                <div className='mt-4'>
                                    <h2 className='mt-4'>Total Price: {price}/-</h2>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                        <div className="img-container">
                            <img src={drone_img} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandPriceCalculator;
