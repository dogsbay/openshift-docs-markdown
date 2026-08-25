{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring kernel page sizes {id="cnf-page-size-optimization_{{ context }}"}

Use the `kernelPageSize` specification in a performance profile to configure the kernel page size on a specific node. Specify larger kernel page sizes for memory-intensive, high-performance workloads.  {._abstract}


:::note

For nodes with an x86_64 or AMD64 architecture, you can only specify `4k` for the `kernelPageSize` specification. 
For nodes with an AArch64 architecture, you can specify `4k` or `64k` for the `kernelPageSize` specification. You must disable the realtime kernel before you can use the `64k` option. 
The default value is `4k`.

:::


**Prerequisites**

*   Access to the cluster as a user with the `cluster-admin` role.
*   Install the {{ oc_first }}.

**Procedure**

1.  Create a performance profile to target nodes where you want to configure the kernel page size by creating a YAML file that defines the `PerformanceProfile` resource:
    ```yaml title="Example pp-kernel-pages.yaml file"
    apiVersion: performance.openshift.io/v2
    kind: PerformanceProfile
    metadata:
        name: example-performance-profile
    #...
    spec:
        kernelPageSize: "64k"
        realTimeKernel:
            enabled: false
        nodeSelector:
            node-role.kubernetes.io/worker: ""
    ```
    where:


    `spec.kernelPageSize`
    :   Specifies a kernel page size of `64k`. You can only specify `64k` for nodes with an AArch64 architecture. The default value is `4k`.


    `spec.realTimeKernel.enabled:false`
    :   Specifies whether to disable the realtime kernel. A setting of `false` disables the kernel. You must disable the realtime kernel to use the `64k` kernel page size option.


    `spec.nodeSelector.node-role.kubernetes.io/worker`
    :   Specifies targets nodes with the `worker` role.
1.  Apply the performance profile to the cluster:
    ```bash
    $ oc create -f pp-kernel-pages.yaml
    ```
    ```text title="Example output"
    performanceprofile.performance.openshift.io/example-performance-profile created
    ```

**Verification**

1.  Start a debug session on the node where you applied the performance profile by running the following command:
    ```bash
    $ oc debug node/<node_name>
    ```
    *   `<node_name>`: Replace `<node_name>` with the name of the node with the performance profile applied.
1.  Verify that the kernel page size is set to the value you specified in the performance profile by running the following command:
    ```bash
    $ getconf PAGESIZE
    ```
    ```text title="Example output"
    65536
    ```