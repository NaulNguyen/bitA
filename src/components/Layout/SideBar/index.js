import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ChildrenItem from "../ChildrenItem";
import { useState } from "react";

const cx = classNames.bind(styles);
function SideBar() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleItemClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <aside className={cx("wrapper")}>
            <ul className={cx("list-item")}>
                <li
                    className={cx("item", { active: activeIndex === 0 })}
                    onClick={() => handleItemClick(0)}>
                    <a href="#">Item Parent</a>
                    <FontAwesomeIcon icon={faChevronDown} className={cx("icon")} />
                </li>
                {activeIndex === 0 && <ChildrenItem />}
                <li
                    className={cx("item", { active: activeIndex === 1 })}
                    onClick={() => handleItemClick(1)}>
                    <a href="#">Item Parent</a>
                    <FontAwesomeIcon icon={faChevronDown} className={cx("icon")} />
                </li>
                {activeIndex === 1 && <ChildrenItem />}
                <li
                    className={cx("item", { active: activeIndex === 2 })}
                    onClick={() => handleItemClick(2)}>
                    <a href="#">Item Parent</a>
                    <FontAwesomeIcon icon={faChevronDown} className={cx("icon")} />
                </li>
                {activeIndex === 2 && <ChildrenItem />}
            </ul>
        </aside>
    );
}

export default SideBar;
