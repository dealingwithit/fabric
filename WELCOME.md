# The Fabric Welcome Package
Welcome to Fabric, the World's Computer.  Join us as we build a distributed network
for securely computing arbitrary work to form the world's first decentralized
operating system.

Right now, we need your help.  Building a system of this scale requires as many
people as possible, and since I have got your attention....

Here are a few links you can read to bring yourself up to speed:

- [Why Are We Here][why-are-we-here]
- [Fabric Overview][fabric-overview]
- [Introduction to Maki, an experimental app framework][maki-intro]
- [Resource-Driven Design, the core philosophy of Maki][resources]

## General Background
Traditionally, collaborative software often requires the use of a central point
of coordination.  Fabric, rather, forms a _distributed supercomputer_, dividing
programs into small bundles which are then run by the network — with each
participating node receiving fair payment for the use of their resources.

Fabric implements an _information market_, in which participants buy and sell
computations using self-enforcing smart contracts.  What this creates is a market for
processing time, itself used to store and retrieve information locked in
cryptographically-sealed envelopes, which require unique proofs-of-work to
break their seals and reveal their contents.

### Critical Mass
For a market like this to function and for network effects to manifest, a
certain _critical mass_ must be met.  We bootstrap this mass by building our own
programs, deploying them to Fabric, and relying on them to do our work.  We call
it **dogfooding** — and we'd like to help you do the same by teaching everyone
to code, even if just a little.

To this end, we decided to investing in our community by running
[the #learning channel][learning] for anyone who'd like to build something for
themselves (or others!) — we're always around to answer questions and provide
resources for your journey.  Come say hello!

### Where does the blockchain come in?
A blockchain presents a useful data structure for achieving eventual consistency in a
widely distributed system.  Fabric provides a simple interface for applications
to interact with a blockchain, including multi-chain configurations.

Unique to Fabric, we have the idea of a _fuzzchain_, a dynamic swarm of several
sidechains interacting through atomic cross-chain swaps.  As opposed to a
simple chain-to-chain pair, these multi-chain mechanisms allows one to compute
contracts without relying on a single anchor or base-pair chain.

Fabric's configurable consensus layer allows for one to create blockchains at
will, interleaving their ledgers like threads in a web.

If you feel ready to learn more, try [the technical specification][specification].

[why-are-we-here]: https://github.com/martindale/maki/blob/tatami/source/snippets/why-are-we-here.md
[fabric-overview]: https://github.com/martindale/maki/blob/tatami/source/snippets/fabric-overview.md
[maki-intro]: https://next.maki.io/guides/what-is-maki
[resources]: https://maki.io/docs/resources
[institute]: http://nakamotoinstitute.org/mempool/proof-that-proof-of-work-is-the-only-solution-to-the-byzantine-generals-problem/
[product]: https://maki.io/topic/product
[learning]: https://maki.io/topic/learning
[specification]: snippets/specification.md
