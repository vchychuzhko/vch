---
title: Certifications
pageClass: certifications-page

sidebar: false
aside: false
prev:
  text: Portfolio
  link: /portfolio
next: false
editLink: false
lastUpdated: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const adobe = [
  {
    avatar: '/images/adobe-commerce.png',
    name: 'Adobe Certified Expert (Front End)',
    title: '2022 - 2026',
    links: [
      { icon: { svg: 'Show' }, link: 'https://certification.adobe.com/credential/verify/74b479ae-79ef-4e2f-82d4-cf53fec597e5' },
    ]
  },
  {
    avatar: '/images/adobe-commerce.png',
    name: 'Adobe Subject Matter Expert',
    title: 'From 2024',
    links: [
      { icon: { svg: 'Show' }, link: 'https://certification.adobe.com/credential/verify/d1f11473-b0b7-11ef-8f8b-42010a40001c' },
    ]
  },
]

const english = [
  {
    avatar: '/images/aptis.png',
    name: 'APTIS',
    title: 'From 2019',
    links: [
      { icon: { svg: 'Show' }, link: 'https://vchychuzhko.com/aptis.pdf' },
    ]
  },
]
</script>

# Certifications

## Adobe Commerce

<VPTeamMembers size="small" :members="adobe" />

## English

<VPTeamMembers size="small" :members="english" />
