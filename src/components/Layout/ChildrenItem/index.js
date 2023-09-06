import styles from "./ChildrenItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function ChildrenItem() {
    return (
        <ul className={cx("list")}>
            <li>Item children</li>
            <li>Item children</li>
            <li>Item children</li>
            <li>Item children</li>
            <li>Item children</li>
            <li>Item children</li>
            <li>Item children</li>
        </ul>
    );
}

export default ChildrenItem;
