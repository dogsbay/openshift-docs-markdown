{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the ClusterPodPlacementConfig object by using the CLI {id="multi-architecture-creating-podplacement-config-using-cli_{{ context }}"}

To deploy the pod placement operand that enables architecture-aware workload scheduling, you can create the `ClusterPodPlacementConfig` object by using the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to `oc` as a user with `cluster-admin` privileges.
*   You have installed the Multiarch Tuning Operator.

**Procedure**

1.  Create a `ClusterPodPlacementConfig` object YAML file:
    ```yaml title="Example ClusterPodPlacementConfig object configuration"
    apiVersion: multiarch.openshift.io/v1beta1
    kind: ClusterPodPlacementConfig
    metadata:
      name: cluster
    spec:
      logVerbosityLevel: Normal
      namespaceSelector:
        matchExpressions:
          - key: multiarch.openshift.io/exclude-pod-placement 
            operator: DoesNotExist
      plugins:
        nodeAffinityScoring:
          enabled: true
          platforms:
            - architecture: amd64
              weight: 100
            - architecture: arm64
              weight: 50
    ```
1.  Create the `ClusterPodPlacementConfig` object by running the following command:
    ```terminal
    $ oc create -f <file_name>
    ```

    Replace `<file_name>` with the name of the `ClusterPodPlacementConfig` object YAML file.

**Verification**

*   To check that the `ClusterPodPlacementConfig` object is created, run the following command:
    ```terminal
    $ oc get clusterpodplacementconfig
    ```
    ```terminal title="Example output"
    NAME      AGE
    cluster   29s
    ```