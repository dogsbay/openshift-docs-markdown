{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting capabilities for a hosted cluster {id="hcp-cluster-capabilities-proc_{{ context }}"}

To reduce unnecessary resource consumption, you can control which optional capabilities are enabled for a hosted cluster when you create the cluster. {._abstract}


:::important

Capabilities are immutable after cluster creation. You cannot change them after you create the `HostedCluster` resource.

:::


You can specify which capabilities are enabled by either using the `hcp` command-line interface (CLI) or by setting the `HostedCluster` manifest.

**Procedure**

*   To specify which capabilities are enabled in a hosted cluster by using the CLI, you can add the `--disable-cluster-capabilities` flag, the `--enable-cluster-capabilities` flag, or both. The following example shows how to disable the `ImageRegistry`, `Console`, and `Ingress` capabilities and enable the `baremetal` capability while you create a hosted cluster on {{ aws_short }} by using the `hcp` command-line interface:
    ```terminal
    $ hcp create cluster aws \
        --name my-hosted-cluster \
        --disable-cluster-capabilities=ImageRegistry,Console,Ingress \
        --enable-cluster-capabilities=baremetal
    ```

    You can specify multiple capabilities as a comma-separated list. The supported values are as follows:
    *   `ImageRegistry`
    *   `openshift-samples`
    *   `Insights`
    *   `baremetal`
    *   `Console`
    *   `NodeTuning`
    *   `Ingress`
*   To specify which capabilities are enabled in a hosted cluster by using the `HostedCluster` manifest at cluster creation time, see the following examples:
    *   To directly disable capabilities in a hosted cluster, add the `spec.capabilities.disabled` section in the `HostedCluster` resource:
        ```yaml
        apiVersion: hypershift.openshift.io/v1beta1
        kind: HostedCluster
        metadata:
          name: my-hosted-cluster
          namespace: my-cluster-namespace
        spec:
          capabilities:
            disabled:
              - ImageRegistry
              - Console
              - Ingress
          # ...
        ```
    *   To explicitly enable a capability that is not part of the default set of capabilities, such as the `baremetal` capability, see the following example:
        ```yaml
        apiVersion: hypershift.openshift.io/v1beta1
        kind: HostedCluster
        metadata:
          name: my-hosted-cluster
          namespace: my-cluster-namespace
        spec:
          capabilities:
            enabled:
              - baremetal
          # ...
        ```
    *   You can use both `enabled` and `disabled` if no capabilities are in both lists. See the following example:
        ```yaml
        apiVersion: hypershift.openshift.io/v1beta1
        kind: HostedCluster
        metadata:
          name: my-hosted-cluster
          namespace: my-cluster-namespace
        spec:
          capabilities:
            enabled:
              - baremetal
            disabled:
              - ImageRegistry
              - openshift-samples
          # ...
        ```