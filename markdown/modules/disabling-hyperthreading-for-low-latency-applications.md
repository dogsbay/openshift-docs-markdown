{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling Hyper-Threading for low latency applications {id="disabling-hyperthreading-for-low-latency-applications_{{ context }}"}

When configuring clusters for low latency processing, consider whether you want to disable Hyper-Threading before you deploy the cluster.  {._abstract}

To disable Hyper-Threading, perform the following steps:

**Procedure**

*   Create a performance profile that is appropriate for your hardware and topology. The following example sets `nosmt` as an additional kernel argument: 
    ```yaml title="Example performance profile"
    apiVersion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
      name: example-performanceprofile
    spec:
      additionalKernelArgs:
        - nmi_watchdog=0
        - audit=0
        - mce=off
        - processor.max_cstate=1
        - idle=poll
        - intel_idle.max_cstate=0
        - nosmt
      cpu:
        isolated: 2-3
        reserved: 0-1
      hugepages:
        defaultHugepagesSize: 1G
        pages:
          - count: 2
            node: 0
            size: 1G
      nodeSelector:
        node-role.kubernetes.io/performance: ''
      realTimeKernel:
        enabled: true
    ```

    :::note

    When you configure reserved and isolated CPUs, the infra containers in pods use the reserved CPUs and the application containers use the isolated CPUs.
    
    :::