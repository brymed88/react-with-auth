import React from 'react'

const SuccessComponent = (props) => {

  const { callback } = props;
  return (
    <section className="success_enroll">
      <h2>Verification successful!</h2>
      <input type="submit" onClick={() => { callback('login') }} value="Please Login"/>
    </section>
  )
}

export default SuccessComponent;