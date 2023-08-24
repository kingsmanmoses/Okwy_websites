import React from 'react';
import './service.css';
import online from '../../img/online.jpg';
import { NavLink } from 'react-router-dom';
import { serviceList } from './Sdata';

const Service = () => {
  return (
    <>
      <div className="service">
        <h1>Our Services </h1>
        <p>P-Tech are always here to provide you the best services</p>
        <div className="service-box">
          {serviceList.map((item, index) => {
            return (
              <NavLink to={item.to} key={index} className="all-serv">
                <img src={item.img} alt="serve" />
                <div className="serv-det">
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </NavLink>
            );
          })}
          <NavLink to="/courses" className="all-serv">
            <img src={online} alt="courses" />
            <div className="serv-det">
              <h6>Online Classes</h6>
              <p>
                With the help of E-learning create your own path and drive on
                your skills on your own to achieve what you seek. Joining P-TECH
                CONSULT will help you achieve this.
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Service;
