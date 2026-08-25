{%- set _mod_docs_content_type = "PROCEDURE" %}
# Boosting networking performance with RFS {id="ibm-z-boost-networking-performance-with-rfs_{{ context }}"}

To boost networking performance, activate Receive Flow Steering (RFS) by using the Machine Config Operator (MCO). This configuration improves packet processing efficiency. {._abstract}

RFS extends Receive Packet Steering (RPS) by further reducing network latency. RFS is technically based on RPS, and improves the efficiency of packet processing by increasing the CPU cache hit rate. RFS achieves this, while considering queue length, by determining the most convenient CPU for computation so that cache hits are more likely to occur within the CPU. This means that the CPU cache is invalidated less and requires fewer cycles to rebuild the cache, which reduces packet processing run time.

**Procedure**

1.  Copy the following MCO sample profile into a YAML file. For example, `enable-rfs.yaml`:
    ```yaml
    apiVersion: machineconfiguration.openshift.io/v1
    kind: MachineConfig
    metadata:
      labels:
        machineconfiguration.openshift.io/role: worker
      name: 50-enable-rfs
    spec:
      config:
        ignition:
          version: 2.2.0
        storage:
          files:
          - contents:
              source: data:text/plain;charset=US-ASCII,%23%20turn%20on%20Receive%20Flow%20Steering%20%28RFS%29%20for%20all%20network%20interfaces%0ASUBSYSTEM%3D%3D%22net%22%2C%20ACTION%3D%3D%22add%22%2C%20RUN%7Bprogram%7D%2B%3D%22/bin/bash%20-c%20%27for%20x%20in%20/sys/%24DEVPATH/queues/rx-%2A%3B%20do%20echo%208192%20%3E%20%24x/rps_flow_cnt%3B%20%20done%27%22%0A
            filesystem: root
            mode: 0644
            path: /etc/udev/rules.d/70-persistent-net.rules
          - contents:
              source: data:text/plain;charset=US-ASCII,%23%20define%20sock%20flow%20enbtried%20for%20%20Receive%20Flow%20Steering%20%28RFS%29%0Anet.core.rps_sock_flow_entries%3D8192%0A
            filesystem: root
            mode: 0644
            path: /etc/sysctl.d/95-enable-rps.conf
    ```
1.  Create the MCO profile by entering the following command:
    ```terminal
    $ oc create -f enable-rfs.yaml
    ```
1.  Verify that an entry named `50-enable-rfs` is listed by entering the following command:
    ```terminal
    $ oc get mc
    ```
1.  To deactivate the MCO profile, enter the following command:
    ```terminal
    $ oc delete mc 50-enable-rfs
    ```