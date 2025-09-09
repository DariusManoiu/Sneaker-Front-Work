import React, { useState } from "react";

function StatusMessage() {
  const [message] = useState("");
  return <div className="status-message" id="statusMessage">{message}</div>;
}

export default StatusMessage;
