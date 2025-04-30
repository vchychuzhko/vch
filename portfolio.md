---
title: Portfolio
pageClass: portfolio-page

sidebar: false
aside: false
prev:
  text: About Me
  link: /about
next:
  text: Certifications
  link: /certifications
editLink: false
lastUpdated: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const portfolio = [
  {
    avatar: 'https://playsome.fun/images/og.jpg',
    name: 'PlaySome',
    title: 'Web application to visualize music in real time',
    desc: 'Symfony, JavaScript',
    links: [
      { icon: { svg: 'Live' }, link: 'https://playsome.fun' },
      { icon: { svg: 'Github' }, link: 'https://github.com/vchychuzhko/playsome' },
    ]
  },
  {
    avatar: 'https://pa-demo.vchychuzhko.com/og.svg',
    name: 'Personal Accountant',
    title: 'App to keep all balances and transactions organized',
    desc: 'Symfony, EasyAdmin, Chart.js',
    links: [
      { icon: { svg: 'Demo' }, link: 'https://pa-demo.vchychuzhko.com' },
      { icon: { svg: 'Github' }, link: 'https://github.com/vchychuzhko/personal-accountant' },
    ]
  },
]
</script>

<h1>Portfolio</h1>

<VPTeamMembers :members="portfolio" />

<div class="tip custom-block" style="padding-top: 8px">
  And more unpublished projects on <a href="https://github.com/vchychuzhko?tab=repositories" target="_blank">GitHub</a>
</div>
