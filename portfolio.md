---
title: Portfolio
pageClass: portfolio-page

sidebar: false
aside: false
prev: false
next:
  text: Certifications
  link: /certifications
editLink: false
lastUpdated: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const portfolio = [
  {
    avatar: 'https://playsome.fun/images/og.svg',
    name: 'PlaySome',
    desc: 'Symfony, AudioContext API',
    links: [
      { icon: { svg: 'Live' }, link: 'https://ps.vchychuzhko.com' },
      { icon: { svg: 'Github' }, link: 'https://github.com/vchychuzhko/playsome' },
    ]
  },
  {
    avatar: 'https://pa-demo.vchychuzhko.com/og.svg',
    name: 'Personal Accountant',
    desc: 'Symfony, EasyAdmin, Chart.js',
    links: [
      { icon: { svg: 'Demo' }, link: 'https://pa-demo.vchychuzhko.com' },
      { icon: { svg: 'Github' }, link: 'https://github.com/vchychuzhko/personal-accountant' },
      { icon: { svg: 'Docker' }, link: 'https://hub.docker.com/r/vchychuzhko/personal-accountant' },
    ]
  },
  {
    avatar: 'https://alcotimer.com/og.svg',
    name: 'AlcoTimer',
    desc: 'Vue.js, PrimeVue, Pinia',
    links: [
      { icon: { svg: 'Live' }, link: 'https://alcotimer.com' },
      { icon: { svg: 'Github' }, link: 'https://github.com/vchychuzhko/alcotimer' },
    ]
  },
  {
    avatar: 'https://vchychuzhko.github.io/todo/og.svg',
    name: 'ToDo',
    desc: 'Vue.js, Vuetify, Tailwind',
    links: [
      { icon: { svg: 'Live' }, link: 'https://vchychuzhko.github.io/todo' },
      { icon: { svg: 'Github' }, link: 'https://github.com/vchychuzhko/todo' },
    ]
  },
];
</script>

<h1>Portfolio</h1>

<VPTeamMembers :members="portfolio" />

<div class="tip custom-block" style="padding-top: 8px">
  And more unpublished projects on <a href="https://github.com/vchychuzhko?tab=repositories" target="_blank">GitHub</a>
</div>
