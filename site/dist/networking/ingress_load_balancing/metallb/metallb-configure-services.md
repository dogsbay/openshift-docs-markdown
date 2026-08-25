---
title: Configuring services to use MetalLB
---

# Configuring services to use MetalLB {#metallb-configure-services}

To ensure predictable network endpoints, control how MetalLB assigns IP addresses to services of type `LoadBalancer`. Requesting specific addresses or pools ensures that your applications receive valid IP assignments that align with your specific network addressing plan.
