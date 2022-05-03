import ApiCall from './ApiCall';

//Modify REACT_APP_SERVER_URL within the project .env file
const serverURL = process.env.REACT_APP_SERVER_URL;

const SendMessage = async (data) => {
  const response = await ApiCall(data, `${serverURL}/api/contact`, 'POST');

  if (response.status === 'success') {
    return { status: 'success' };
  }

  return { status: 'failed' };
};

export { SendMessage };
