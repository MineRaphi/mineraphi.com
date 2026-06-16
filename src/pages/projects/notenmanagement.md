---
layout: ../../layouts/ProjectLayout.astro
title: Notenmanagement
description: Mobile Notenmanagement App using the HTL-Braunau Notenmanagement Rest API.
github: https://github.com/MineRaphi/Notenmanagment
---

## Overview

Notenmanagement is a mobile app that gives students at HTL Braunau a clean, on-the-go view of their grades. Teachers enter results through the official website, and this app surfaces that data in a straightforward mobile interface.

The backend, REST API and [official Website](https://notenmanagement.htl-braunau.at) were built by other students at HTL Braunau and Prof. Waser as a separate project. My contribution was this version mobile frontend, which mirrors the design of the official Website.

## What It Does

- Displays grades across all subjects, organized by class and semester
- Fetches live data from the HTL Braunau Notenmanagement REST API
- Runs on both iOS and Android from a single shared codebase
- Designed to be fast and readable — grades at a glance, no clutter

## Tech Stack

The app is built with [**Ionic**](https://ionicframework.com) v8 and [**Capacitor**](https://capacitorjs.com) v7, which let me write the interface once in web technologies and deploy it as a real native app on both platforms.

- **Ionic** — component library and UI framework optimized for mobile
- **Capacitor** — bridges the web app to native iOS and Android runtimes
- **HTL Braunau REST API** — school-internal API that provides grade data

## Context

This is a school-internal tool, exclusive to HTL Braunau. The API it talks to is only reachable with a school login, so the app isn't something you can just download and run — it's built for a specific community and a specific use case.

I started the project because the old iOS app had become unreliable for many students, and the Android app locks most features behind a paywall. My goal was also to have the same design of the website on both Android and iOS.

## What I Learned

This was my first time building something with Ionic and Capacitor, so a good chunk of the project was learning how cross-platform mobile development actually works in practice, the quirks of both frameworks, how to handle platform differences, and how to make a web-based UI feel native. Working against a real API also meant dealing with constraints and edge cases that rarely show up in small practice projects.

## Side note

The app isn't on the App Store or Play Store at the moment because I can't set up a developer account right now. Android users can install it via the APK on the GitHub page.