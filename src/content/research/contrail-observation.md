---
title: Contrail Observation
order: 1
tagline: Detecting contrails from space and measuring, from observations, what they do to the climate.
summary: AI-based detection of contrails in satellite imagery and observation-based estimates of their radiative forcing over Europe and the North Atlantic.
cardImage: /figures/photo_modis_contrails_iberia.jpg
cardInset:
  image: /figures/P07_ortiz2026_monthly_detection_maps.png
  side: right
  width: 38
cardCredit: "Photo: NASA MODIS"
people:
  - name: Irene Ortiz
    role: Satellite contrail detection and radiative forcing
  - name: Javier García-Heras
    role: Co-principal investigator
  - name: Alejandra Martín Frías
    role: Contrail avoidance and MRV (industrial PhD, Flightkeys)
projects:
  - name: E-CONTRAIL 2
    description: Multi-sensor, physics-informed contrail detection, radiative forcing estimation and interactive climate analytics.
    funding: SESAR 3 JU · Horizon Europe · 2026–2028
    url: https://www.econtrail.com
  - name: ClimAtion
    description: Climate-smart optimal aircraft operations for next-generation aviation.
    funding: Spanish National R&D Plan · 2025–2028
    url: https://aircraftoperationslab.com/climation
  - name: HARMONY-MRV
    description: A non-CO₂ monitoring, reporting and verification digital service with uncertainty quantification and mitigation alternatives.
    funding: Engage 2 · 2026–2027
    url: https://aircraftoperationslab.com/harmony-mrv
  - name: Contrail Aware
    description: Advancing state-of-the-art contrail research into a practical industry solution.
    funding: Public–private collaboration · 2025–2028
    url: https://aircraftoperationslab.com/contrail-aware
---

## Automated contrail detection

Before contrails can be modelled, forecast or avoided, they have to be seen. Geostationary satellites image the same region every few minutes, day and night, but contrails are thin, often only a few pixels wide and easily confused with natural cirrus clouds. Labelling them by hand is slow and subjective, so automated detection is essential to study contrails at scale.

<figure>
  <img src="/figures/P07_ortiz2026_monthly_detection_maps.png" alt="Twelve monthly maps of contrail detection probability over Europe and the North Atlantic in 2023" loading="lazy" />
  <figcaption>Monthly maps of contrail detection probability from Meteosat observations over the Euro–Atlantic domain in 2023. <span class="credit">Ortiz et al. (2026), submitted to Atmos. Meas. Tech., Fig. 4.</span></figcaption>
</figure>

We train deep neural networks to segment contrails in satellite infrared imagery, using human-labelled datasets such as OpenContrails. Beyond accuracy, we focus on how far these models can be trusted: our work evaluates several architectures under a robust protocol, shows that, under tolerance-aware metrics, their performance is close to the attainable upper bound, and identifies systematic errors such as the overestimation of contrail width. The models are then adapted to Meteosat imagery to monitor European and North Atlantic airspace.

The detection tools are openly available in the ContrAI repository. Current work extends them to multi-sensor detection, adding ground-based cameras and additional satellites.

## Observation-based climate impact

How much do contrails actually warm the planet? Contrails reflect incoming sunlight, which cools, and trap heat radiated by the Earth, which warms. The balance depends on the time of day, the season, the surface underneath and the optical properties of the ice cloud, and most current estimates still rely on models rather than on measurements.

<figure>
  <img src="/figures/P08_ortiz2026_day_night_rf.png" alt="Bar charts of mean net radiative forcing of detected contrails by month, split into day and night" loading="lazy" />
  <figcaption>Mean net radiative forcing of detected contrail pixels in 2023: monthly day and night values, and annual means for single-layer and multilayer cases. <span class="credit">Ortiz et al. (2026), submitted to Atmos. Meas. Tech., Fig. 9.</span></figcaption>
</figure>

By combining AI-based contrail detection in Meteosat geostationary imagery with satellite retrievals of cloud properties and radiative transfer calculations, we have characterised the contrails observed over Europe and the North Atlantic throughout 2023. Contrail coverage does not simply follow traffic: it peaks in spring and drops by 37% in summer, even though cruise traffic is 16% higher. Detected contrails cool slightly during the day (−1.4 W/m² on average) but warm strongly at night (+32.7 W/m²), giving an annual mean net warming of about 2.85 mW/m² over the region, roughly 78% of it over Atlantic waters.

## From observation to policy

Since 2025, European airlines must monitor, report and verify (MRV) the non-CO₂ effects of their flights. Together with the flight planning provider Flightkeys, we have analysed the feasibility of contrail avoidance in a commercial flight planning system and proposed an equitable MRV framework that compares three trajectories per flight: the cost-optimal plan, the contrail-optimal plan and the flight actually flown. This allows genuine mitigation efforts to be told apart from inaction.

<figure>
  <img src="/figures/P17_martinfrias2026_three_flight_plans.png" alt="Diagram of the three-flight-plan MRV framework" loading="lazy" />
  <figcaption>Proposed three-flight-plan MRV framework: cost-optimal, contrail-optimal and executed trajectories are evaluated in parallel. <span class="credit">Martín Frías et al. (2026), Transportation Research Part A (accepted), Fig. 2.</span></figcaption>
</figure>

## Key references

- Ortiz, I., García-Heras, J., Jafarimoghaddam, A., Soler, M. (2025). Robust Evaluation of Neural Networks Trained on the OpenContrails Dataset. *IEEE Transactions on Geoscience and Remote Sensing*, 63, 4112717. [doi:10.1109/TGRS.2025.3629628](https://doi.org/10.1109/TGRS.2025.3629628)
- Ortiz, I., Dimitropoulou, E., de Buyl, P., Clerbaux, N., García-Heras, J., van Gent, J., Brenot, H., Soler, M. (2026). Satellite-observed contrail coverage over Europe and the North Atlantic in 2023. Submitted to *Atmospheric Measurement Techniques* (preprint).
- Ortiz, I., et al. (2024). Satellite-Based Quantification of Contrail Radiative Forcing over Europe: A Two-Week Analysis of Aviation-Induced Climate Effects. *SESAR Innovation Days 2024*. [arXiv:2409.10166](https://arxiv.org/abs/2409.10166)
- Martín Frías, A., Houston, L. J. H., Zopp, R., Soler, M. (2026). Equitable Non-CO₂ Monitoring, Reporting and Verification Framework for Airline Contrail Mitigation. *Transportation Research Part A* (accepted). [doi:10.2139/ssrn.6179589](https://doi.org/10.2139/ssrn.6179589)
- Martín Frías, A., et al. (2024). Feasibility of contrail avoidance in a commercial flight planning system: an operational analysis. *Environmental Research: Infrastructure and Sustainability*. [doi:10.1088/2634-4505/ad310c](https://doi.org/10.1088/2634-4505/ad310c)
