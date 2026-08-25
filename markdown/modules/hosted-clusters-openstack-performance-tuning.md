{%- set _mod_docs_content_type = "PROCEDURE" %}
# Tuning performance for hosted cluster nodes {id="hosted-clusters-openstack-performance-tuning_{{ context }}"}

To run high-performance workloads on {{ hcp }} on {{ rh_openstack_first }}, you can create a performance profile and deploy a tuned `NodePool` resource. {._abstract}

**Prerequisites**

*   You have {{ rh_openstack }} flavor that has the necessary resources to run your workload, including dedicated CPU, memory, and host aggregate information.
*   You have an {{ rh_openstack }} network that is attached to SR-IOV or DPDK-capable NICs. The network must be available to the project used by hosted clusters.

**Procedure**

1.  Create a performance profile that meets your requirements in a file called `perfprofile.yaml`. For example:
    ```yaml title="Example performance profile in a config map"
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: perfprof-1
      namespace: clusters
    data:
      tuning: |
        apiVersion: v1
        kind: ConfigMap
        metadata:
          name: cnf-performanceprofile
          namespace: "${HYPERSHIFT_NAMESPACE}"
        data:
          tuning: |
            apiVersion: performance.openshift.io/v2
            kind: PerformanceProfile
            metadata:
              name: cnf-performanceprofile
            spec:
              additionalKernelArgs:
                - nmi_watchdog=0
                - audit=0
                - mce=off
                - processor.max_cstate=1
                - idle=poll
                - intel_idle.max_cstate=0
                - amd_iommu=on
              cpu:
                isolated: "${CPU_ISOLATED}"
                reserved: "${CPU_RESERVED}"
              hugepages:
                defaultHugepagesSize: "1G"
                pages:
                  - count: ${HUGEPAGES}
                    node: 0
                    size: 1G
              nodeSelector:
                node-role.kubernetes.io/worker: ''
              realTimeKernel:
                enabled: false
              globallyDisableIrqLoadBalancing: true
    ```

    :::important

    If you do not already have environment variables set for the HyperShift Operator namespace, isolated and reserved CPUs, and huge pages count, create them before applying the performance profile.
    
    :::

1.  Apply the performance profile configuration by running the following command:
    ```terminal
    $ oc apply -f perfprof.yaml
    ```
1.  If you do not already have a `CLUSTER_NAME` environment variable set for the name of your cluster, define it.
1.  Set a node pool name environment variable by running the following command:
    ```terminal
    $ export NODEPOOL_NAME=$CLUSTER_NAME-cnf
    ```
1.  Set a flavor environment variable by running the following command:
    ```terminal
    $ export FLAVOR="m1.xlarge.nfv"
    ```
1.  Create a node pool that uses the performance profile by running the following command:
    ```terminal
    $ hcp create nodepool openstack \
      --cluster-name $CLUSTER_NAME \
      --name $NODEPOOL_NAME \
      --node-count 0 \
      --openstack-node-flavor $FLAVOR
    ```
1.  Patch the node pool to reference the `PerformanceProfile` resource by running the following command:
    ```terminal
    $ oc patch nodepool -n ${HYPERSHIFT_NAMESPACE} ${CLUSTER_NAME} \
      -p '{"spec":{"tuningConfig":[{"name":"cnf-performanceprofile"}]}}' --type=merge
    ```
1.  Scale the node pool by running the following command:
    ```terminal
    $ oc scale nodepool/$CLUSTER_NAME --namespace ${HYPERSHIFT_NAMESPACE} --replicas=1
    ```
1.  Wait for the nodes to be ready:
    1.  Wait for the nodes to be ready by running the following command:
        ```terminal
        $ oc wait --for=condition=UpdatingConfig=True nodepool \
          -n ${HYPERSHIFT_NAMESPACE} ${CLUSTER_NAME} \
          --timeout=5m
        ```
    1.  Wait for the configuration update to finish by running the following command:
        ```terminal
        $ oc wait --for=condition=UpdatingConfig=False nodepool \
          -n ${HYPERSHIFT_NAMESPACE} ${CLUSTER_NAME} \
          --timeout=30m
        ```
    1.  Wait until all nodes are healthy by running the following command:
        ```terminal
        $ oc wait --for=condition=AllNodesHealthy nodepool \
          -n ${HYPERSHIFT_NAMESPACE} ${CLUSTER_NAME} \
          --timeout=5m
        ```

        :::note

        You can make an SSH connection into the nodes or use the `oc debug` command to verify performance configurations.
        
        :::