import LogoutHeader from './LogoutHeader'
import MenuHeader from './MenuHeader'
import Logo from '../../../assets/react.svg';
import './styles/headerStyle.css';

export default function Header(){
    return(
        <header className='header'>
            <div>
                <figure>
                    <img src={Logo} alt="" />
                    <figcaption>react</figcaption>
                </figure>
            </div>
            <MenuHeader />
            <LogoutHeader />
        </header>
    )
}
