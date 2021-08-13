import api from './httpService';
import envConfig from '../../env-config';

class UserServices {
  authLogin = auth_data => {
    //debug
    console.log('auth_data:', auth_data);

    return api.post(
      `/${envConfig.LOCAL_API_PATH_LOGIN}`,
      {},
      {
        headers: { authorization: `Basic ${auth_data}` },
      },
    );
  };

  authRegister = auth_register_data => {
    return api.post(
      `/${envConfig.LOCAL_API_PATH_REGISTER}`,
      auth_register_data,
    );
  };

  getUserProfile = (user_id, token) => {
    return api.get(`/${envConfig.LOCAL_API_PATH_USER}/${user_id}`, {
      authorization: `${token}`,
    });
  };
}

export default new UserServices();
