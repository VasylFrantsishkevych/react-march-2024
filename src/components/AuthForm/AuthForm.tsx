import {useForm} from "react-hook-form";
import { ITokenObtainPairModel } from "../../models/tokenObtainModel";
import { authService } from "../../services/api.service";
import styles from '../RegistrationForm/RegistrationForm.module.css'


const AuthForm = () => {
    let {
        handleSubmit,
        register
    } = useForm<ITokenObtainPairModel>();
    let authenticate = (data: ITokenObtainPairModel) => {
        authService.authenticate(data);
    };
    return (
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type="text" placeholder="username" {...register('username')}/>
                <input type="text" placeholder="password" {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    )
        ;
};

export default AuthForm;