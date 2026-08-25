{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling multi-network policy for the cluster {id="nw-multi-network-policy-enable_{{ context }}"}

As a cluster administrator, you can enable multi-network policy support on your cluster. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in to the cluster with a user with `cluster-admin` privileges.

**Procedure**

1.  Create the `multinetwork-enable-patch.yaml` file with the following YAML:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: Network
    metadata:
      name: cluster
    spec:
      useMultiNetworkPolicy: true
    # ...
    ```
1.  Configure the cluster to enable multi-network policy. Successful output lists the name of the policy object and the `patched` status.
    ```terminal
    $ oc patch network.operator.openshift.io cluster --type=merge --patch-file=multinetwork-enable-patch.yaml
    ```