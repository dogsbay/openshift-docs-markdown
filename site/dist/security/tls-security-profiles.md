---
title: Configuring TLS security profiles
---

# Configuring TLS security profiles {#tls-security-profiles}

To enforce secure cryptographic libraries for the OpenShift Container Platform components, cluster administrators can configure TLS security profiles to control cipher usage when the client connects to the Ingress Controller, the control plane, or the kubelet.

The control plane includes the following components:

- Kubernetes API server
- Kubernetes controller manager
- Kubernetes scheduler
- OpenShift API server
- OpenShift OAuth API server
- OpenShift OAuth server
- etcd
- Machine Config Operator
- Machine Config Server.
