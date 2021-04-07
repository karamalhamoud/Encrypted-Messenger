let username = getCookie("username");
let output, temp, len;
let HOST = location.origin.replace(/^http/, 'ws')
let ws = ReconnectingWebSocket;
const salt = "127bf3dc-49b5-4655-8aac-a861590c1437";
const delay = 45;
const loops = 20;



// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('assets/service-worker.js');
// }


if (username == "") {
  register();
} else {
  ws = new ReconnectingWebSocket(HOST, null, { debug: false, reconnectInterval: 200 });
}

ws.onopen = function (event) {
  // console.log(username + " Connected!");
};

ws.onclose = function (event) {
  // console.log(username + " Disconnected!");
};

ws.onmessage = (event) => {
  if (username !== "") {
    let json = event.data;
    if (json) {
      var object = JSON.parse(json);
      if ($('#' + object.id).length === 0) {
        var receive = new Audio('assets/receive.wav');
        receive.play()
        var bytes = CryptoJS.AES.decrypt(atob(object.msg), salt);
        var decrypted = bytes.toString(CryptoJS.enc.Utf8);

        add_other(object.username, object.id, decrypted, true);
      }
    }
  }
};





function add_mine(msg_id, OutputFinal) {
  var same = false;
  var last_msg = document.getElementById("chat_msgs").lastChild.innerHTML;
  if (last_msg != 'undefined' && last_msg != null) {
    var last_msg_user = substringBetween(last_msg, "name=", "\"");
    if (username == last_msg_user) {
      same = true;
    }
  }


  if (same) {
    document.querySelectorAll(".chat__conversation-board__message__context:last-child")[document.querySelectorAll(".chat__conversation-board__message__context:last-child").length - 1].innerHTML += `
    <div class="chat__conversation-board__message__bubble"> <span style="display: block;margin-left:auto; margin-right:0;" id="` + msg_id + `">` + OutputFinal + `</span></div>`;
    same = false;
  } else {
    document.getElementById("chat_msgs").innerHTML += `
    <div class="chat__conversation-board__message-container reversed">
        <div class="chat__conversation-board__message__person">
          <div class="chat__conversation-board__message__person__avatar"><img src="https://ui-avatars.com/api/?background=random&size=50&bold=true&name=` + username + `"  title="` + username + `"/></div>
        </div>
        <div class="chat__conversation-board__message__context">
          <div class="chat__conversation-board__message__bubble"> <span style="display: block;margin-left:auto; margin-right:0;" id="` + msg_id + `">` + OutputFinal + `</span></div>
        </div>
    </div>`
  }

  scroll_to_end();
}




function add_other(user, msg_id, OutputFinal, effect) {
  var same = false;
  var last_msg = document.getElementById("chat_msgs").lastChild.innerHTML;
  if (last_msg != 'undefined' && last_msg != null) {
    var last_msg_user = substringBetween(last_msg, "name=", "\"");
    if (user == last_msg_user) {
      same = true;
    }
  }


  if (same) {
    document.querySelectorAll(".chat__conversation-board__message__context:last-child")[document.querySelectorAll(".chat__conversation-board__message__context:last-child").length - 1].innerHTML += `
    <div class="chat__conversation-board__message__bubble"> <span style="display: block;" id="` + msg_id + `">` + OutputFinal + `</span></div>`;
    same = false;
  } else {
    document.getElementById("chat_msgs").innerHTML += `
    <div class="chat__conversation-board__message-container">
        <div class="chat__conversation-board__message__person">
          <div class="chat__conversation-board__message__person__avatar"><img class="user_profile_image_and_name" src="https://ui-avatars.com/api/?background=random&size=50&bold=true&name=` + user + `"  title="` + user + `"/></div>
        </div>
        <div class="chat__conversation-board__message__context">
          <div class="chat__conversation-board__message__bubble"> <span style="display: block;" id="` + msg_id + `">` + OutputFinal + `</span></div>
        </div>
    </div>`
  }

  scroll_to_end();


  


  if (effect == true && document.visibilityState === 'visible' && OutputFinal.includes("image/png;base64,") == false) {
    output = OutputFinal;
    len = OutputFinal.length;
    intro(msg_id).then(createText(msg_id));
  }
}








function send() {
  if ($(".active").length > 0) {
    $('.intercom-composer-emoji-popover').toggleClass('active');
  }

  var text = document.getElementById("msg_input").value;
  if (!isEmptyOrSpaces(text)) {
    if (text.length <= 1) {
      text += "  ";
    } else if (text.length <= 2) {
      text += " ";
    }

    var msg_id = createmsg_id();
    document.getElementById("msg_input").value = '';
    add_mine(msg_id, text);

    var encrypted = btoa(CryptoJS.AES.encrypt(text, salt));

    if (username !== "") {
      var send = new Audio('assets/send.wav');
      send.play()
      ws.send('{"username": "' + username + '","id": "' + msg_id + '","msg": "' + encrypted.toString() + '"}');
    }
  }


  scroll_to_end();
  document.getElementById("msg_input").focus();
}




function send_image(text) {
  var msg_id = createmsg_id();
  document.getElementById("msg_input").value = '';
  add_mine(msg_id, text);

  var encrypted = btoa(CryptoJS.AES.encrypt(text, salt));

  if (username !== "") {
    var send = new Audio('assets/send.wav');
    send.play()
    ws.send('{"username": "' + username + '","id": "' + msg_id + '","msg": "' + encrypted.toString() + '"}');
  }

  scroll_to_end();
  document.getElementById("msg_input").focus();
}


function scroll_to_end() {
  var objDiv = document.getElementById("chat_msgs");
  objDiv.scrollTop = objDiv.scrollHeight;
}


function jumble(_current, _len) {
  let text;
  _current.length > 0 ? text = _current : text = _current;
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!@#$%&";
  for (var i = 0; i < (_len - _current.length); i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}


async function intro(msg_id) {
  let j = 0;
  while (j <= loops) {
    j++;
    await sleep(delay);
    loadText(jumble("", len), msg_id);
  }
  return 0;
}

async function createText(msg_id) {
  await sleep(loops * delay);
  for (let i = 1; i <= len; i++) {
    loadText(jumble(output.substring(0, i), len), msg_id)
    await sleep(delay);
  }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function loadText(_output, target) {
  html = _output;
  document.getElementById(target).innerHTML = html;
}


function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}


function search() {
  if (event.key === 'Enter') {
    send();
  }
}


function createmsg_id() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var msg_id = s.join("");
  return msg_id;
}


function substringBetween(s, a, b) {
  var p = s.indexOf(a) + a.length;
  return s.substring(p, s.indexOf(b, p));
}


function register() {
  (async () => {
    const { value: user } = await Swal.fire({
      input: 'text',
      html: '<h3 style="color: #fff;">Create new account</h3>',
      inputPlaceholder: 'Enter Your Name',
      background: '#141414',
      icon: 'info',
      backdrop: `
    rgba(0,0,0,0.5)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `
    })

    if (user) {
      setCookie("username", user, "9999");
      username = user;
      ws = new ReconnectingWebSocket(HOST, null, { debug: false, reconnectInterval: 200 });
    }
  })()
}


function logout() {
  setCookie("username", "", "9999");
  location.reload();
}


document.addEventListener(
  'gesturestart', (e) => e.preventDefault()
);


scroll_to_end();
window.visualViewport.addEventListener('resize', event => scroll_to_end());


$(document).on("click", ".intercom-emoji-picker-emoji", function (e) {
  document.getElementById("msg_input").value += " " + $(this).html() + " ";
});


$(document).on("click", ".chat__conversation-board__message__person__avatar", function (e) {
  var parser = new DOMParser();
  var htmlDoc = parser.parseFromString($(this).html(), 'text/html');
  var str = htmlDoc.getElementsByTagName('img')[0].title.replace(/_[^_]+$/, "")
  Swal.fire({
    html: "<h2 style='color: #a3a3a3;'>" + str + "</h2>",
    background: '#141414',
    imageUrl: htmlDoc.getElementsByTagName('img')[0].src,
    imageWidth: 80,
  });
});


document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === 'visible') {
    scroll_to_end();
  }
});


function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value) + expires + "; path=/";
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}



function photo() {
  $('#upload').click();
}


$("#upload").on('change', function (event) {
  base64($('#upload'), function (data) {
    send_image('<img style="max-width: 140px;" src="data:image/png;base64, ' + data.base64 + '"/>');
  })
});


function base64(file, callback) {
  var coolFile = {};
  function readerOnload(e) {
    var base64 = btoa(e.target.result);
    coolFile.base64 = base64;
    callback(coolFile)
  };

  var reader = new FileReader();
  reader.onload = readerOnload;

  var file = file[0].files[0];
  coolFile.filetype = file.type;
  coolFile.size = file.size;
  coolFile.filename = file.name;
  reader.readAsBinaryString(file);
}