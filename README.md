# Game of Life

Welcome to the **Game of Life** project! This is a modern, visually appealing implementation of Conway's Game of Life, built using React and Vite. The goal of this project is to create an interactive, aesthetic experience that brings this classic cellular automaton to life.

## Features

- **Interactive Gameplay:** Click to toggle cells between alive and dead.
- **Customizable Grid:** Adjust the grid size to your preference.
- **Dynamic Animations:** Smooth, classy animations for evolving generations.
- **Futuristic Design:** A bright, futuristic theme enhanced with Tailwind CSS.
- **Fast Development:** Powered by Vite for a super-fast development experience.

## What is the Game of Life?

The **Game of Life** is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It's a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input from human players. Despite its simplicity, the Game of Life is Turing complete and can simulate a universal constructor or any other Turing machine.

### How It Works

The game consists of a grid of cells, each of which can be in one of two states: **alive** or **dead**. The grid evolves through discrete time steps, following a set of simple rules:

1. **Underpopulation:** Any live cell with fewer than two live neighbors dies (as if by underpopulation).
2. **Overpopulation:** Any live cell with more than three live neighbors dies (as if by overpopulation).
3. **Survival:** Any live cell with two or three live neighbors lives on to the next generation.
4. **Reproduction:** Any dead cell with exactly three live neighbors becomes a live cell (as if by reproduction).

### Why Is It Interesting?

The Game of Life has fascinated mathematicians, computer scientists, and hobbyists for decades because of its complex emergent behavior from such simple rules. Patterns such as still lifes, oscillators, and spaceships can emerge, demonstrating how simple rules can lead to complex behavior and even simulate logic and computation.

### Applications and Significance

The Game of Life is more than just a curiosity; it has implications in various fields, such as:

- **Mathematics:** Studying patterns, growth, and decay.
- **Computer Science:** Understanding cellular automata, simulation, and emergent behavior.
- **Artificial Life:** Modeling biological processes and evolutionary dynamics.

By implementing the Game of Life, we can explore these fascinating concepts and enjoy watching complex systems evolve from simple beginnings.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yashnigam07/Game_Of_Life.git
   cd game-of-life
