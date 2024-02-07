import React from 'react'
import Layout from '../components/Layout/Layout'
import { 
    BiMailSend,
    BiPhoneCall,
    BiSupport
} from 'react-icons/bi'

const Contact = () => {
  return (
    <Layout title="Contact us - ProTechHub">
        <div className='row contactus'>
            <div className='col-md-6'>
                <img 
                    src='/images/contactus.jpg'
                    alt='contactus'
                    style={{ width: "100%"}}  
                />
            </div>
            <div className='col-md-4'>
                <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
                <p className='text-justify mt-2'>
                    Any query and info about product feel free to call anytime we 24x7 available for our clients.
                </p>
                <p className='mt-3'>
                    <BiMailSend /> : www.help@protechhub.com
                </p>
                <p className='mt-3'>
                    <BiPhoneCall /> : 0123-456-789
                </p>
                <p className='mt-3'>
                    <BiSupport /> : 1800-1000-1000 (toll free)
                </p>
            </div>
        </div>
    </Layout>
  );
};



export default Contact