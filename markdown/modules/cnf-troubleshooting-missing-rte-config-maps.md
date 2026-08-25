{%- set _mod_docs_content_type = "PROCEDURE" %}
# Correcting a missing resource topology exporter config map {id="cnf-troubleshooting-missing-rte-config-maps_{{ context }}"}

To correct a missing config map for the resource topology exporter (RTE), resolve misconfigured settings in your cluster. Fixing this issue ensures the NUMA Resources Operator functions properly when the logs of the RTE daemon set pods indicate missing configurations. {._abstract}

The following example log message indicates a missing configuration:

```text
Info: couldn't find configuration in "/etc/resource-topology-exporter/config.yaml"
```

The previous log message indicates that the `kubeletconfig` with the required configuration was not properly applied in the cluster, resulting in a missing RTE `configmap`. For example, the following cluster is missing a `numaresourcesoperator-worker` `configmap` custom resource (CR):

```terminal
$ oc get configmap
```

Example output:

```terminal
NAME                           DATA   AGE
0e2a6bd3.openshift-kni.io      0      6d21h
kube-root-ca.crt               1      6d21h
openshift-service-ca.crt       1      6d21h
topo-aware-scheduler-config    1      6d18h
```

In a correctly configured cluster, `oc get configmap` also returns a `numaresourcesoperator-worker` `configmap` CR.

**Prerequisites**

*   Installed the {{ oc_first }}.
*   Logged in as a user with cluster-admin privileges.
*   Installed the NUMA Resources Operator and deploy the NUMA-aware secondary scheduler.

**Procedure**

1.  Compare the values for `spec.machineConfigPoolSelector.matchLabels` in `kubeletconfig` and
`metadata.labels` in the `MachineConfigPool` (`mcp`) worker CR using the following commands:
    1.  Check the `kubeletconfig` labels by running the following command:
        ```terminal
        $ oc get kubeletconfig -o yaml
        ```
        ```yaml title="Example output"
        machineConfigPoolSelector:
          matchLabels:
            cnf-worker-tuning: enabled
        ```
    1.  Check the `mcp` labels by running the following command:
        ```terminal
        $ oc get mcp worker -o yaml
        ```
        ```yaml title="Example output"
        labels:
          machineconfiguration.openshift.io/mco-built-in: ""
          pools.operator.machineconfiguration.openshift.io/worker: ""
        ```

        The `cnf-worker-tuning: enabled` label is not present in the `MachineConfigPool` object.
1.  Edit the `MachineConfigPool` CR to include the missing label, for example:
    ```terminal
    $ oc edit mcp worker -o yaml
    ```
    ```yaml title="Example output"
    labels:
      machineconfiguration.openshift.io/mco-built-in: ""
      pools.operator.machineconfiguration.openshift.io/worker: ""
      cnf-worker-tuning: enabled
    ```
1.  Apply the label changes and wait for the cluster to apply the updated configuration.

**Verification**

*   Check that the missing `numaresourcesoperator-worker` `configmap` CR is applied:
    ```terminal
    $ oc get configmap
    ```
    ```terminal title="Example output"
    NAME                           DATA   AGE
    0e2a6bd3.openshift-kni.io      0      6d21h
    kube-root-ca.crt               1      6d21h
    numaresourcesoperator-worker   1      5m
    openshift-service-ca.crt       1      6d21h
    topo-aware-scheduler-config    1      6d18h
    ```