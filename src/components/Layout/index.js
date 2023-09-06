import Header from "./Header";
import SideBar from "./SideBar";
import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import Content from "./Content";

const cx = classNames.bind(styles);
function Layout() {
    return (
        <div className={cx("wrapper")}>
            <Header />
            <div className={cx("container")}>
                <SideBar />
                <div className={cx("content")}>
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default Layout;
