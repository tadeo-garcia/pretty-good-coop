import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contactFormContainer">
         <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/mqkgdzee"
        method="POST"
        className='contactForm'
      >
        <p>if you have any questions</p>
        <p>about collaborating with us</p>
        <input className="contactForm__input"  type="email" name="email" 
        placeholder={'your email goes here'}/>
        <textarea rows={7} 
        className="contactForm__input" 
        name="message" 
        placeholder={'your message goes here'}/>
          {status === "SUCCESS" ? 
            (<p className='contactForm__status'>thanks!</p>
              ):( 
            <button className="contactForm__submit">submit</button>)}
          {status === "ERROR" && <p className='contactForm__status'>oops! something went wrong.</p>}
          <p style={{marginTop: '25px'}}>
            we hope to hear from you.
          </p>
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}