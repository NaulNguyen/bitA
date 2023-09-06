import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import logo from "~/components/assets/logo-bitA.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={logo} alt="bitA logo" />
                </div>
                <FontAwesomeIcon icon={faBars} className={cx("menu")} />
            </div>
        </header>
    );
}

export default Header;
