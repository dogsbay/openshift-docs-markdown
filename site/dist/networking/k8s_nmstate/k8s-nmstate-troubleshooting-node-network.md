---
title: Troubleshooting node network configuration
---

# Troubleshooting node network configuration {#k8s-nmstate-troubleshooting-node-network}

If the node network configuration encounters an issue, the policy is automatically rolled back and the enactments report failure. This includes issues such as:

- The configuration fails to be applied on the host.
- The host loses connection to the default gateway.
- The host loses connection to the API server.
