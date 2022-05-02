/*apiCall function accepts a data object and endpoint, uses POST and returns response in json format. */
const ApiCall = async (data, endpoint, type) => {
<<<<<<< HEAD
  const acceptedTypes = ['POST', 'GET', 'PUT', 'PATCH', 'DELETE'];
=======
  const acceptedTypes = ["POST", "GET", "PUT", "PATCH", "DELETE"];
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503

  if (data && endpoint && acceptedTypes.includes(type)) {
    const requestOptions = {
      method: type,
<<<<<<< HEAD
      headers: { 'Content-Type': 'application/json' },
=======
      headers: { "Content-Type": "application/json" },
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
      body: JSON.stringify(data),
    };

    const response = await fetch(endpoint, requestOptions);

    if (!response.ok) {
<<<<<<< HEAD
      throw new Error('HTTP error ' + response.status);
=======
      throw new Error("HTTP error " + response.status);
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
    }
    return response.json();
  }

<<<<<<< HEAD
  return { status: 'Invalid data' };
=======
  return { status: "Invalid data" };
>>>>>>> f32209941ef862031edd98d776c0e88c365f9503
};
export default ApiCall;
