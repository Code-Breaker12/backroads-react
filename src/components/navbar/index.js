import Logo from '../../images/logo.svg'
import { pageLinks, socialLinks } from '../../data/page-links'

const Navlinks = (props) =>{
    return <li>
    <a href={props?.href} className="nav-link"> {props?.text}</a>
    </li>
}
const Sociallinks = (props) =>{
    console.log(props);
    return <li>
    <a href={props?.href} className="nav-icon"><i className={props?.icon}></i></a>
    </li>
}
const Navbar = () => {
    return <nav className="navbar">
        <div class="nav-center">
            <div class="nav-header">
                <img src={Logo} class="nav-logo" alt="backroads" />
                <button type="button" class="nav-toggle" id="nav-toggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <ul class="nav-links" id="nav-links">
              {pageLinks?.map(link=><Navlinks {...link} key={link.id}/>)}
            </ul>
            <ul class="nav-icons">
              {socialLinks?.map(link=><Sociallinks {...link} key={link.id}/>)}
            </ul>
        </div>
    </nav>
}
export default Navbar;