# TS Web Components + Crow (C++) Template


This repo demonstrates a simple full-stack setup:


- Frontend: TypeScript + Web Components, built with `tsc` into `frontend/dist`.
- Backend: C++ Crow server that serves the static files from `frontend/dist`.


### Requirements


- Node.js (16+) and npm
- CMake (3.16+)
- A C++17-capable compiler (g++/clang)
- Docker (optional)


### Build & Run (local)


1. Build frontend


```sh
cd frontend
npm install
npm run build
cd ..
