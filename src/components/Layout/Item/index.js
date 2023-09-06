import React, { useState } from "react";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Item.module.scss";

const cx = classNames.bind(styles);

function Item({ itemText }) {
    const [items, setItems] = useState([]); // Danh sách các items
    const [newItemText, setNewItemText] = useState(""); // Nội dung mới của item
    const [itemStates, setItemStates] = useState([]); // Trạng thái của từng item

    const handleCreateClick = () => {
        if (newItemText.trim() === "") {
            return;
        }

        // Thêm item mới vào danh sách items
        setItems((prevItems) => [...prevItems, newItemText]);

        // Đặt lại nội dung của ô input thành rỗng
        setNewItemText("");

        // Đặt trạng thái mặc định cho item mới
        setItemStates((prevStates) => [...prevStates, false]);
    };

    const toggleCheck = (index) => {
        // Sao chép mảng trạng thái hiện tại
        const newStates = [...itemStates];
        // Đảo ngược trạng thái của item có index tương ứng
        newStates[index] = !newStates[index];
        // Cập nhật mảng trạng thái
        setItemStates(newStates);
    };

    const handleDeleteItem = (index) => {
        // Sao chép mảng items hiện tại và loại bỏ item có index tương ứng
        const newItems = [...items];
        newItems.splice(index, 1);

        // Sao chép mảng trạng thái hiện tại và loại bỏ trạng thái của item có index tương ứng
        const newStates = [...itemStates];
        newStates.splice(index, 1);

        // Cập nhật danh sách items và trạng thái
        setItems(newItems);
        setItemStates(newStates);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("header")}>
                <h4 className={cx("header-name")}>{itemText}</h4>
                <button className={cx("button")} onClick={handleCreateClick}>
                    <FontAwesomeIcon icon={faPlus} className={cx("icon")} />
                </button>
            </div>
            <div className={cx("content")}>
                <input
                    placeholder="New item"
                    className={cx("input")}
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                />
                <div className={cx("checkbox")}>
                    <div className={cx("number-check")}>
                        {items.map((itemText, index) => (
                            <div className={cx("hold")} key={index}>
                                <div onClick={() => toggleCheck(index)}>
                                    <input
                                        type="checkbox"
                                        id={`item${index}`}
                                        name={`item${index}`}
                                        className={cx("item")}
                                        checked={itemStates[index]} // Sử dụng trạng thái của item tương ứng
                                    />
                                    <label
                                        htmlFor={`item${index}`}
                                        className={itemStates[index] ? cx("label") : cx("label2")} // Sử dụng trạng thái của item tương ứng
                                    >
                                        {itemText}
                                    </label>
                                </div>
                                <button
                                    className={cx("delete")}
                                    onClick={() => handleDeleteItem(index)}>
                                    <FontAwesomeIcon icon={faXmark} className={cx("icon")} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
