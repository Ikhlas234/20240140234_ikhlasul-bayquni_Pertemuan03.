// Simulasi chatbot rule-based: tombol pertanyaan -> jawaban tetap
const chatBody = document.getElementById('chatBody');

function addMessage(text, who) {
  const p = document.createElement('p');
  p.className = 'msg msg--' + who;
  p.textContent = text;
  chatBody.appendChild(p);
  chatBody.scrollTop = chatBody.scrollHeight;
}

document.querySelectorAll('.chat__opts button').forEach(function (btn) {
  btn.addEventListener('click', function () {
    addMessage(btn.dataset.q, 'user');
    setTimeout(function () { addMessage(btn.dataset.a, 'bot'); }, 450);
  });
});
