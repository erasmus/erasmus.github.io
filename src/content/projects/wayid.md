---
title: "WayID"
role: "Co-Founder"
org: "Lineage Labs"
years: "2026 – present"
domain: "Digital identity"
summary: "Provenance certificates for AI agents — WayID binds each agent's cryptographic identity to a verified human that anyone can check in one lookup."
tile: image
image: ../../assets/img/wayid.jpg
span: md
featured: true
order: 2
links:
  - label: "way.je"
    url: "https://way.je"
  - label: "WaySpace (companion product)"
    url: "https://way.space"
  - label: "Lineage Labs"
    url: "https://lineage.fyi"
  - label: "GitHub"
    url: "https://github.com/LineageLabs"
---

<div class="tldr">
  <p class="label">TL;DR</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua, quis nostrud
  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Live at <a href="https://way.je">way.je</a>.</p>
</div>

<figure class="bleed-wide">

![A video call where the caller's AI agent shows a WayID QR code, next to a phone verifying the agent session as authorised](../../assets/img/wayid.jpg)

</figure>

## The brief

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## How it works

WayID issues every agent a public certificate — a small, inspectable profile
binding the agent to its verified human owner. The two artefacts below are
the heart of the product: checking an agent from inside a conversation, and
the certificate itself.

<section class="wi-how bleed-wide">
  <div class="wi-dive">
    <div class="wi-dive-text">
      <p class="label">In the conversation</p>
      <h3>Verified without leaving the chat</h3>
      <p>Anyone talking to an agent asks <code>/whoareyou</code> and gets its
      certificate back instantly — owner, verification status, trust grade.
      No detective work, no switching apps.</p>
      <p class="wi-hint" aria-hidden="true">Click the chat to replay</p>
    </div>
    <div class="wi-artifact wi-artifact-r wi-chat" data-wi-chat role="img" aria-label="Chat demo: a user asks Earl the Bot /whoareyou and receives its WayID certificate — Trust A, owned by Sebastian H., a verified human">
      <div class="wi-chat-head">
        <img class="wi-chat-av" src="/assets/wayid/preview-bee.png" alt="" />
        <span class="wi-chat-head-text">
          <b>Earl the Bot</b>
          <span class="wi-chat-status"><span class="wi-status-dot"></span>online</span>
        </span>
        <span class="wi-chat-head-handle">@agent.earl</span>
      </div>
      <div class="wi-chat-body">
        <span class="wi-chat-day">Today</span>
        <div class="wi-msg wi-msg-agent" data-wi-step="1">
          <img class="wi-msg-av" src="/assets/wayid/preview-bee.png" alt="" />
          <div class="wi-bubble wi-bubble-agent">
            Hi! I'm Earl, Sebastian's assistant. How can I help?
            <span class="wi-msg-time">2:14 PM</span>
          </div>
        </div>
        <div class="wi-msg wi-msg-user" data-wi-step="2">
          <div class="wi-bubble wi-bubble-user">
            <code>/whoareyou</code>
            <span class="wi-msg-time">2:15 PM</span>
          </div>
        </div>
        <div class="wi-msg wi-msg-agent" data-wi-step="typing">
          <img class="wi-msg-av" src="/assets/wayid/preview-bee.png" alt="" />
          <div class="wi-bubble wi-bubble-agent wi-bubble-typing">
            <span class="wi-tdot"></span>
            <span class="wi-tdot" style="animation-delay: 0.2s"></span>
            <span class="wi-tdot" style="animation-delay: 0.4s"></span>
          </div>
        </div>
        <div class="wi-msg wi-msg-agent" data-wi-step="3">
          <img class="wi-msg-av" src="/assets/wayid/preview-bee.png" alt="" />
          <div class="wi-bubble wi-bubble-agent wi-bubble-cert">
            <span class="wi-cert-chip"><span class="wi-dot"></span>WayID certificate</span>
            <span class="wi-cert-line"><b>Earl the Bot</b> · Trust A</span>
            <span class="wi-cert-sub">Owned by <b>Sebastian H.</b> — verified human</span>
            <span class="wi-cert-link">way.je/agent/earl</span>
            <span class="wi-msg-time">2:15 PM</span>
          </div>
        </div>
      </div>
      <div class="wi-chat-input">
        <span class="wi-chat-placeholder">Message Earl…</span>
        <span class="wi-chat-send"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg></span>
      </div>
    </div>
  </div>
  <div class="wi-dive wi-dive-reverse">
    <div class="wi-dive-text">
      <p class="label">The certificate</p>
      <h3>Claimed once, trusted everywhere</h3>
      <p>A WayID certificate is a public, inspectable profile for an agent —
      its name, its owner, its verification status. Anyone the agent talks
      to can check it in one tap, in any channel it operates on.</p>
      <p><a href="https://way.je/agent/earl">See the live certificate&nbsp;→</a></p>
    </div>
    <a href="https://way.je/agent/earl" class="wi-artifact wi-artifact-l wi-profile" aria-label="Earl the Bot's live WayID certificate on way.je">
      <span class="wi-verify">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
        Verified Human Owner
      </span>
      <span class="wi-profile-main">
        <img class="wi-profile-orb" src="/assets/wayid/preview-bee.png" alt="" />
        <span class="wi-profile-name">Earl the Bot</span>
        <span class="wi-profile-handle">@agent.earl</span>
      </span>
      <span class="wi-profile-divider"></span>
      <span class="wi-profile-owner-block">
        <span class="wi-profile-owner-label">Human owner</span>
        <span class="wi-profile-owner">
          <img class="wi-profile-owner-av" src="/assets/wayid/human-profile-preview.png" alt="" />
          <span class="wi-profile-owner-text">
            <b>Sebastian H.</b>
            <span>@human.schorle</span>
          </span>
        </span>
      </span>
      <span class="wi-profile-foot">way<svg class="wi-waymark" viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="12"><line x1="76" y1="37" x2="24" y2="67" /><line x1="24" y1="37" x2="76" y2="67" /><line x1="50" y1="52" x2="50" y2="82" /></g><circle cx="50" cy="23" r="8.5" fill="#006cdb" /></svg>ID</span>
    </a>
  </div>
</section>

<style>
  /* WayID how-it-works — ported from way.je's marketing page, restyled to sit
     on the portfolio's paper. The cards keep the product's own palette so they
     read as artefacts of the real thing. */
  .wi-how {
    --wi-navy: #0e1233;
    --wi-green: #a0d246;
    --wi-ink-60: rgba(14, 18, 51, 0.6);
    --wi-ink-45: rgba(14, 18, 51, 0.45);
    --wi-hair: rgba(14, 18, 51, 0.08);
  }
  .wi-dive {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    align-items: center;
    padding-block: 1.5rem;
  }
  @media (min-width: 900px) {
    .wi-dive { grid-template-columns: 1fr 1fr; gap: 3.5rem; padding-block: 2.25rem; }
  }
  .wi-dive-text h3 {
    font-size: 1.5rem;
    margin-top: 0.5em;
  }
  .wi-dive-text p { margin-top: 0.8em; max-width: 44ch; }
  .wi-dive-text .label { margin: 0; }
  .wi-hint {
    font-family: var(--font-sans);
    font-size: 12px;
    color: var(--ink-muted);
  }
  /* Mobile: artifact above its text, like the source page */
  .wi-dive > .wi-artifact { order: -1; }
  @media (min-width: 900px) {
    .wi-dive > .wi-artifact { order: 0; }
    .wi-dive-reverse .wi-artifact { order: -1; }
  }
  .wi-artifact {
    display: block;
    width: 100%;
    max-width: 24rem;
    justify-self: center;
    border-radius: 1.25rem;
    background: #ffffff;
    color: var(--wi-navy);
    box-shadow: 0 26px 60px -20px rgba(14, 18, 51, 0.3);
    text-decoration: none;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .wi-artifact-r { transform: rotate(1deg); }
  .wi-artifact-l { transform: rotate(-1deg); }
  a.wi-artifact:hover { transform: rotate(0deg) translateY(-4px); }
  .wi-artifact,
  .wi-artifact * { font-family: var(--font-sans); letter-spacing: normal; }

  /* ── Chat demo ── */
  .wi-chat { overflow: hidden; display: flex; flex-direction: column; cursor: pointer; }
  .wi-chat-head {
    display: flex;
    align-items: center;
    gap: 0.6875rem;
    padding: 0.875rem 1.125rem;
    border-bottom: 1px solid var(--wi-hair);
  }
  .wi-chat-av {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 0 1px rgba(14, 18, 51, 0.1);
  }
  .wi-chat img { margin-block: 0; }
  .wi-chat-head-text { display: flex; flex-direction: column; gap: 1px; flex: 1; min-width: 0; }
  .wi-chat-head-text b { font-size: 0.875rem; }
  .wi-chat-status {
    display: inline-flex;
    align-items: center;
    gap: 0.3125rem;
    font-size: 0.6875rem;
    color: var(--wi-ink-60);
  }
  .wi-status-dot, .wi-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--wi-green);
  }
  .wi-chat-head-handle {
    font-family: var(--font-mono);
    font-size: 0.65625rem;
    color: var(--wi-ink-45);
  }
  .wi-chat-body {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.25rem 1.25rem 1.375rem;
    height: 21rem;
    overflow-y: auto;
    background: rgba(14, 18, 51, 0.025);
  }
  .wi-chat-day {
    align-self: center;
    font-size: 0.65625rem;
    font-weight: 500;
    color: var(--wi-ink-45);
    background: rgba(14, 18, 51, 0.05);
    padding: 3px 10px;
    border-radius: 9999px;
    margin-bottom: 0.25rem;
  }
  .wi-msg { display: flex; align-items: flex-end; gap: 0.5rem; }
  .wi-msg-user { justify-content: flex-end; }
  /* Steps hidden until the script reveals them (or instantly, reduced-motion) */
  [data-wi-step] { display: none; }
  [data-wi-step].wi-shown {
    display: flex;
    animation: wi-msg-in 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform-origin: bottom left;
  }
  .wi-msg-user[data-wi-step].wi-shown { transform-origin: bottom right; }
  .wi-msg-av {
    width: 1.625rem;
    height: 1.625rem;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
  .wi-bubble {
    position: relative;
    max-width: 82%;
    padding: 0.625rem 0.875rem 1.125rem;
    font-size: 0.8125rem;
    line-height: 1.5;
  }
  .wi-bubble-agent {
    background: #ffffff;
    border-radius: 1rem 1rem 1rem 0.25rem;
    box-shadow: 0 1px 2px var(--wi-hair);
  }
  .wi-bubble-user {
    background: var(--wi-navy);
    color: #fff;
    border-radius: 1rem 1rem 0.25rem 1rem;
  }
  .wi-bubble-user code { font-family: var(--font-mono); font-size: 0.78125rem; }
  .wi-msg-time {
    position: absolute;
    right: 0.75rem;
    bottom: 0.3125rem;
    font-size: 0.5625rem;
    opacity: 0.55;
  }
  .wi-bubble-typing { display: flex; align-items: center; gap: 0.25rem; padding: 0.875rem 1rem; }
  .wi-tdot {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(14, 18, 51, 0.35);
    animation: wi-bounce 1.2s ease infinite;
  }
  .wi-bubble-cert { display: flex; flex-direction: column; gap: 0.3125rem; }
  .wi-cert-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    align-self: flex-start;
    background: var(--wi-navy);
    color: #fff;
    font-size: 0.625rem;
    font-weight: 600;
    padding: 0.25rem 0.625rem;
    border-radius: 9999px;
    margin-bottom: 0.125rem;
  }
  .wi-cert-line { font-size: 0.8125rem; }
  .wi-cert-sub { font-size: 0.75rem; color: var(--wi-ink-60); }
  .wi-cert-link { font-family: var(--font-mono); font-size: 0.6875rem; color: #006cdb; }
  .wi-chat-input {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding: 0.75rem 1.125rem;
    border-top: 1px solid var(--wi-hair);
    background: #ffffff;
  }
  .wi-chat-placeholder {
    flex: 1;
    font-size: 0.8125rem;
    color: var(--wi-ink-45);
    background: rgba(14, 18, 51, 0.04);
    border-radius: 9999px;
    padding: 0.5rem 1rem;
  }
  .wi-chat-send {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.125rem;
    height: 2.125rem;
    border-radius: 50%;
    background: var(--wi-navy);
    color: #fff;
    flex-shrink: 0;
  }
  @keyframes wi-msg-in {
    from { opacity: 0; transform: translateY(14px) scale(0.96); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes wi-bounce {
    0%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-5px); }
  }

  /* ── Certificate card ── */
  .wi-profile { padding-top: 1.125rem; }
  .wi-verify {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-left: 1.25rem;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #3f7d20;
  }
  .wi-profile-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.2rem;
    padding: 1.25rem 1.25rem 1.75rem;
  }
  .wi-profile-orb {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 0.75rem;
  }
  .wi-profile-name {
    font-family: var(--font-head);
    font-size: 1.75rem;
    font-weight: 400;
    line-height: 1.1;
  }
  .wi-profile-handle { font-size: 0.875rem; color: var(--wi-ink-45); }
  .wi-profile-divider { display: block; height: 1px; margin: 0 1.25rem; background: var(--wi-hair); }
  .wi-profile-owner-block { display: block; padding: 0.875rem 1.25rem 1.125rem; }
  .wi-profile-owner-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--wi-ink-60);
    margin-bottom: 0.5rem;
  }
  .wi-profile-owner { display: flex; align-items: center; gap: 0.75rem; padding: 0.25rem 0.5rem; }
  .wi-profile-owner-av {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 0 1px rgba(14, 18, 51, 0.15);
  }
  .wi-profile-owner-text { display: flex; flex-direction: column; }
  .wi-profile-owner-text b { font-size: 0.9375rem; font-weight: 500; line-height: 1.2; }
  .wi-profile-owner-text span { font-size: 0.75rem; color: var(--wi-ink-60); }
  .wi-profile-foot {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--wi-hair);
    padding: 0.9rem;
    font-weight: 700;
    font-size: 1.0625rem;
    letter-spacing: -0.07em;
  }
  .wi-waymark {
    display: inline-block;
    width: 0.92em;
    height: 0.92em;
    flex-shrink: 0;
    transform: translateY(-0.16em);
    margin: 0 -0.05em;
  }
  @media (prefers-reduced-motion: reduce) {
    [data-wi-step].wi-shown, .wi-tdot { animation: none; }
  }
</style>

<script>
  // /whoareyou chat demo — plays once when scrolled into view; click replays.
  (function () {
    var chat = document.querySelector('[data-wi-chat]');
    if (!chat) return;
    var body = chat.querySelector('.wi-chat-body');
    var steps = chat.querySelectorAll('[data-wi-step]');
    var typing = chat.querySelector('[data-wi-step="typing"]');
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var playing = false;
    var timers = [];

    function reset() {
      timers.forEach(clearTimeout);
      timers = [];
      steps.forEach(function (el) { el.classList.remove('wi-shown'); });
    }
    function show(el) {
      el.classList.add('wi-shown');
      body.scrollTo({ top: body.scrollHeight, behavior: reduced ? 'auto' : 'smooth' });
    }
    function at(ms, fn) { timers.push(setTimeout(fn, ms)); }

    function play() {
      if (playing) return;
      playing = true;
      reset();
      if (reduced) {
        steps.forEach(function (el) { if (el !== typing) el.classList.add('wi-shown'); });
        body.scrollTop = body.scrollHeight;
        playing = false;
        return;
      }
      at(350, function () { show(chat.querySelector('[data-wi-step="1"]')); });
      at(1550, function () { show(chat.querySelector('[data-wi-step="2"]')); });
      at(2350, function () { show(typing); });
      at(3750, function () {
        typing.classList.remove('wi-shown');
        show(chat.querySelector('[data-wi-step="3"]'));
        playing = false;
      });
    }

    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) {
        io.disconnect();
        play();
      }
    }, { threshold: 0.45 });
    io.observe(chat);
    chat.addEventListener('click', play);
  })();
</script>

## The research

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
veritatis et quasi architecto beatae vitae dicta sunt explicabo.

> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
> consectetur, adipisci velit, sed quia non numquam eius modi tempora.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
nesciunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam
corporis suscipit laboriosam.

<figure class="bleed">
  <div class="media-placeholder" style="aspect-ratio: 21 / 9">
    <span>Full-width research graphic</span>
  </div>
  <figcaption>Lorem ipsum caption dolor sit amet.</figcaption>
</figure>

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
excepturi sint occaecati cupiditate non provident, similique sunt in culpa.

<figure class="bleed-wide">
  <div class="video-slot media-placeholder">
    <span>Video embed — swap for YouTube iframe</span>
  </div>
  <figcaption>Lorem ipsum video caption.</figcaption>
</figure>

## What happened

Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda
est, omnis dolor repellendus.

<figure>
  <div class="media-placeholder" style="aspect-ratio: 3 / 2">
    <span>Inline figure</span>
  </div>
  <figcaption>Lorem ipsum inline caption.</figcaption>
</figure>

## Looking back

Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
