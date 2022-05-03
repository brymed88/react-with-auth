const SuccessComponent = ({ callback, origin }) => {
  let message;

  switch (origin) {
    case 'verify':
      message = 'Verification successful!';
      break;
    case 'passreset':
      message = 'Password reset successful!';
      break;
    default:
  }

  return (
    <section className='success_enroll'>
      <h2>{message}</h2>
      <input
        type='submit'
        onClick={() => {
          callback('success', 'login');
        }}
        value='Please Login'
      />
    </section>
  );
};

export default SuccessComponent;
