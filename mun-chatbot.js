/*!
 * Navdoot Parishad 1.0 — FAQ Chatbot Widget
 * Drop-in, self-contained, no external API calls.
 * Only answers using the fixed Q&A dataset below, sourced from
 * faq.html, index.html, register.html and terms.html.
 * To add/edit answers, just edit the FAQ_DATA array.
 */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* 1. FAQ DATA — edit this array to add or change answers             */
  /* ------------------------------------------------------------------ */
  var FAQ_DATA = [
    {
      keywords: ["date", "when", "conference date", "session", "gavel", "days left", "countdown"],
      question: "When is the conference?",
      answer: "Navdoot Parishad 1.0 is on <b>17–18 November 2026</b> at Air Force Golden Jubilee Institute, Subroto Park, New Delhi. The countdown on the home page runs to midnight IST on the 17th."
    },
    {
      keywords: ["fee", "cost", "price", "how much", "registration fee", "charges"],
      question: "What's the registration fee?",
      answer: "The base registration fee is <b>₹5</b>. UNGA is a double-delegation committee (₹10 total), and IPL is a 4-delegate team committee (₹20 total). All other committees are single-delegate at ₹5."
    },
    {
      keywords: ["included", "delegate kit", "what do i get", "meals", "kit"],
      question: "What's included in the delegate fee?",
      answer: "Your delegate kit, committee sessions, meals across the conference, and entry to the closing ceremony are included. Accommodation is not included — outstation delegates can ask us for nearby stay options."
    },
    {
      keywords: ["pay", "payment", "upi", "phonepe", "how to pay", "qr", "utr", "transaction id", "9800"],
      question: "How do I pay?",
      answer: "Pay via UPI, debit/credit card, or net banking — scan the PhonePe QR on the registration page, or send the exact amount to <b>+91 84476 82098</b> (payee: Amit Kumar Singh). Then enter your UTR / Transaction ID on the registration form to confirm your seat."
    },
    {
      keywords: ["individual", "without a team", "no team", "solo", "alone register"],
      question: "Can I register without a team?",
      answer: "Yes! Choose <b>Individual</b> at registration. You'll be allotted a committee and portfolio just like every other delegate. Schools can instead use <b>School Entry</b> and name their institution."
    },
    {
      keywords: ["first time", "beginner", "no experience", "never done mun", "new to mun"],
      question: "I'm a first-timer with zero MUN experience — is that okay?",
      answer: "Absolutely — you're welcome! Navdoot Parishad is built for first-timers as much as veterans. Training primers and a supportive Executive Board will help you find your voice in committee."
    },
    {
      keywords: ["committee", "portfolio", "allotment", "preference", "how does allotment work", "rank"],
      question: "How does committee and portfolio allotment work?",
      answer: "You rank three committees. If UNGA is among your choices, you also rank country preferences from the live matrix. Delegates from <b>AFGJI, TAFS, and AFBBS</b> may select any open seat, including the first eight nations and Pakistan — other schools and individual delegates see those nine seats as Blocked. Your highest available preference is confirmed after payment is received."
    },
    {
      keywords: ["refund", "cancel", "money back"],
      question: "What's the refund policy?",
      answer: "Registration fees are <b>non-refundable</b>. If you can't attend, a delegate replacement is possible through Delegate Affairs — see the full <a href='./terms.html'>Policy document</a> for details."
    },
    {
      keywords: ["replace", "replacement", "swap delegate", "someone else attend", "transfer spot"],
      question: "Can I replace myself with another delegate?",
      answer: "Yes. Email our Delegate Affairs Team with a clear reason and the replacement's full name, contact info, and background. Replacements are usually processed within <b>2–3 days</b>."
    },
    {
      keywords: ["venue", "location", "address", "where is it", "afgji address"],
      question: "Where exactly is the venue?",
      answer: "Air Force Golden Jubilee Institute, Senior Wing, Subroto Park, New Delhi, Delhi NCT — <b>110010</b>. Maps and reporting instructions are shared with confirmed delegates closer to the conference date."
    },
    {
      keywords: ["instagram", "discord", "social media", "community", "follow"],
      question: "Where are Instagram and Discord?",
      answer: "Instagram: <a href='https://www.instagram.com/afgjimunsociety/' target='_blank' rel='noopener'>@afgjimunsociety</a><br>Discord: <a href='https://discord.gg/qznEunP63' target='_blank' rel='noopener'>Join the server</a>"
    },
    {
      keywords: ["wrong country", "change country", "mistake registration", "chose wrong"],
      question: "I selected the wrong country — can I change it?",
      answer: "Write to Delegate Affairs with your registration ID — replacements and corrections are handled case by case. Please don't register a second time for the same person."
    },
    {
      keywords: ["contact", "email", "reach out", "delegate affairs", "queries", "help"],
      question: "How do I contact the organizers?",
      answer: "Delegate Affairs: <a href='mailto:reetpupneja5@gmail.com'>reetpupneja5@gmail.com</a><br>General Enquiries: <a href='mailto:adityatopandey21@gmail.com'>adityatopandey21@gmail.com</a>"
    },
    {
      keywords: ["committees list", "which committees", "how many committees", "councils"],
      question: "What committees are on offer?",
      answer: "12 in total. <b>Offline:</b> UNGA, IPL, ICJ, NSCS, IAEA, IP, UNHRC, UNCSW, UNDP.<br><b>Online:</b> WTO, UNODC, AIPPM."
    },
    {
      keywords: ["online", "virtual", "attend online", "remote"],
      question: "Can I attend online?",
      answer: "Yes — choose <b>Online</b> as your participation mode at registration. Online delegates can pick from WTO, UNODC, or AIPPM."
    },
    {
      keywords: ["hindi name", "navdoot", "what does navdoot mean", "name meaning"],
      question: "What does 'Navdoot Parishad' mean?",
      answer: "नव (<i>Nav</i>) means \"the new\", and दूत (<i>doot</i>) means \"the messenger\". Parishad is an assembly — so Navdoot Parishad is an assembly of new envoys, welcoming first-timers and veterans alike."
    },
    {
      keywords: ["register", "how to register", "sign up", "registration link"],
      question: "How do I register?",
      answer: "Head to the <a href='./register.html'>Register page</a> — choose your mode (Online/Offline), entry type (Individual/School), fill in delegate details, rank three committees, and pay via PhonePe UPI to confirm."
    }
  ];

  var FALLBACK_ANSWER =
    "I don't have an answer for that yet. Please check the <a href='./faq.html'>FAQ page</a>, or email us at " +
    "<a href='mailto:reetpupneja5@gmail.com'>reetpupneja5@gmail.com</a> (Delegate Affairs) / " +
    "<a href='mailto:adityatopandey21@gmail.com'>adityatopandey21@gmail.com</a> (General).";

  var QUICK_CHIPS = ["When is the conference?", "How do I pay?", "What's the fee?", "Where's the venue?"];

  /* ------------------------------------------------------------------ */
  /* 2. Matching engine — simple, transparent keyword scoring            */
  /* ------------------------------------------------------------------ */
  function normalize(s) {
    return s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  function findAnswer(userText) {
    var q = normalize(userText);
    if (!q) return null;
    var qWords = q.split(" ");
    var best = null;
    var bestScore = 0;

    FAQ_DATA.forEach(function (item) {
      var score = 0;
      var haystack = normalize(item.question + " " + item.keywords.join(" "));
      item.keywords.forEach(function (kw) {
        var nkw = normalize(kw);
        if (q.indexOf(nkw) !== -1) score += nkw.split(" ").length * 2; // phrase match bonus
      });
      qWords.forEach(function (w) {
        if (w.length > 2 && haystack.indexOf(w) !== -1) score += 1;
      });
      if (score > bestScore) {
        bestScore = score;
        best = item;
      }
    });

    return bestScore >= 2 ? best : null;
  }

  /* ------------------------------------------------------------------ */
  /* 3. Styles                                                           */
  /* ------------------------------------------------------------------ */
  var css = "\
  #np-chat-launcher{position:fixed;bottom:22px;right:22px;width:58px;height:58px;border-radius:50%;\
    background:#f0c469;color:#0e0c17;border:none;cursor:pointer;z-index:99999;box-shadow:0 8px 24px rgba(0,0,0,.4);\
    display:flex;align-items:center;justify-content:center;font-size:26px;transition:transform .2s ease;}\
  #np-chat-launcher:hover{transform:scale(1.07);}\
  #np-chat-window{position:fixed;bottom:92px;right:22px;width:340px;max-width:92vw;height:460px;max-height:74vh;\
    background:#0e0c17;border:1px solid rgba(240,196,105,.35);border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.55);\
    display:none;flex-direction:column;overflow:hidden;z-index:99999;font-family:'Jost',Arial,sans-serif;}\
  #np-chat-window.open{display:flex;}\
  #np-chat-header{background:linear-gradient(135deg,#7a1e2b,#0e0c17);color:#f2e6cf;padding:12px 14px;\
    display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(240,196,105,.25);}\
  #np-chat-header b{font-size:14px;color:#f0c469;}\
  #np-chat-header small{display:block;font-size:11px;color:#c9b99a;}\
  #np-chat-close{background:none;border:none;color:#f2e6cf;font-size:18px;cursor:pointer;line-height:1;padding:2px 6px;}\
  #np-chat-messages{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px;background:#0a0812;}\
  .np-msg{max-width:85%;padding:8px 11px;border-radius:12px;font-size:13.5px;line-height:1.45;word-wrap:break-word;}\
  .np-msg a{color:#f0c469;}\
  .np-msg.bot{background:rgba(240,196,105,.12);color:#f2e6cf;align-self:flex-start;border:1px solid rgba(240,196,105,.2);}\
  .np-msg.user{background:#f0c469;color:#0e0c17;align-self:flex-end;font-weight:500;}\
  #np-chat-chips{display:flex;flex-wrap:wrap;gap:6px;padding:0 12px 10px;background:#0a0812;}\
  .np-chip{background:rgba(240,196,105,.1);border:1px solid rgba(240,196,105,.35);color:#f0c469;\
    font-size:11.5px;padding:5px 9px;border-radius:999px;cursor:pointer;}\
  .np-chip:hover{background:rgba(240,196,105,.22);}\
  #np-chat-inputrow{display:flex;border-top:1px solid rgba(240,196,105,.25);background:#0e0c17;}\
  #np-chat-input{flex:1;background:transparent;border:none;color:#f2e6cf;padding:11px 12px;font-size:13.5px;outline:none;}\
  #np-chat-send{background:#f0c469;border:none;color:#0e0c17;font-weight:600;padding:0 16px;cursor:pointer;font-size:13px;}\
  #np-chat-send:hover{background:#e0b455;}\
  @media(max-width:420px){#np-chat-window{right:10px;bottom:82px;width:94vw;}#np-chat-launcher{right:14px;bottom:14px;}}\
  ";
  var styleTag = document.createElement("style");
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  /* ------------------------------------------------------------------ */
  /* 4. Build DOM                                                        */
  /* ------------------------------------------------------------------ */
  var launcher = document.createElement("button");
  launcher.id = "np-chat-launcher";
  launcher.setAttribute("aria-label", "Open Navdoot Parishad chat assistant");
  launcher.innerHTML = "&#128172;";

  var win = document.createElement("div");
  win.id = "np-chat-window";
  win.innerHTML =
    '<div id="np-chat-header">' +
      '<div><b>Navdoot Parishad</b><small>Ask me about registration, fees, dates &amp; more</small></div>' +
      '<button id="np-chat-close" aria-label="Close chat">&times;</button>' +
    '</div>' +
    '<div id="np-chat-messages"></div>' +
    '<div id="np-chat-chips"></div>' +
    '<div id="np-chat-inputrow">' +
      '<input id="np-chat-input" type="text" placeholder="Type your question…" autocomplete="off" />' +
      '<button id="np-chat-send">Send</button>' +
    '</div>';

  document.body.appendChild(launcher);
  document.body.appendChild(win);

  var messagesEl = win.querySelector("#np-chat-messages");
  var chipsEl = win.querySelector("#np-chat-chips");
  var inputEl = win.querySelector("#np-chat-input");
  var sendBtn = win.querySelector("#np-chat-send");
  var closeBtn = win.querySelector("#np-chat-close");

  function addMessage(html, who) {
    var div = document.createElement("div");
    div.className = "np-msg " + (who === "user" ? "user" : "bot");
    div.innerHTML = html;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function renderChips() {
    chipsEl.innerHTML = "";
    QUICK_CHIPS.forEach(function (q) {
      var chip = document.createElement("span");
      chip.className = "np-chip";
      chip.textContent = q;
      chip.onclick = function () { handleUserMessage(q); };
      chipsEl.appendChild(chip);
    });
  }

  function handleUserMessage(text) {
    text = text.trim();
    if (!text) return;
    addMessage(text, "user");
    inputEl.value = "";
    var match = findAnswer(text);
    setTimeout(function () {
      addMessage(match ? match.answer : FALLBACK_ANSWER, "bot");
    }, 250);
  }

  sendBtn.addEventListener("click", function () { handleUserMessage(inputEl.value); });
  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") handleUserMessage(inputEl.value);
  });

  launcher.addEventListener("click", function () {
    win.classList.toggle("open");
    if (win.classList.contains("open") && messagesEl.children.length === 0) {
      addMessage("Namaste! 🙏 I'm the Navdoot Parishad assistant. Ask me about dates, fees, payment, committees, registration or the venue.", "bot");
      renderChips();
    }
  });
  closeBtn.addEventListener("click", function () { win.classList.remove("open"); });
})();
