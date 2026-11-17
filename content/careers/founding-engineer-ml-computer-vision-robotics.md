---
title: Founding Engineer - ML in Computer Vision & Robotics
team: Engineering
location: Paris, France
contract: Full-time
salary: €70-90k + BSPCE
experience: 3-5 years, startup experience
education: Top-tier engineering school or PhD
work_time: Full-time
summary: Join the founding team and own the computer-vision and map-matching models of MerlinSight, the onboard navigation agent that gives drones their position when GNSS is jammed or denied.
apply_email: contact@kalgard.ai
published: true
---

## About the company

Kalgard Systems is a geospatial-intelligence company for the post-GNSS era. We build MerlinSight, an onboard navigation agent: the drone observes the ground with low-cost sensors, matches what it sees against georeferenced data loaded before the flight, and gets its position back, without GNSS and without emitting a signal. The system has flown in real campaigns in front of army observers, live on board, at the low altitudes where tactical drones actually operate.

We are incubated by the Inria Startup Studio and based in Paris, working with the French defence ecosystem, and preparing incorporation and a seed round. You would join the three founders as the first engineering hire, with the ownership and the responsibility that implies.

## Role

You own the models at the core of MerlinSight: computer-vision and map-matching models that turn what the drone sees into a position, fine-tuned on real flight data and running in real time on embedded hardware.

### Computer vision & map matching

- Design, train and evaluate the map-matching models that align onboard imagery with georeferenced data: rasterised matching against imagery and raster maps, vector matching against the road graph.
- Fine-tune vision models for low-altitude UAV imagery, where perspective and scale change fast.
- Push robustness where it is hardest: seasonal change, degraded weather, terrain without texture.

### Reinforcement learning & fine-tuning

- Explore reinforcement learning to orchestrate the matching pipelines in flight: which model to trust, on which terrain, at which moment.
- Build the fine-tuning loop on flight data: datasets, metrics, replay, so every campaign makes the models better.
- Take models from research idea to a version that earns its place in the onboard pipeline.

### Light robotics

- Ship your models on embedded compute (Raspberry Pi 5, Jetson-class), under real latency and power budgets.
- Take part in flight campaigns: instrument the missions, watch your models fly, close the loop from logs to code.

## Profile

You come from a top-tier engineering school or hold a PhD, with 3 to 5 years of experience including time in a startup, so you know what it means to ship with a small team and no safety net. Your core is machine learning for computer vision: training and fine-tuning vision models, with experience in reinforcement learning and, ideally, map matching, geospatial data or visual localization. You are at ease taking a model from research idea to code that runs on an embedded board.

Beyond the skills, you want ownership: a founding-engineer seat means the hard problems are yours, the field results are yours, and so is a real say in where the product goes. Interest in defence and dual-use robotics matters; French work authorization is preferred.

## Benefits

- Founding-engineer position: first hire alongside the three founders, with matching influence on product and architecture.
- Real field exposure: your code flies in real campaigns, measured against the aircraft's own GPS, not a simulator.
- Inria Startup Studio environment in Paris: research-grade surroundings, direct access to the French deep-tech and defence ecosystem.
