import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    
    {
      image:
        "data:image/png;base64,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",
      id: 3,
      name: "DRIVER 1",
      active: false,
      isOnline: false,
    },
    {
      image:
        "data:image/png;base64,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",
      id: 4,
      name: "DRIVER 2",
      active: false,
      isOnline: true,
    },
    {
      image:
        "data:image/png;base64,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",
      id: 5,
      name: "DRIVER 3",
      active: false,
      isOnline: false,
    },
    {
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAC6CAMAAADVh1IcAAAAY1BMVEX///8AAACsrKzIyMj29vaVlZUuLi69vb37+/vx8fFra2vW1tbo6Ojl5eXs7OyQkJBgYGC2trY4ODgMDAyhoaFJSUmDg4Pe3t4hISFOTk7Pz89zc3NEREQWFhZTU1MmJiZ7e3tag5BMAAAF5UlEQVR4nO2c6ZqyOgyAZd+RTVFA5f6v8uiZaVpGhZaZlvg9eX8PY0PTNCu7HUEQBEEQBEEQBEEQBEEQBEEQxnDztO06x+m6Ns3drVfzC8IsKffXm/XN7bovkyzcelWryJ2msJ4oGiffemXKpOV4exbl/w0ay3Tr1SkRlvHltSgPLnH5QcrW9af3ojw49d3Wa5QkbKp5UR5UzUdsTnRcFuXB+AGGILvKyWJZ12zrtS7RDtMVX6qh6I9779gXg//DKFTt1qudp50cl3qImxaufTdp+qH+HGnS80SPvOTnHyTeRAsPiG8cNxZfu/fyvbeeuHkxXndtLy6ze2N7w04UeW92hfIEwgH3ZgxvLgh9Kc2tTwXRKJez6uPawsHCeWyE9730ukNBGpSK1vEbZtlVCRtu0TC6aXxjjtHyX0cj5q3pDnAKpK7C9ox4a0BvZO1TCbav0bsydTK4PHpJbzjv4UrC5nE67D370hdH6bO9dHSuTB1uawuJ0/9FBPkOG1egBjpz8eQf2jMXWlYzDQGuf/XkKL8ngYdwhQId2GWVp8A64zLOAdgylafAngW61rUG8E4utspjDTs0qCyAyzIyJyWFcVh6bY8pRouYwpyUjnLLhOml7bkBInb/35Qu84ylo2OcwiiFWilyYf6BnXHhzCjcmfdbk52ZEZMBcFlkpuYz4rRmu/J7VbWCayY4Z7hSNA67ywuVp8BtxhUDJCycOSgc5YilQC5KJ007GfMZfQU3K2DR2RlXqMkrTEf5h/gzmCzzjlsA6yzt0PD8DK7zLwRatXSuBXxmlYDOCFzP5NJmd/EhNY1Ny3Y7nj2W25rQgweUYiAjpJA4q6UMWgAFwRhhHcCG1R0kzkAC2dwa38bct4a3/fSL9wZPgFoFwo25W2fe+TMuLDDlNYAbNrv8RchXaPWzJq3t+V+OmHIZAplQR77OWIFAqBdWuDwZAYcv0vK9N6qWer7wZ7j85QlCqfK+OfaLkMu1J10NGC0ZMOlouhx+7k7qHSb9Mwpe6QaIRuDrTHjQ3NB5P/vQjkgPPyPcWy84vewM9JDL8kg7L7Q0goAf0QtYDsuSWNaA87J8IjnOtM5+cTlii2HeEpUv2rNFihJdCDNDax/ei3Kw0V77b8iCN7tTBLgqmHJEbfPUSXtt2k9SsAlhlDTjt8INo9dFn2CNCYIgCMIIedZ2jiRdm+HqMxPI7Liqf7ovS9RVbLe43AI3d/rlhb8ndtAM1+ad5JTZHGOHQeWyMl5eqgxFuXWUky7FlGribLo7Qax85Oeo4+36G6OjxHSpGtVW9c1uJsxfzzZjDvaLZF89xHtbmn08vNDS0wbJ9CdzfOudFeYoc/qnUXvT6fRweknWfv+LpF7S+9Md6o36BNFElvrs/fLYRt55Io7JbtpoUrg4z40xSv9LbzJ8OxqTxhXLFqfxj7LGyShaFFONjmEjqMThVa1vHa6Y0q0NFTwcwfwUf5rMTwTf6GakdBsJxeK/bntJBafVN3FshLf39zPjrvDflXpX1xHwX1Ma/JFFyLVr9zpD/luVnl8QnFfdNoB7MSdNOh3xGqLmQWGYeLFqbdbGAcuvNo2jDL/6lfrk1eANj6O+HxE/xHLWGOHm4NkMOrcGJhH0WhqwmLXGU8M7F/V+mygHbS70/Q6MVss1yK4HWmvlx76VAW+519wkmkK8pE3PWj4mrusnGHyIXZcJgBGRq/bGF+itVxlhUQJel/6mt/CoWQkgwJQfxFgPfJJDU8gJXeKDgTydw65nTR/Y6Jg/q9H4AzkzNoOe8wldy0oz/2sB46zHoQUnw0jGESyAHnPGxsouRj5607CwRosPAF9jMJPZhry8lpyTy8IMjf6SAPiBng7bzIUxUt4KSBhZSJj1kDDSkDDrIWGkIWHWQ8JI808JA15zZaS7BeJaPd8+Y6WGg5GqtvtdetZUOmFfljDUE/Yd2Orq2Yq8+974xqaRHf/xuSR9NeeoNdm3G7afOwZFEARBEARBEARBEARBEARBfCj/AZlEQWMmp30SAAAAAElFTkSuQmCC",
      id: 6,
      name: "DRIVER 4",
      active: false,
      isOnline: true,
    },
    {
      image:
        "data:image/png;base64,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",
      id: 7,
      name: "DRIVER 5",
      active: false,
      isOnline: true,
    },
    {
      image:
        "data:image/png;base64,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",
      id: 8,
      name: "DRIVER 6",
      active: false,
      isOnline: false,
    },
    {
      image:
        "data:image/png;base64,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",
      id: 9,
      name: "DRIVER 7",
      active: false,
      isOnline: true,
    },
    {
      image: "data:image/png;base64,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",
      id: 10,
      name: "DRIVER 8",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
      
      
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
