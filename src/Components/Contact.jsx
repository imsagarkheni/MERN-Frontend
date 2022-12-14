import React from 'react';
import '../Components/contact.css'

const Contact = () => {
  return (
    <>
      <div className="container my-5 contact ">
        <section class="mb-4">
          <h1 class="h1-responsive font-weight-bold text-center my-4">Contact us</h1>
          <h5 class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
            a matter of hours to help you.</h5>
          <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">


              <form >
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input type="text" id="name" name="name" class="form-control" placeholder='Your name' />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input type="text" id="email" name="email" class="form-control" placeholder='Your Email' />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 my-3">
                    <div class="md-form mb-0">
                      <input type="text" id="subject" name="subject" class="form-control" placeholder='Subject' />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 mb-3">
                    <div class="md-form">
                      <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder='Message....'></textarea>
                    </div>
                  </div>
                </div>
                <a class="btn btn-primary">
                <input type="submit" name='signup' id='signup' value='Register' className='btn1' />
                </a>
              </form>
              
            </div>
            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>Surat, Gujarat, India</p>
                </li>
                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                  <p>+91 8866065173</p>
                </li>
                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>sagarkheni34@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact