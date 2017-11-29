const clientId = 'ayhm_xpNvK_yl_EKmTiEBw';
const secret =  'AYw73P0dQHkyphrz1tylNOnBcSNjRoia4o01MnJ1FtCiHNYYVz6jJJxmmm6qCvk0';
let accessToken = '';

let Yelp = {
  getAccessToken() {
    if (accessToken) {
      return new Promise(function(resolve) {
        resolve(accessToken);
      });

    }
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`,
      {
        method: `POST`,
      }).then(response => {
    return response.json();
    }).then(jsonResponse => {
      accessToken = jsonResponse.access_token;
    });
  },

  search(term, location, sortBy) {
    return Yelp.getAccessToken().then( () => {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          // console.log (jsonResponse);
          return jsonResponse.businesses.map(business => ({  // hint 30 says () not {}. Why ()?
              id:business.id ,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address,
              city: business.location.city,
              state: business.location.state_code,
              zipCode: business.location.postal_code,
              category: business.categories,
              rating: business.rating,
              reviewCount: business.reviews_count,
            }));
        };
    })
  }
      //Need to do, point 24: Use interpolation to replace TERM, LOCATION, and SORT_BY with the correct variables in the path above.
}

export default Yelp;
