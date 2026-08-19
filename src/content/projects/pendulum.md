---
title: "Launching a Parachain"
role: "Head of Product"
org: "Pendulum"
years: "2021 – 2023"
domain: "Blockchain"
summary: "A blockchain network optimised for cross-border payments — from concept to the fastest parachain auction in Polkadot's history, launching on Polkadot Mainnet in February 2023."
tile: logo
image: ../../assets/logos/Pendulum_logo.svg
logoSwing: true
span: sm
logos:
  - SDF-logo.svg
  - web3foundation.svg
  - polkadot.svg
featured: true
order: 4
---

<div class="tldr">
  <p class="label">TL;DR</p>
  <p>Pendulum was a Substrate-built Polkadot parachain optimised for
  cross-border payments. Its crowdloan reached its 300,000&nbsp;DOT hard cap
  in three minutes — the fastest parachain auction in Polkadot's history —
  and the chain launched on Polkadot Mainnet in February 2023.</p>
</div>

Pendulum was a parachain built on Substrate, Polkadot's out-of-the-box
blockchain framework.

Product development involved extensive research on feasibility and network
selection, along with coordinating the many complexities of a parachain
auction — spanning community engagement, technical development, marketing,
and operations in a highly complex, multifaceted environment.

We worked closely with the Stellar Development Foundation and the Web3
Foundation, securing grants from both to develop technical specifications.
One standout product was Spacewalk, the first bridge between the Stellar and
Polkadot networks.

Key challenges included navigating tokenomics, WebAssembly, and rapidly
evolving protocol standards, alongside stakeholder and community management,
and building interfaces for the network.

## Concept: a blockchain network optimised for cross-border payments

Cross-border payments are expensive and slow, and one of the biggest
obstacles is currency conversion. Traditional foreign exchange relies on
layers of intermediaries, each adding cost and delay.

At the time, automated market makers (AMMs) were emerging as a new way to
exchange assets on-chain, and we saw an opportunity to use them to offer
better market rates for fiat-pegged currencies. The vision: a smart contract
platform purpose-built for foreign exchange, where stablecoins representing
local currencies could be swapped efficiently, around the clock.

Stellar was the natural starting point — a network optimised for speed and
interoperability with existing financial infrastructure, with a rich
ecosystem of regulated, fiat-backed stablecoins. But Stellar had no smart
contract system, so the logic had to live elsewhere. We chose to build on
Polkadot's innovative parachain architecture: a network of specialised
blockchains sharing the security of a common relay chain, built with the
Substrate framework. This gave us shared security, forkless upgrades, and
native cross-chain messaging — with a trust-minimised bridge connecting the
new chain back to Stellar's fiat rails.

## Result: the fastest parachain auction in Polkadot's history

Pendulum's crowdloan reached its 300,000 DOT hard cap (~$1.4M) in just three
minutes — a record for the fastest-ever parachain auction across Polkadot
and Kusama. The chain launched on Polkadot Mainnet in February 2023.

Alongside the auction win, the project delivered Spacewalk, the first bridge
between the Stellar and Polkadot ecosystems. Built on the XCLAIM protocol as
a set of Substrate pallets, Spacewalk enables trust-minimised transfers of
Stellar's fiat-backed stablecoins into Polkadot — the foundation for
fiat-optimised DeFi on the network.

The work was carried out in close collaboration with the Stellar Development
Foundation and the Web3 Foundation, with grants from both supporting the
development of the technical specifications.

## Partners & ecosystem

<!-- Swap the placeholders for real logo files when they land. -->
<div class="partner-logos bleed-wide">
  <div class="media-placeholder"><span>Web3 Foundation</span></div>
  <div class="media-placeholder"><span>Stellar Development Foundation</span></div>
  <div class="media-placeholder"><span>Polkadot</span></div>
  <div class="media-placeholder"><span>Stellar</span></div>
</div>

<style>
  .partner-logos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  @media (min-width: 700px) {
    .partner-logos { grid-template-columns: repeat(4, 1fr); }
  }
  .partner-logos .media-placeholder {
    aspect-ratio: 5 / 2;
    text-align: center;
  }
</style>
