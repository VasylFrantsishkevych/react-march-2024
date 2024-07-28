import axios from 'axios';
import { ITokenObtainPairModel } from '../models/tokenObtainModel';
import { ITokenRefresh } from '../models/tokenRefreshModel';
import { IUser } from '../models/userModel';
import { IUserResponse } from '../models/userResponseModel';

const axiosInstance = axios.create({
   baseURL: 'http://owu.linkpc.net/carsAPI/v2'
})

const userService = {
   createUser: async (data: IUser): Promise<boolean> => {
       let response = await axiosInstance.post<IUserResponse>('/users', data);
      //  console.log(response.status === 201);
       return !!response.data.id || false
   }
}

const authService = {
   authenticate: async (data: ITokenObtainPairModel): Promise<void> => {

      let response = await axiosInstance.post<ITokenRefresh>('/auth', data);
      console.log(response);

  }
}

export {
   userService,
   authService
}