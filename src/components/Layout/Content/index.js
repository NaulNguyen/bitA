import React, { useState } from "react";
import classNames from "classnames/bind";
import Item from "../Item";
import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

function Content() {
    const [items, setItems] = useState([]);
    const [newItemText, setNewItemText] = useState("");

    const handleCreateClick = () => {
        if (newItemText.trim() === "") {
            return;
        }

        setItems((prevItems) => [...prevItems, newItemText]);
        setNewItemText("");
    };

    return (
        <div className={cx("wrapper")}>
            <header className={cx("header")}>
                <h2 className={cx("brand")}>DASHBOARD</h2>
                <div className={cx("create-list")}>
                    <input
                        placeholder="New list"
                        className={cx("list-input")}
                        value={newItemText}
                        onChange={(e) => setNewItemText(e.target.value)}
                    />
                    <button className={cx("create-btn")} onClick={handleCreateClick}>
                        Create
                    </button>
                </div>
            </header>
            <div className={cx("content")}>
                {items.map((itemText, index) => (
                    <Item key={index} itemText={itemText} />
                ))}
            </div>
        </div>
    );
}

export default Content;
