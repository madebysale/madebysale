import axios from 'axios';

export const GET_BRAND = 'GET_BRAND';
export const CREATE_BRAND = 'CREATE_BRAND';
export const DELETE_BRAND = 'DELETE_BRAND';
export const DELETE_ALL_BRAND = 'DELETE_ALL_BRAND';

export const getBrand = () => (dispatch) => {
  axios.post('http://localhost:3000/api/admin/listbrand').then((res) => {
    dispatch({
      type: GET_BRAND,
      payload: res.data.data.ListstockbrandsResponce,
    });
  });
};

export const deleteBrand = (id) => (dispatch) => {
  axios.post('/api/notification/delete', { id }).then((res) => {
    dispatch({
      type: DELETE_BRAND,
      payload: res.data,
    });
  });
};

export const deleteAllBrand = () => (dispatch) => {
  axios.post('/api/notification/delete-all').then((res) => {
    dispatch({
      type: DELETE_ALL_BRAND,
      payload: res.data,
    });
  });
};

export const createBrand = (notification) => (dispatch) => {
  axios.post('/api/notification/add', { notification }).then((res) => {
    dispatch({
      type: CREATE_BRAND,
      payload: res.data,
    });
  });
};
