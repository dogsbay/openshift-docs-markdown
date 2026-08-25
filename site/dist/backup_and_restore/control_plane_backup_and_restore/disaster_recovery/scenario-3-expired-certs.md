---
title: Recovering from expired control plane certificates
---

# Recovering from expired control plane certificates {#dr-recovering-expired-certs}

You can restore kubelet certificates on your OpenShift Container Platform cluster by approving pending certificate signing requests (CSRs) after control plane certificates expire. Approved CSRs return nodes to a healthy state.
