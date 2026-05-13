# VV | MIDI Nav Controller

A premium MIDI-enabled navigation controller prototype. Map physical MIDI controllers to directional navigation commands with ease.

## Features
- **Intuitive UI**: A sleek, 4-way or 8-way directional pad designed for MIDI workflows.
- **MIDI Learn**: Quickly map hardware knobs or buttons to navigation actions.
- **Contextual Config**: Right-click any direction to adjust step sizes or specific MIDI CC/Note assignments.
- **Responsive Design**: Built with Tailwind CSS and Framer Motion for a smooth, high-fidelity experience.

## Quick Start
1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Run Locally**:
   ```bash
   npm run dev
   ```

## Project Structure
- `App.tsx`: Main application entry point.
- `components/NavController.tsx`: Core directional UI logic.
- `components/NavContainer.tsx`: State management for MIDI and navigation logic.
- `components/ContextMenus.tsx`: Right-click configuration overlays.

## Deployment
This project is configured for automated deployment to GitHub Pages via GitHub Actions.
