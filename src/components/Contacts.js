import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const serviceID = "service_z6mphzo";
  const templateID = "template_p94ezqg";
  const userID = "user_fcoGaXmNnumZAEVqDxIAn";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <section className="site-section bg-light" id="contacts">
      <div className="container">
        <div className="contacts">
          <div className="text-center">
            <h1 className="contacts-heading mb-5" data-aos="fade-right" data-aos-duration="1000">
              <div className="line-contact me-3" data-aos="fade-right" data-aos-duration="1000"></div>
              contact me
              <div className="line-contact ms-3" data-aos="fade-right" data-aos-duration="1000"></div>
            </h1>
            <p>Please fill out the form and I'll contact you as soon as possible.</p>
            <span className="success-message">{successMessage}</span>
          </div>
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-12 form-group">
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                      {/* NAME INPUT */}
                      <div className="text-center">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          name="name"
                          {...register("name", {
                            required: "Please enter your name",
                            maxLength: {
                              value: 20,
                              message: "Please enter a name with fewer than 20 characters",
                            },
                          })}
                        />
                        <div className="line"></div>
                      </div>
                      <span className="error-message">{errors.name && errors.name.message}</span>
                      {/* PHONE INPUT */}
                      <div className="text-center">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                          name="phone"
                          {...register("phone", {
                            required: "Please enter your phone number",
                          })}
                        />
                        <div className="line"></div>
                      </div>
                      <span className="error-message">{errors.phone && errors.phone.message}</span>
                      {/* EMAIL INPUT */}
                      <div className="text-center">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          {...register("email", {
                            required: "Please provide your email",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address",
                            },
                          })}
                        />
                        <div className="line"></div>
                      </div>
                      <span className="error-message">{errors.email && errors.email.message}</span>
                      {/* SUBJECT INPUT */}
                      <div className="text-center">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          name="subject"
                          {...register("subject", {
                            required: "OOPS, you forget to add the subject.",
                          })}
                        />
                        <div className="line"></div>
                      </div>
                      <span className="error-message">{errors.subject && errors.subject.message}</span>
                    </div>
                    <div className="col-md-6">
                      {/* DESCRIPTION INPUT */}
                      <div className="text-center">
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Please leave your message..."
                          name="description"
                          {...register("description", {
                            required: "Please describe your project needs or a message...",
                          })}
                        ></textarea>
                        <div className="line"></div>
                      </div>
                      <span className="error-message">{errors.description && errors.description.message}</span>
                      <button className="btn-contact contact-btn" type="submit">
                        contact me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
