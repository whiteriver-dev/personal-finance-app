import './RegisterRedirect.scss';
import { DotLoader } from 'react-spinners';

function RegisterRedirect() {
    return (
        <div className="register-redirect">
            <h1>Registration successful!</h1>
            <p>You will now be redirected to the login page.</p>
            <DotLoader color="black" size={50}/>
        </div>
    );
}

export default RegisterRedirect;