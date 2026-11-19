---
title: Climate-Optimized Trajectories
order: 3
tagline: Flight plans that avoid climate-sensitive regions of the atmosphere at low operational cost.
summary: Robust flight planning that weighs CO₂ and non-CO₂ climate effects against fuel, time and cost, built on open-source planners and optimal control theory.
cardImage: /figures/photo_a350_cockpit.jpg
cardInset:
  image: /figures/simorgh2025_cee_fig1.png
  side: left
  width: 42
cardCredit: "Photo: J. C. Medau, CC BY 2.0"
people:
  - name: Abolfazl Simorgh
    role: Climate-optimal flight planning (ROOST, CLIMaCCF)
  - name: Amin Jafarimoghaddam
    role: Optimal control methods
  - name: Javier García-Heras
    role: Co-principal investigator
projects:
  - name: F4EClim
    description: Flying ATM for Environment and Climate.
    funding: SESAR 3 JU · Horizon Europe · 2024–2027
    url: https://www.f4eclim.eu
  - name: ClimAtion
    description: Climate-smart optimal aircraft operations for next-generation aviation.
    funding: Spanish National R&D Plan · 2025–2028
    url: https://aircraftoperationslab.com/climation
  - name: FlyATM4E
    description: Flying Air Traffic Management for the benefit of environment and climate.
    funding: SESAR JU · Horizon 2020 · completed
    url: https://flyatm4e.eu
---

## Climate-optimal routing

CO₂ is only part of aviation's climate footprint. Non-CO₂ effects, including contrails, nitrogen oxides and water vapour, account for around two-thirds of aviation's radiative forcing and, unlike CO₂, their impact depends strongly on where and when the emission takes place. This opens an opportunity: by avoiding climate-sensitive regions of the atmosphere, a flight can substantially reduce its climate impact.

<figure>
  <img src="/figures/simorgh2025_cee_fig1.png" alt="Overview of aviation-induced climate change, mitigation measures and the contribution of contrails" loading="lazy" />
  <figcaption>Aviation-induced climate impact and mitigation measures. <span class="credit">Simorgh & Soler (2025), Communications Earth & Environment, Fig. 1.</span></figcaption>
</figure>

We design climate-optimal trajectories that weigh this benefit against fuel, time and operating cost. Climate-sensitive regions are identified with algorithmic climate change functions, available in the open-source library CLIMaCCF developed with DLR, and trajectories are optimised with ROOST and ROC. Because both weather forecasts and climate impact estimates are uncertain, we plan robustly, looking for routes that remain beneficial across ensemble forecasts and across several climate models.

Our analysis of European traffic shows that climate-optimised flight planning can effectively reduce the environmental footprint of aviation at low operational cost. Contrails are not the only target: a year-long study of the 50 busiest European routes, carried out in the F4EClim project, shows that ozone-aware flight planning can cut the warming caused by NOₓ-induced ozone by around 30–35% on summer days for at most 3% additional operating cost, mainly through altitude changes, and could therefore complement contrail avoidance.

<figure>
  <img src="/figures/P14_sids2026_f4eclim_ozone_profiles.png" alt="Vertical trajectories between Istanbul and London over the ozone climate sensitivity field, in winter and summer" loading="lazy" />
  <figcaption>Cost-optimal and ozone-optimal vertical trajectories between Istanbul and London over the NOₓ–ozone climate sensitivity, in winter (left) and summer (right). <span class="credit">Simorgh et al. (2026), SESAR Innovation Days 2026, Fig. 2.</span></figcaption>
</figure>

## Robust flight planning under uncertainty

A flight plan defines the route, the flight levels and the speeds an aircraft will follow, and a good plan exploits winds and temperatures to burn as little fuel as possible. The difficulty is that the weather is only known through forecasts, which are always uncertain.

<figure>
  <img src="/figures/P5_simorgh2023_lateral_paths.png" alt="Cost-optimal and climate-optimal lateral paths over wind and contrail climate change function maps at several flight levels" loading="lazy" />
  <figcaption>Cost-optimal and climate-optimal lateral paths over (a) the wind field and (b) the contrail climate change function at several flight levels, computed with ROOST. <span class="credit">Simorgh et al. (2023), Geosci. Model Dev., Fig. 10. CC BY 4.0.</span></figcaption>
</figure>

We develop flight planning methods that are both efficient and robust to that uncertainty, and release them as open-source software. ROOST plans trajectories within today's structured airspace: it optimises the lateral route and the vertical profile together, covers climb, cruise and descent, and uses GPU parallelisation to evaluate thousands of candidate plans against ensemble weather forecasts in seconds. ROC addresses the free-route airspace concept through robust optimal control. Instead of a plan that is optimal only for one forecast, both tools deliver trajectories that perform well across the range of likely weather scenarios.

## Optimal control methods

Behind every optimised trajectory there is an optimal control problem: finding the control inputs, such as thrust and heading, that minimise fuel, time or climate impact while respecting the aircraft dynamics and all safety and operational constraints.

<figure>
  <img src="/figures/F09_optimal_control_methods.png" alt="Structure of an optimal aircraft trajectory as a sequence of bang and singular control arcs under a state constraint" loading="lazy" />
  <figcaption>Typical structure of an optimal aircraft trajectory: bang and singular control arcs under a state constraint, and the two families of solution methods (schematic).</figcaption>
</figure>

Using singular control theory, we characterise the structure of optimal commercial flights, sequences of bang and singular arcs, even with several controls and state-inequality constraints, and exploit it in dedicated algorithms such as the Indirect Bang-Singular Algorithm (IBSA). On the direct side, the PADOC transcription method builds analytic links between discretisation nodes, reducing the number of decision variables while improving accuracy and robustness. These methods serve as benchmarks and building blocks for the climate-optimal planners above.

## Key references

- Simorgh, A., Soler, M. (2025). Climate-optimized flight planning can effectively reduce the environmental footprint of aviation in Europe at low operational costs. *Communications Earth & Environment*, 6, 66. [doi:10.1038/s43247-025-02031-8](https://doi.org/10.1038/s43247-025-02031-8)
- Simorgh, A., Soler, M., García-Heras, J., et al. (2026). Targeted Mitigation of NOₓ-Induced Ozone Warming through Flight Planning. *SESAR Innovation Days 2026* (accepted).
- Simorgh, A., et al. (2023). Robust 4D climate-optimal flight planning in structured airspace using parallelized simulation on GPUs: ROOST V1.0. *Geoscientific Model Development*, 16, 3723–3748. [doi:10.5194/gmd-16-3723-2023](https://doi.org/10.5194/gmd-16-3723-2023)
- Dietmüller, S., et al. (2023). A Python library for computing individual and merged non-CO₂ algorithmic climate change functions: CLIMaCCF V1.0. *Geoscientific Model Development*, 16, 4405–4425.
- González-Arribas, D., Baneshi, F., Andrés, E., Soler, M., Jardines, A., García-Heras, J. (2023). Fast 4D flight planning under uncertainty through parallel stochastic path simulation. *Transportation Research Part C*, 148, 104018.
- Jafarimoghaddam, A., Soler, M. (2024). The Indirect Bang-Singular Algorithm (IBSA) for singular control problems with state-inequality constraints. *European Journal of Control*, 79, 101071. [doi:10.1016/j.ejcon.2024.101071](https://doi.org/10.1016/j.ejcon.2024.101071)
