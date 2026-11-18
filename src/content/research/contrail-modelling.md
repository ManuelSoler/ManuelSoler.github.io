---
title: Contrail Modelling
order: 2
tagline: Predicting where contrails form and how they evolve, with machine learning and first-principles physics.
summary: Data-driven forecasts of ice-supersaturated regions and contrail radiative forcing, and MultiCon, a fast physics-based model of long-term contrail evolution.
cardImage: /figures/F02_physics_driven_contrail_modelling.png
people:
  - name: Amin Jafarimoghaddam
    role: Physics-based contrail modelling (MultiCon)
  - name: Irene Ortiz
    role: Data-driven contrail forecasting
  - name: Javier García-Heras
    role: Co-principal investigator
projects:
  - name: E-CONTRAIL 2
    description: Multi-sensor, physics-informed contrail detection, radiative forcing estimation and interactive climate analytics.
    funding: SESAR 3 JU · Horizon Europe
    url: https://www.econtrail.com
  - name: ISSR-Aware
    description: Assessing ice-supersaturated region forecasting for climate-aware air traffic flow and capacity management.
    funding: Engage 2 catalyst funds · 2026–2027
    url: https://aircraftoperationslab.com/issr
  - name: ClimAtion
    description: Climate-smart optimal aircraft operations for next-generation aviation.
    funding: Spanish National R&D Plan · 2026–2029
    url: https://aircraftoperationslab.com/climation
  - name: ContrailMIP
    description: International contrail model intercomparison project, comparing models from plume scale to global climate impact.
    funding: International initiative
    url: https://www.imperial.ac.uk/aerospace-environmental-impacts/contrailmip
---

## Data-driven contrail modelling

Persistent contrails only form when an aircraft crosses air that is cold and humid enough to be supersaturated with respect to ice. These ice-supersaturated regions (ISSRs) are thin, patchy and notoriously difficult to predict with conventional numerical weather models, which is today one of the main obstacles to avoiding contrails in day-to-day operations.

<figure>
  <img src="/figures/F01_data_driven_contrail_modelling.png" alt="Satellite, weather and traffic data feeding a machine-learning model that outputs forecast maps of ice-supersaturated regions and contrail radiative forcing" loading="lazy" />
  <figcaption>Machine-learning models turn satellite, weather and traffic data into forecast maps of ice-supersaturated regions and contrail radiative forcing (illustrative data).</figcaption>
</figure>

We use machine learning to close that gap. Our models combine weather forecasts, satellite observations of real contrails and air traffic data to learn where and when contrails are likely to form, how long they will persist and whether their net effect will be warming or cooling. The outcome is a set of forecast maps of ISSRs and contrail radiative forcing, covering European airspace up to 36 hours ahead and openly accessible through a [live dashboard](https://weatherapp.aimethods.com/contrail/dashboard) developed together with the spin-off AI Methods.

## Physics-driven contrail modelling

Once a contrail has formed, its climate effect depends on what happens over the following hours: it may vanish within minutes or spread into a contrail cirrus covering thousands of square kilometres. This long-term evolution is driven by advection and diffusion in the surrounding wind field, coupled with the growth and fall of ice crystals.

<figure>
  <img src="/figures/F02_physics_driven_contrail_modelling.png" alt="Cross-section of a contrail plume evolving under wind shear, turbulent diffusion and ice-crystal sedimentation" loading="lazy" />
  <figcaption>Long-term evolution of a contrail cross-section under wind shear, turbulent diffusion and ice-crystal sedimentation, and the physical processes resolved by the model (schematic).</figcaption>
</figure>

We develop physics-based models that describe these processes from first principles. MultiCon, our multi-physics Eulerian framework, resolves the vertical structure of an individual contrail plume and tracks its horizontal spread, coupling the transport of ice number, ice mass and water vapour with two processes that have received little attention so far: the changing shape (habit) of ice crystals and turbulence-modulated settling. Benchmarked against the reference models CoCiP and APCEMM, MultiCon reproduces most plume diagnostics of the high-fidelity APCEMM while simulating 15 hours of plume evolution in about a second, compared with minutes to an hour.

This efficiency makes physics-based assessment practical at airspace scale. In its gridded version, MultiCon releases virtual contrails across a region and produces four-dimensional maps of contrail radiative forcing within minutes, which can be passed directly to a flight planner to obtain [contrail-aware trajectories](/research/climate-optimized-trajectories/).

## Key references

- Jafarimoghaddam, A., Soler, M. (2026). A multi-physics Eulerian framework for long-term contrail evolution (MultiCon): Single plume analysis. Submitted, under review. Earlier preprint: [doi:10.5194/egusphere-2025-4155](https://doi.org/10.5194/egusphere-2025-4155)
- Jafarimoghaddam, A., Simorgh, A., Soler, M. (2026). Contrail-Aware Commercial Aircraft Trajectory Optimization Using Gridded MultiCon. *SESAR Innovation Days 2026* (accepted).
- Jafarimoghaddam, A., Ortiz, I., Soler, M. (2025). A Directional-ODE Framework for Discretization of Advection–Diffusion Equations. [arXiv:2506.06543](https://arxiv.org/abs/2506.06543)
- Ortiz, I., et al. (2024). Satellite-Based Quantification of Contrail Radiative Forcing over Europe: A Two-Week Analysis of Aviation-Induced Climate Effects. *SESAR Innovation Days 2024*. [arXiv:2409.10166](https://arxiv.org/abs/2409.10166)
