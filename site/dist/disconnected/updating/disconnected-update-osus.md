---
title: Updating a cluster in a disconnected environment using the OpenShift Update Service
---

# Updating a cluster in a disconnected environment using the OpenShift Update Service {#updating-disconnected-cluster-osus}

You can install and configure the OpenShift Update Service (OSUS) in a disconnected environment to get an update experience similar to the connected clusters.

The following steps outline the high-level workflow about updating a cluster in a disconnected environment by using OSUS:

1. Configure access to a secured registry.
2. Update the global cluster pull secret to access your mirror registry.
3. Install the OSUS Operator.
4. Create a graph data container image for the OpenShift Update Service.
5. Install the OSUS application and configure your clusters to use the OpenShift Update Service in your environment.
6. Perform a supported update procedure from the documentation as you would with a connected cluster.

**Additional resources**

- [About the OpenShift Update Service](/updating/understanding_updates/intro-to-updates#update-service-about_understanding-openshift-updates)
- [Understanding update channels and releases](/updating/understanding_updates/understanding-update-channels-release#understanding-update-channels-releases)

**Additional resources**

- [Configuring additional trust stores for image registry access](/registry/configuring-registry-operator#images-configuration-cas_configuring-registry-operator)

**Additional resources**

- [Transferring cluster ownership](https://docs.redhat.com/en/documentation/openshift_cluster_manager/1-latest/html-single/managing_clusters/index#transferring-cluster-ownership_downloading-and-updating-pull-secrets)

**Additional resources**

- [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)
- [Installing Operators in your namespace](/operators/user/olm-installing-operators-in-namespace#olm-installing-operators-in-namespace)

**Additional resources**

- [Configuring the cluster-wide proxy](/networking/configuring_network_settings/enable-cluster-wide-proxy#enable-cluster-wide-proxy)

**Additional resources**

- [Using Operator Lifecycle Manager in disconnected environments](/disconnected/using-olm#olm-restricted-networks)

## Additional resources {#additional-resources_updating-disconnected-cluster-osus}

- [Mirroring OpenShift Container Platform images](/disconnected/updating/mirroring-image-repository#mirroring-ocp-image-repository)
- [Updating a cluster using the web console](/updating/updating_a_cluster/updating-cluster-web-console#updating-cluster-web-console)
- [Updating a cluster using the CLI](/updating/updating_a_cluster/updating-cluster-cli#updating-cluster-cli)
- [Performing a Control Plane Only update](/updating/updating_a_cluster/control-plane-only-update#control-plane-only-update)
- [Performing a canary rollout update](/updating/updating_a_cluster/update-using-custom-machine-config-pools#update-using-custom-machine-config-pools)
