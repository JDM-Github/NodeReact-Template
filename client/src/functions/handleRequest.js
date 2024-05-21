import axios from 'axios'

const handleRequest = async (method, link, requestData = {}) => {
	const axiosMethod = method.toLowerCase() === 'get' ? axios.get : axios.post;

	return axiosMethod('http://localhost:5000' + link, requestData)
	.then((response) =>
	{
		return response.data;
	})
	.catch((error) => {
		throw error;
	});
};

export default handleRequest;
