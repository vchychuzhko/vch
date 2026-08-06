---
title: Introduction
description: Introduction to Personal Blog

editLink: false
lastUpdated: false
---

# Knowledge Base

My name is Vladyslav, and this section is where I share useful information from my personal experience in web development.

## More

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const knowledge = [
  {
    avatar: 'https://vitepress.dev/vitepress-logo-mini.svg',
    name: 'Wiki',
    desc: 'Vitepress',
    links: [
      { icon: { svg: 'Live' }, link: 'https://vchychuzhko.github.io/wiki' },
      { icon: { svg: 'Github' }, link: 'https://github.com/vchychuzhko/wiki' },
    ]
  },
  {
    avatar: 'https://storybook.js.org/icon.svg',
    name: 'UI Components',
    desc: 'Storybook, Vue.js, SVG',
    links: [
      { icon: { svg: 'Live' }, link: 'https://vchychuzhko.github.io/ui-components' },
      { icon: { svg: 'Github' }, link: 'https://github.com/vchychuzhko/ui-components' },
    ]
  },
];
</script>

<VPTeamMembers :members="knowledge" />
