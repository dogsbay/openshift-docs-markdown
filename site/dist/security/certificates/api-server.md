---
title: Adding API server certificates
---

# Adding API server certificates {#api-server-certificates}

To allow clients outside of the cluster to verify the API server’s certificate, you can replace the default API server certificate with one that is issued by a CA that clients trust.

By default, the API server certificate is issued by an internal OpenShift Container Platform cluster CA. As a result, clients outside of the cluster cannot verify the API server’s certificate.

> [!NOTE]
> In hosted control plane clusters, you can add as many custom certificates to your Kubernetes API Server as you need. However, do not add a certificate for the endpoint that worker nodes use to communicate with the control plane.
