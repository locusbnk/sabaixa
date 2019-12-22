import React, { Component } from 'react';
import "./../css/myStyle.css";

export default class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anotherUserName: "Nabin Khanal",
            anotherUserStatus:"Active",
            currentUserImage: "",
            anotherUserImage: "",
            inputText: "",
            inputFile: "",
            messages:[
                {
                    'key':1,
                    'sourceImage':0,
                    'sourceName':0,
                    'message':"Hello",
                    'messageSeen':false
                },
                {
                    'key':2,
                    'sourceImage':1,
                    'sourceName':1,
                    'message':"Hi",
                    'messageSeen':true
                },
            ],
        };
          this.messagesView=this.state.messages.map((item, key) =>
          <div className="singleMessage currentuser" key={item.key}>
              <div className="userpic">{item.sourceImage}</div>
              <div className="actualmessage">{item.message}</div>
          </div>
          );
          this.typingView=(
            <div className="typing">
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
            </div>
          );
    }


    render = () => {
        return (
            <div>
                <div className="msgboxContainer">
                    <div className="msgboxTitle">
                        <div className="userpic"></div>
                        <div className="UserdetailContainer">
                            <div className="userName">{this.state.anotherUserName}</div>
                            <div className="userActivityStatus">{this.state.anotherUserStatus}</div>
                        </div>
                        <div className="settings"></div>
                    </div>
                    <div className="msgboxBody">
                        <div className="singleMessageScroller">
                            <div className="singleMessageContainer">
                                {this.messagesView}
                            </div>
                        </div>
                    </div>
                    <div className="msgboxInputcontainer">
                        <input className="textInput" placeholder="Type message here...."/>
                            <div className="inputsContainer">
                                <div className="imageInput">
                                    <input type="file" file accept="image/*"/>
                                </div>
                                <div className="voiceInput"></div>
                                <div className="fileInput">
                                    <input type="file" file/>
                                </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                        );
                    }
}