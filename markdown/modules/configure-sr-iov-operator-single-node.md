{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the SR-IOV Network Operator for single node installations {id="configure-sr-iov-operator-single-node_{{ context }}"}

By default, the SR-IOV Network Operator drains workloads from a node before every policy change. The Operator performs this action to ensure that no workloads are using the virtual functions before the reconfiguration. As a result, you must configure the Operator to not drain workloads from the single node. {._abstract}

For installations on a single node, other nodes do not receive the workloads. 


:::important

After performing the following procedure to disable draining workloads, you must remove any workload that uses an SR-IOV network interface before you change any SR-IOV network node policy.

:::


**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.
*   You must have installed the SR-IOV Network Operator.

**Procedure**

*   To set the `disableDrain` field to `true` and the `configDaemonNodeSelector` field to `node-role.kubernetes.io/master: ""`, enter the following command:
    ```terminal
    $ oc patch sriovoperatorconfig default --type=merge -n openshift-sriov-network-operator --patch '{ "spec": { "disableDrain": true, "configDaemonNodeSelector": { "node-role.kubernetes.io/master": "" } } }'
    ```

    :::tip

    You can alternatively apply the following YAML to update the Operator:

    ```yaml
    apiVersion: sriovnetwork.openshift.io/v1
    kind: SriovOperatorConfig
    metadata:
      name: default
      namespace: openshift-sriov-network-operator
    spec:
      disableDrain: true
      configDaemonNodeSelector:
       node-role.kubernetes.io/master: ""
    # ...
    ```
    
    :::