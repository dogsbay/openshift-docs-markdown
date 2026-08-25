---
title: Removing a pod from a secondary network
---

# Removing a pod from a secondary network {#removing-pod}

To disconnect a pod from specific network configurations in OpenShift Container Platform, you can remove the pod from a secondary network. Delete the pod to remove its connection to the secondary network.

## Remove a pod from a secondary network {#nw-multus-remove-pod_removing-pod}

To disconnect a pod from specific network configurations in OpenShift Container Platform, you can remove the pod from a secondary network. Delete the pod using the `oc delete pod` command to remove its connection to the secondary network.

**Prerequisites**

- A secondary network is attached to the pod.
- Install the OpenShift CLI (`oc`).
- Log in to the cluster.

**Procedure**

- Delete the pod by entering the following command:

  ```terminal
  $ oc delete pod <name> -n <namespace>
  ```

  where:

  `<name>`
  :   Specifies the name of the pod.

  `<namespace>`
  :   Specifies the namespace that contains the pod.
