import React from 'react'
import './styles/textFilter.css'
import DisplayChatList from './DisplayChatList';

function FilterText({ entireChatData, setOpenIndiChat, setIndiChatDetails }) {

    const [filteredArr, setFilteredArr] = React.useState([]);

    const filterChatsByOrderId = (e) => {
        var filteringArr = [];
        entireChatData.forEach((eachChat) => {
            if(eachChat.orderId === e.target.value){
                filteringArr.push(eachChat);
            }
        })
        setFilteredArr(filteringArr);
    };
    return (
        <div className="filter-container">
            <h2>Filter By Title / Order ID</h2>
            <input className="filter-input" onKeyUp={filterChatsByOrderId} placeholder="Start typing to search"></input>
            <div className="black-line" />
            <DisplayChatList chatData={filteredArr.length > 0 ? filteredArr : entireChatData } setOpenIndiChat={setOpenIndiChat} setIndiChatDetails={setIndiChatDetails} />
        </div>
    )
}

export default FilterText
