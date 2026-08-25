---
title: Disabling multicast for a project
---

# Disabling multicast for a project {#nw-ovn-kubernetes-disabling-multicast}

In OpenShift Container Platform with OVN-Kubernetes, you can disable IP multicast on a per-project basis so pods no longer receive multicast traffic.

## Disabling multicast between pods {#nw-disabling-multicast_ovn-kubernetes-disabling-multicast}

To disable multicast between pods in a project, you can remove the `k8s.ovn.org/multicast-enabled` annotation from the namespace by using the `oc annotate` command or a namespace manifest.

**Prerequisites**

- Install the OpenShift CLI (`oc`).
- You must log in to the cluster with a user that has the `cluster-admin` role.

**Procedure**

- Disable multicast by running the following command:

  ```terminal
  $ oc annotate {{ namespace }} <namespace> \
      {{ annotation }}
  ```

  For `<namespace>`, specify the namespace for the project you want to disable multicast for.

  > [!TIP]
  > You can alternatively apply the following YAML to delete the annotation:
  >
  > ```yaml
  > apiVersion: v1
  > kind: Namespace
  > metadata:
  >   name: <namespace>
  >   annotations:
  >     k8s.ovn.org/multicast-enabled: null
  > ```
