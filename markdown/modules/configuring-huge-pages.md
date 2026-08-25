{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring huge pages at boot time {id="configuring-huge-pages_{{ context }}"}

To ensure nodes in your {{ product_title }} cluster pre-allocate memory for specific workloads, reserve huge pages at boot time. {._abstract}

There are two ways of reserving huge pages: at boot time and at run time. Reserving at boot time increases the possibility of success because the memory has not yet been significantly fragmented. The Node Tuning Operator currently supports boot-time allocation of huge pages on specific nodes.

{% if not openshift_origin %}

:::note

The TuneD boot-loader plugin only supports {{ op_system_first }} compute nodes.

:::

{% endif %}

**Procedure**

1.  Label all nodes that need the same huge pages setting by a label by entering the following command:
    ```terminal
    $ oc label node <node_using_hugepages> node-role.kubernetes.io/worker-hp=
    ```
1.  Create a file with the following content and name it `hugepages-tuned-boottime.yaml`:
    ```yaml
    apiVersion: tuned.openshift.io/v1
    kind: Tuned
    metadata:
      name: hugepages
      namespace: openshift-cluster-node-tuning-operator
    spec:
      profile:
      - data: |
          [main]
          summary=Boot time configuration for hugepages
          include=openshift-node
          [bootloader]
          cmdline_openshift_node_hugepages=hugepagesz=2M hugepages=50
        name: openshift-node-hugepages

      recommend:
      - machineConfigLabels:
          machineconfiguration.openshift.io/role: "worker-hp"
        priority: 30
        profile: openshift-node-hugepages
    # ...
    ```

    where:

    `metadata.name`
    :   Specifies the `name` of the Tuned resource to `hugepages`.

    `spec.profile`
    :   Specifies the `profile` section to allocate huge pages.

    `spec.profile.data`
    :   Specifies the order of parameters. The order is important as some platforms support huge pages of various sizes.

    `spec.recommend.machineConfigLabels`
    :   Specifies the enablement of a machine config pool based matching.

1.  Create the Tuned `hugepages` object by entering the following command:
    ```terminal
    $ oc create -f hugepages-tuned-boottime.yaml
    ```
1.  Create a file with the following content and name it `hugepages-mcp.yaml`:
    ```yaml
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfigPool
    metadata:
      name: worker-hp
      labels:
        worker-hp: ""
    spec:
      machineConfigSelector:
        matchExpressions:
          - {key: machineconfiguration.openshift.io/role, operator: In, values: [worker,worker-hp]}
      nodeSelector:
        matchLabels:
          node-role.kubernetes.io/worker-hp: ""
    ```
1.  Create the machine config pool by entering the following command:
    ```terminal
    $ oc create -f hugepages-mcp.yaml
    ```

**Verification**

*   To check that enough non-fragmented memory exists and that all the nodes in the `worker-hp` machine config pool now have 50 2Mi huge pages allocated, enter the following command:
    ```terminal
    $ oc get node <node_using_hugepages> -o jsonpath="{.status.allocatable.hugepages-2Mi}"
    100Mi
    ```