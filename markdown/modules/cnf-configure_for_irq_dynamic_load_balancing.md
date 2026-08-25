{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring node interrupt affinity {id="configuring_for_irq_dynamic_load_balancing_{{ context }}"}

Configure a cluster node for IRQ dynamic load balancing to control which cores can receive device interrupt requests (IRQ). {._abstract}

**Prerequisites**

*   For core isolation, all server hardware components must support IRQ affinity. To check if the hardware components of your server support IRQ affinity, view the hardware specifications of the server or contact your hardware provider.

**Procedure**

1.  Log in to the {{ product_title }} cluster as a user with cluster-admin privileges.
1.  Set the performance profile `apiVersion` to use `performance.openshift.io/v2`.
1.  Remove the `globallyDisableIrqLoadBalancing` field or set it to `false`.
1.  Set the appropriate isolated and reserved CPUs. The following snippet illustrates a profile that reserves 2 CPUs. IRQ load-balancing is enabled for pods running on the `isolated` CPU set:
    ```yaml
    apiVersion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
      name: dynamic-irq-profile
    spec:
      cpu:
        isolated: 2-5
        reserved: 0-1
    ...
    ```

    :::note

    When you configure reserved and isolated CPUs, operating system processes, kernel processes, and systemd services run on reserved CPUs. Infrastructure pods run on any CPU except where the low latency workload is running. Low latency workload pods run on exclusive CPUs from the isolated pool. For more information, see "Partitioning CPUs for infra and application containers".
    
    :::