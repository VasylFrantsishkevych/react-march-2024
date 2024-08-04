import {Link} from "react-router-dom";
import './Headers.css';

const Headers = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
            </ul>
        </div>
    );
};

export {Headers};