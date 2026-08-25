{%- set _mod_docs_content_type = "CONCEPT" %}
# Recommended cluster host requirements for vDU application workloads {id="ztp-install-sno-hardware-reqs_{{ context }}"}

Running vDU application workloads requires a bare-metal host with sufficient resources to run {{ product_title }} services and production workloads. {._abstract}

**Minimum resource requirements**

| Profile | vCPU | Memory | Storage |
| --- | --- | --- | --- |
| Minimum | 4 vCPU | 32 GB of RAM | 120 GB |
| Recommended | 8 vCPU | 32 GB of RAM | 120 GB |


:::important

Running {{ sno }} on 4 vCPUs leaves very little headroom for vDU application workloads.
With all cluster capabilities enabled, the platform alone can request over 2.5 vCPUs and consume over 2 vCPUs at idle, leaving minimal capacity for application workloads.

:::


To run on 4 vCPUs, you must minimize the cluster resource footprint:

*   Set `baselineCapabilitySet` to `None` in the `install-config.yaml` file and use `additionalEnabledCapabilities` to enable only the capabilities that your workload requires, such as `Storage`, `Console`, and `Ingress`. For more information, see "Cluster capabilities".
*   Use a performance profile to partition CPU resources between cluster housekeeping duties and application workloads, ensuring that your vDU containers run on isolated CPUs with minimal interruption. For more information, see "Tuning nodes for low latency with the performance profile".

If your deployment does not require these optimizations, it is recommended to use at least 8 vCPUs..


:::note

One vCPU equals one physical core. However, if you enable simultaneous multithreading (SMT), or Hyper-Threading, use the following formula to calculate the number of vCPUs that represent one physical core:

*   (threads per core × cores) × sockets = vCPUs

:::



:::important

The server must have a Baseboard Management Controller (BMC) when booting with virtual media.

:::