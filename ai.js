function ai() {
  const msgs = [
    "AI: Attack surface vulnerable.",
    "AI: SOC response delayed.",
    "AI: Operator advantage confirmed."
  ];
  document.getElementById("output").innerHTML +=
    `<pre>${msgs[Math.floor(Math.random()*msgs.length)]}</pre>`;
}
