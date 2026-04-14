import React, { useEffect, useState } from 'react'
import ContactIMg from "../../../assets/images/contact.jpg"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom'

import "./Services.css";
import { toast } from 'react-toastify';
import api from '../../../config/axios_instance';
import { ENV } from '../../../config/config';
import FullPageLoader from '../PageNotFound/FullPageLoader';
function Services() {

    const [isLoading, setIsLoading] = useState(true);

    const schema = yup.object().shape({
        name: yup.string().required('Name is required'),
        fee: yup.number().transform(value => isNaN(value) ? undefined : value).default(0).min(1000, 'Fee must be at least 1000').required('Fee is required'),
        zoom: yup.string().required('Zoom link is required'),
        description: yup.string().required('Description is required'),
        status: yup.boolean().required('Status is required'),
        location: yup.string().required('Location is required'),
      });
    
      // Initialize React Hook Form with custom resolver
      const { register, handleSubmit,reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
      });
    
      useEffect(() => {
            setIsLoading(false);
    }, []);
      const handleFormSubmit = async(data) => {
        try {
            const user = JSON.parse(localStorage.getItem("user")); 
            
            const response = await api.post(`${ENV.appClientUrl}/therapistData/create/?therapistId=${user?.id}`, data);
            if(response?.data?.success) {
              toast.success(response?.data.message);
            reset();
            }else{
              toast.error(response?.data?.message);
            }
          } catch (error) {
            toast.error(error?.response?.data?.message)
          }
      };
      if (isLoading) {
        return <FullPageLoader />;
    }
    return (
        <div>
            <div className='contact__wrap '>
                <div className="home ">
                    <div className="home_background parallax-window"   >
                        <img src={ContactIMg} alt="Services banner" />
                    </div>
                    <div className="home_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="home_content">
                                        <div className="home_title"><span>PSYCUBE</span></div>
                                        <div className="breadcrumbs">
                                            <ul>
                                                <li><Link to="/">Home</Link></li>
                                                <li>Contact</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            <div className='bg_service '>
                <div className="col-md-6">
                    <div className="contact-wrap w-100 p-lg-5 p-4">
                        <h3 className="mb-4">Services</h3>
                        <div id="form-message-warning" className="mb-4"></div>
                        <form  onSubmit={handleSubmit(handleFormSubmit)} className="contactForm" >
                            <div className="row">
                            <div className="col-md-6">
                                    <div className="form-group">
                                    <input type="text" className="form-control" {...register('name')} placeholder="Name" />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <input type="number" className="form-control" {...register('fee')} placeholder="Enter Fee" />
                {errors.fee && <p className="text-danger">{errors.fee.message}</p>}
                                    </div>
                                </div>
                                <div className="form-group">
                <input type="text" className="form-control"  {...register('zoom')} placeholder="Enter zoom link" />
                {errors.zoom && <p className="text-danger">{errors.zoom.message}</p>}
              </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <select className='form-control' {...register('status')}>
                  <option>Status</option>
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </select>
                {errors.status && <p className="text-danger">{errors.status.message}</p>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <select className='form-control' {...register('location')}>
                  <option>Location</option>
                  <option value="Remote">Remote</option>
                  <option value="On-site">On-site</option>
                </select>
                {errors.location && <p className="text-danger">{errors.location.message}</p>}
                                    </div>
                                </div>
                                <div className="col-md-12">
                              
                                    <div className="form-group">
                                    <textarea type="text" className="form-control" {...register('description')} placeholder="Description" />
                {errors.description && <p className="text-danger">{errors.description.message}</p>}
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="custom_btn"><span>Submit</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services
