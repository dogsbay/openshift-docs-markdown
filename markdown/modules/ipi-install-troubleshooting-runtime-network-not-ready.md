{%- set _mod_docs_content_type = "PROCEDURE" %}

# Addressing the `runtime network not ready` error {id="ipi-install-troubleshooting-runtime-network-not-ready_{{ context }}"}

Troubleshoot the runtime network not ready error in your {{ product_title }} cluster to restore node communication. {._abstract}

After the deployment of a cluster you might receive the following error:

```text
runtime network not ready: NetworkReady=false reason:NetworkPluginNotReady message:Network plugin returns error: Missing CNI default network
```

The Cluster Network Operator is responsible for deploying the networking components in response to a special object created by the installation program. It runs very early in the installation process, after the control plane nodes have come up, but before the bootstrap control plane has been torn down. It can be indicative of more subtle installation program issues, such as long delays in bringing up control plane nodes or issues with `apiserver` communication.

**Procedure**

1.  Inspect the pods in the `openshift-network-operator` namespace by running the following command:
    ```terminal
    $ oc get all -n openshift-network-operator
    ```
    ```terminal title="Example output"
    NAME                                    READY STATUS            RESTARTS   AGE
    pod/network-operator-69dfd7b577-bg89v   0/1   ContainerCreating 0          149m
    ```
1.  On the `provisioner` node, determine that the network configuration exists by running the following command:
    ```terminal
    $ kubectl get network.config.openshift.io cluster -oyaml
    ```
    ```yaml title="Example output"
    apiVersion: config.openshift.io/v1
    kind: Network
    metadata:
      name: cluster
    spec:
      serviceNetwork:
      - 172.30.0.0/16
      clusterNetwork:
      - cidr: 10.128.0.0/14
        hostPrefix: 23
      networkType: OVNKubernetes
    ```

    If it does not exist, the installation program did not create it. To determine why the installation program did not create it, run the following command:
    ```terminal
    $ openshift-install create manifests
    ```
1.  Check that the `network-operator` is running by running the following command:
    ```terminal
    $ kubectl -n openshift-network-operator get pods
    ```
1.  Retrieve the logs by running the following command:
    ```terminal
    $ kubectl -n openshift-network-operator logs -l "name=network-operator"
    ```

    On high availability clusters with three or more control plane nodes, the Operator will perform leader election and all other Operators will sleep. For additional details, see [Troubleshooting](https://github.com/openshift/installer/blob/master/docs/user/troubleshooting.md).