import React from "react";

import "../assets/styles/components/Util.css";
import "../assets/styles/components/Contact.css";

const Contact = () => {
  return (
    <div className="container-contact100">
      <div className="wrap-contact100">
        <form className="contact100-form validate-form">
          <span className="contact100-form-title">Contact Us</span>

          <div
            className="wrap-input1 validate-input bg1"
            data-validate="Please Type Your Name">
            <span className="label-input1">FULL NAME *</span>
            <input
              className="input1"
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>

          <div
            className="wrap-input1 validate-input bg1 rs1-wrap-input1"
            data-validate="Enter Your Email (e@a.x)">
            <span className="label-input1">Email *</span>
            <input
              className="input1"
              type="text"
              name="email"
              placeholder="Enter Your Email "
            />
          </div>

          <div className="wrap-input1 bg1 rs1-wrap-input1">
            <span className="label-input1">Phone</span>
            <input
              className="input1"
              type="text"
              name="phone"
              placeholder="Enter Number Phone"
            />
          </div>

          <div className="wrap-input1 input1-select bg1">
            <span className="label-input1">Needed Services *</span>
            <div>
              <select className="js-select2" name="service">
                <option>Please clothes categories</option>
                <option>Wowen</option>
                <option>Men</option>
                <option>Children</option>
				        <option>Babys</option>
              </select>
              <div className="dropDownSelect2"></div>
            </div>
          </div>

          <div className="w-full dis-none js-show-service">
            <div className="wrap-contact100-form-radio">
              <span className="label-input1">
                What type of products do you sell?
              </span>

              <div className="contact100-form-radio m-t-15">
                <input
                  className="input-radio100"
                  id="radio1"
                  type="radio"
                  name="type-product"
                  value="physical"
                />
                <label className="label-radio100">
                  Phycical Products
                </label>
              </div>

              <div className="contact100-form-radio">
                <input
                  className="input-radio100"
                  id="radio2"
                  type="radio"
                  name="type-product"
                  value="digital"
                />
                <label className="label-radio100" >
                  Digital Products
                </label>
              </div>

              <div className="contact100-form-radio">
                <input
                  className="input-radio100"
                  id="radio3"
                  type="radio"
                  name="type-product"
                  value="service"
                />
                <label className="label-radio100">
                  Services Consulting
                </label>
              </div>
            </div>

            <div className="wrap-contact100-form-range">
              <span className="label-input1">Budget *</span>

              <div className="contact100-form-range-value">
                $<span id="value-lower">610</span> - $
                <span id="value-upper">980</span>
                <input type="text" name="from-value" />
                <input type="text" name="to-value" />
              </div>

              <div className="contact100-form-range-bar">
                <div id="filter-bar"></div>
              </div>
            </div>
          </div>

          <div
            className="wrap-input1 validate-input bg0 rs1-alert-validate"
            data-validate="Please Type Your Message">
            <span className="label-input1">Message</span>
            <textarea
              className="input1"
              name="message"
              placeholder="Your message here..."></textarea>
          </div>

          <div className="container-contact100-form-btn">
            <button className="contact100-form-btn">
              <span>
                Submit
                <i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
