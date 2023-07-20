import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ChatMessage from "./ChatMessage";
import { analyze } from "./util";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    {
      message: "Hi May I have your Name Please",
    },
  ]);

  const [text, setText] = useState("");

  const onSend = async () => {
    let list = [...messages, { message: text, user: true }];
    if (list.length > 2) {
      const reply =  await analyze(text);
      list = [...list, { message: reply }];
    } else {
      list = [
        ...list,
        {
          message: `Hi, ${text}`,
        },
        {
          message: "How can I help you?",
        },
      ];
    }
    setMessages(list);
    setText("");
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 1);
  };

  return (
    <div className="container mt-5">
      <div className="row mt-4">
        <h2 className="text-primary">ChatBot</h2>
      </div>
      <div
        style={{
          backgroundColor: "#f2f2f2",
          color: "gray",
          borderRadius: "28px",
        }}
      >
        <div
          className="row"
          style={{
            height: "720px",
            overflow: "auto",
            border: "1px ",
            padding: "2em",
          }}
        >
          {messages.length > 0 &&
            messages.map((data) => <ChatMessage {...data} />)}
        </div>

        <div className="row pb-4">
          <div className="col-md-1"></div>
          <div className="col-md-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button type="button" class="btn btn-primary" onClick={onSend}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div id="copyright" className="mt-3">
        ChatBot-IBS
      </div>
    </div>
  );
}
