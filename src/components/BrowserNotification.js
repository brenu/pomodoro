import React, { Component, useEffect } from "react";
var notification;

class BrowserNotification extends Component {
  constructor() {
    super();

    this.showNotification = this.showNotification.bind(this);
  }

  showNotification(props) {
    const options = {
      body: "Yay! You completed a work session, now go take a rest :)",
      dir: "auto",
    };

    notification = new Notification("Pomodoro Timer", options);
    setTimeout(this.closeNotification, 30000);
  }

  closeNotification() {
    notification.close();
  }
}

export default BrowserNotification;
