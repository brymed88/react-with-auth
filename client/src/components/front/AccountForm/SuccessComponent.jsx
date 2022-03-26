import React from 'react'

const SuccessComponent = (props) => {

  const { callback } = props;
  return (
    <section>
      <h2>Successful Enrollment!</h2>
      <button onClick={() => { callback('login') }}>Login?</button>
    </section>
  )
}

export default SuccessComponent;