/*apiCall function accepts a data object and endpoint, 
  uses POST and returns response in json format. 
*/
const ApiCall = async (data, endpoint, type) => {
  const acceptedTypes = ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'];

  if (data && endpoint && acceptedTypes.includes(type)) {
    const requestOptions = {
      method: type,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    const response = await fetch(endpoint, requestOptions);

    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    return response.json();
  }

  return { status: 'Invalid data' };
};
export default ApiCall;
