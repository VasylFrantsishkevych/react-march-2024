import {useState} from 'react';
import {useForm} from "react-hook-form";
import { IUser } from '../../models/userModel';
import { userService } from '../../services/api.service';
import styles from './RegistrationForm.module.css';


const RegistrationForm = () => {
    let {
        handleSubmit,
        register
    } = useForm<IUser>();

    const [isRegistrated, setIsRegistrated] = useState<boolean>(false)


    const onSubmitFormHandler = async (data: IUser) => {
        let isReg = await userService.createUser(data);
        setIsRegistrated(isReg);

    }
    return (
        <div className={styles.form_container}>
            <form onSubmit={handleSubmit(onSubmitFormHandler)}>
                <input type="text" placeholder='username' {...register('username')}/>
                <input type="text" placeholder='password' {...register('password')}/>
                <button>Register</button>
            </form>
            {
                isRegistrated && (<div>you did registration</div>)
            }
        </div>
    );
};

export default RegistrationForm;