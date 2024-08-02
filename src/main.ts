import "../style.css"

const LOAD_MSG_ELEMS: string[] = [
`
  <div class="center-field" id="state-connect">
    <p>communicating with network overlay</p>
        <div id="loading" class="lds-facebook"><div></div>
          <div></div>
          <div></div>
        </div>
  </div>
`,
`
  <div class="center-field" id="state-connect">
    <p>connecting with remote host</p>
        <div id="loading" class="lds-facebook"><div></div>
          <div></div>
          <div></div>
        </div>
  </div>
`,
`
  <div class="center-field" id="state-connect">
    <p>success</p>
      <span id="loading" class="check-icon material-symbols-outlined">
        check
      </span>
  </div>
`,
`
  <div class="center-field" id="state-down">
    <p>remote host is currently down</p>
    <span class="down-icon material-symbols-outlined">error</span>
  </div>
`
];

const sleep = (ms: number): Promise<void> => {
  return new Promise((res) => { setTimeout(() => res(), ms); });
}

async function main(): Promise<void> {
  const divLoadingArea = document.getElementById("load-area");
  if (divLoadingArea) {
    divLoadingArea.innerHTML = LOAD_MSG_ELEMS[0];
    await sleep(3000);
    divLoadingArea.innerHTML = LOAD_MSG_ELEMS[1];
    await sleep(4000);
    divLoadingArea.innerHTML = LOAD_MSG_ELEMS[3];
  } 
}

window.onload = main
