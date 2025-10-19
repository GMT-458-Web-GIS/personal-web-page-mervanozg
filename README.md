[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/7C3xAGjq)

Personal Web Page Project - Mervan Özgönül

Project Aim and Overview

The primary goal of this assignment is to demonstrate fundamental web development skills (HTML, CSS, JS) and showcase my expertise in the Geomatics Engineering field, particularly Geographic Information Systems (GIS) and Photogrammetry. The project also focuses on integrating OpenLayers (OL) and ensuring consistent use of Git/GitHub throughout the development process.

GitHub Repository URL: https://github.com/GMT-458-Web-GIS/personal-web-page-mervanozg

Live Deployment (GitHub Pages): 

## ⚙️ Technical Requirements and Fulfillment
| **Objective** | **Fulfillment and Implementation** |
|----------------|------------------------------------|
| **HTML Structure (≥ 3 Files)** | Four different HTML files were created: **index.html** (Main Page), **background.html** (About Me), **technologies.html** (Technologies), and **company.html** (MERYKSI CO. Project). |
| **CSS: Animation** | The website incorporates both scroll-based and trigger-based animations:<br>1. **Typewriter Effect** on main titles.<br>2. **Fade-in Up** and **Slide-in Left** effects on content cards (implemented using **Intersection Observer** for a smooth scrolling experience).<br>3. **Ripple Click Effect** on buttons. |
| **CSS: Tabular Info** | The **technologies.html** page includes a professionally styled table presenting skills and proficiency levels with custom icons and color distinctions for clarity. |
| **OpenLayers (OL) Integration** | Implemented **sales mapping for the e-commerce website**, visualizing sales locations through OpenLayers. |
| **Git Usage (≥ 3 Commits / 3 Days)** | Maintained consistent use of Git throughout the development process with multiple meaningful commits made on different days as required by the assignment. |

## 🤖 AI Tools Usage Summary

Before using AI tools, preliminary research was conducted through **Google** to understand the problems and potential solutions.  
After gathering background information, **ChatGPT**, **DeepSeek**, and **Gemini** were utilized to refine solutions, improve styling, and ensure the professional quality of the website.

| **Area** | **Specific Issue** | **Learned / Resolved with AI** | **AI Tools Used** | **AI Usage (Estimated Time)** |
|-----------|--------------------|--------------------------------|-------------------|-------------------------------|
| **Deployment Fix** | Content cards were initially invisible due to incorrect animation triggering. | Refactored CSS (`opacity: 0; transform: translateY(30px)`) and implemented the `animate-in` class with the **Intersection Observer API** in JavaScript to ensure proper scroll-triggered animations. | ChatGPT, Gemini | ~45 Minutes |
| **Professional Styling** | Needed to enhance the dark-themed corporate layout with consistent visual quality. | Optimized the **High-Contrast** color palette and effectively integrated the **golden corporate logo** using the `filter: drop-shadow()` CSS property for elegant highlights. | DeepSeek, Gemini | ~20 Minutes |
| **Deployment Strategy** | Difficulty triggering automatic GitHub Pages deployment due to branch permission issues. | Learned how to publish automatically by creating and linking the **gh-pages** branch, bypassing restricted main branch settings. | ChatGPT | ~15 Minutes |

**🕒 Total Estimated AI Usage Time:** **> 2hours**

---

