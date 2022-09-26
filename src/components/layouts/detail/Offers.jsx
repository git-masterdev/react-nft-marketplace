import React, {useState} from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import Button from '@mui/material/Button';
import ethereum_icon from '../../../assets/images/icon/ethereum.svg';
import { Link } from 'react-router-dom';


function Offers(){

    const [data] = useState(
        [
            {
                title: '7.7 WETH',
                nameAuthor: 'Bored Ape Yacht Club',
                volume: '0.078',
                volume_2:'$11,861.08',
                quantity: '25 days',
                from: 'E98DE7',
                to: '---',
                time: '21 seconds ago',
                assets: '23k',
                floor:'8% below'
            },
            {
                title: "7.7 WETH",
                nameAuthor: 'CryptoPunks',
                volume: '0.074',
                volume_2:'$11,861.08',
                quantity: '25 days',
                from: 'E98DE7',
                to: '---',
                time: '21 seconds ago',
                assets: '23k',
                floor:'8% below'
            },
            {
                title: "7.7 WETH",
                nameAuthor: 'Doodles',
                volume: '0.089',
                volume_2:'$11,861.08',
                quantity: '25 days',
                from: 'E98DE7',
                to: '---',
                time: '21 seconds ago',
                assets: '23k',
                floor:'8% below'
            },
            {
                title: "7.7 WETH",
                nameAuthor: 'Moonbirds',
                volume: '0.090',
                volume_2:'$11,861.08',
                quantity: '25 days',
                from: 'E98DE7',
                to: '---',
                time: '21 seconds ago',
                assets: '23k',
                floor:'8% below'
            },
        ]
    )

    const [visible , setVisible] = useState(6);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }
    
    return(<>
    <div className='w-100 mg-t-20'>
        <div className='chart-header flex mg-bt-10'>
            <ViewListIcon className="detail-meta-icon" style={{fontSize:'20px'}}></ViewListIcon>
            <h5>Offers</h5>
        </div>
        <div className='chart-panel row detail-about-card voomio-just-center'>
            <div className="table-ranking">
                <div className="item flex itemcontext-header">
                    <div className="column1 text-left">
                        <h6>Price</h6>
                    </div>
                    <div className="column">
                        <h6>USD Price</h6>
                    </div>
                    <div className="column text-center">
                    <h6>Floor Difference</h6>
                    </div>
                    <div className="column text-center">
                    <h6>Expiration</h6>
                    </div>
                    <div className="column text-center">
                    <h6>From</h6>
                    </div>
                </div>
                {
                    data.slice(0,visible).map((item,index) => (
                        <div key={index} className="fl-item2">
                            <div className="item flex profile-list-item listing">
                                <div className="infor-item flex column1">
                                    <div className="content-collection voomio-mta">
                                        <div className='flex'>
                                            <img className='listing-ethereum' src={ethereum_icon} alt="ethereum_icon"></img>
                                            <h6 className="title">{item.title}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className='profile-item-text'>
                                        <p>{item.volume_2}</p>
                                    </div>
                                </div>
                                <div className="column profile-item-text text-center">
                                    <span>{item.floor}</span>
                                </div>
                                <div className="column profile-item-text text-center">
                                    <span>{item.quantity}</span>
                                </div>
                                <div className="column profile-item-text text-center">
                                    <span className="spec-color-1" >{item.from}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    visible < data.length && 
                    <div className="col-md-12 wrap-inner load-more text-center"> 
                        <Link to="#" id="load-more" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                    </div>
                }
            </div>
        </div>
    </div>
    </>)
}

export default Offers