# Baldwin Park Medical Academy Online

## Preparing Tomorrow's Healthcare Professionals

Welcome to the Baldwin Park Medical Academy Online project.

This repository contains the development of an interactive learning platform designed to prepare high school
students for careers in healthcare through engaging lessons, simulation-based learning, and real-world
experiences.

**🔗 Live site:** [mcash429.github.io/baldwin-park-medical-academy](https://mcash429.github.io/baldwin-park-medical-academy/)

---

## Vision

To create one of the nation's premier digital healthcare academies for secondary education.

---

## Mission

Empower students with the knowledge, skills, confidence, and compassion needed to become tomorrow's
healthcare professionals.

---

## Core Values

- Knowledge
- Skills
- Service
- Leadership

---

## What's Built So Far

The site currently has six connected pages, all sharing one consistent design system (colors, fonts,
components) built in plain HTML, CSS, and JavaScript — no frameworks or build tools required.

| Page | File | What it does |
|---|---|---|
| Home | `index.html` | Overview of the academy, program highlights, and entry points to every other page |
| Simulation Center | `simulation-center.html` | Overview of the clinical simulation learning spaces and skill areas |
| Sports Medicine | `sports-medicine.html` | Full pathway page: clinical skills, work-based learning, college credit, certifications, careers |
| Medical Terminology | `terminology.html` | Interactive learning tool — flashcards, a timed matching game, and a quiz covering 63 medical word roots, prefixes, and suffixes across Beginner and Advanced difficulty levels |
| Careers | `careers.html` | Browse 14 healthcare careers with real BLS salary/education data, or take a 5-question quiz that recommends career matches based on interests |
| Alumni (Braves in Healthcare) | `alumni.html` | Alumni network overview, ways to get involved, and space for future alumni spotlight profiles |

**Shared files:**
- `styles.css` — one stylesheet used by every page
- `script.js` — shared site behavior (navigation menu, login modal, placeholder-button notifications)
- `terminology.js` / `careers.js` — logic specific to those two interactive tools
- `auth.js` — Google Sign-In logic for students (see **Student Login**, below)

---

## Student Login

The login modal currently uses a placeholder Google Sign-In flow, restricted to `@bpusd.net` accounts,
built with Google Identity Services. It is **not yet fully activated** — the Client ID in each page is
still a placeholder, and no real student data or dashboard exists behind it.

This is intentional: the plan is to keep it inactive until the project has district review and a clear
answer on whether/how real student sign-in should work. See `auth.js` for setup notes when that time comes.

---

## Project Status

**Prototype for planning and district review.** This is not yet an official district tool. It's built to
demonstrate what the academy's online presence could look like and to support a conversation with school
and district stakeholders about next steps.

### Possible next steps
- District/staff review and feedback
- Real alumni profiles to replace the placeholder spotlight cards
- Additional interactive learning tools for other pathways (e.g., Patient Care, Emergency Response)
- Decision on whether/when to activate real student sign-in
- Expanded career and terminology content based on teacher input

---

## Current Version

Version 0.4 — Interactive Tools & Unified Design
