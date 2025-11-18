
const API_URL = process.env.VITE_API_URL;

export const Api = {
  getTestApi: async (barcode) => {
    try {
      let response;
      const options = {
        method: 'GET',
      };

      response = {status: true, data:[]};

      switch (response.status) {
        case 200:
          const data = await response.json();
          return data;
        case 400:
          throw new Error('All fields are required');
        case 409:
          throw new Error('User already exists!');
        default:
          throw new Error('Something went wrong!');

      }
    } catch (e) {
      console.log("Error", e);
    }
  },
}
