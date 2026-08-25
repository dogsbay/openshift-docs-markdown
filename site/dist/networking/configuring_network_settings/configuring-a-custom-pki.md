---
title: Configuring a custom PKI
---

# Configuring a custom PKI {#configuring-a-custom-pki}

To ensure secure communication between internal components in your OpenShift Container Platform cluster, you can add your organization’s custom Certificate Authority (CA) certificates to the cluster-wide truststore.

You can add your custom CA certificates to the cluster-wide truststore in one of two ways:

- During cluster installation, by adding your CA certificate to the `install-config.yaml` file.
- On a running cluster, by creating a `ConfigMap` object that contains your CA certificate and referencing it in the cluster `Proxy` object.

> [!IMPORTANT]
> The cluster Proxy object is the mechanism for managing the cluster-wide truststore. This guide focuses only on the task of adding a CA. If you also need to configure an egress proxy, refer to the "Configuring the cluster-wide proxy" chapter for detailed instructions.
