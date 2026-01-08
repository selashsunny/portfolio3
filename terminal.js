const cinematicLines = [
  "[ CLASSIFIED ACCESS DETECTED ]",
  "",
  "Initializing clandestine environment...",
  "Loading offensive modules...",
  "Disabling forensic logging...",
  "Bypassing intrusion detection...",
  "Shadow operator online.",
  "",
  "WARNING: UNAUTHORIZED ACCESS WILL BE MONITORED",
  "",
  "OPERATOR STATUS: ACTIVE",
  "CLEARANCE LEVEL: BLACKHAT",
  "",
  ">>> ACCESS GRANTED <<<"
];

const cinematic = document.getElementById("cinematic");
const cinematicText = document.getElementById("cinematic-text");

let l = 0, c = 0;
function playCinematic() {
  if (l < cinematicLines.length) {
    if (c < cinematicLines[l].length) {
      cinematicText.innerHTML += cinematicLines[l][c++];
      setTimeout(playCinematic, 30);
    } else {
      cinematicText.innerHTML += "\n";
      c = 0; l++;
      setTimeout(playCinematic, 300);
    }
  } else setTimeout(() => cinematic.remove(), 800);
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") cinematic.remove();
});
playCinematic();

const output = document.getElementById("output");
const input = document.getElementById("command");
const sound = document.getElementById("keySound");

const commands = {
  help: `
whoami   threat   skills
ops      siem     ai
resume   clear
`,
  whoami: `
Alias: RED-0X
Designation: Offensive Operator
Visibility: NONE
`,
  threat: `
THREAT LEVEL: CRITICAL
RESPONSE TIME: < 30s
`,
  skills: `
Offensive Ops     ██████████
Web Exploitation  █████████
Network Attacks   █████████
Stealth           ██████████
`,
  ops: `
[+] Recon complete
[+] Entry achieved
[+] Privilege escalation
[+] Exit without trace
`,
  resume: () => window.open("resume.pdf", "_blank")
};

input.addEventListener("keydown", e => {
  sound.play();
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    output.innerHTML += `> ${cmd}<br>`;
    if (cmd === "clear") output.innerHTML = "";
    else if (commands[cmd]) {
      const r = typeof commands[cmd] === "function" ? commands[cmd]() : commands[cmd];
      if (r) output.innerHTML += `<pre>${r}</pre>`;
    } else output.innerHTML += "Command not recognized<br>";
    input.value = "";
  }
});
