{%- set _mod_docs_content_type = "REFERENCE" %}
# Performance profile template for clusters that use OVS-DPDK on OpenStack {id="installation-openstack-ovs-dpdk-performance-profile_{{ context }}"}

To maximize machine performance in a cluster that uses Open vSwitch with the Data Plane Development Kit (OVS-DPDK) on {{ rh_openstack_first }}, you can use a performance profile. {._abstract}

You can use the following performance profile template to create a profile for your deployment.

```yaml title="Performance profile template for clusters that use OVS-DPDK"
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
    - default_hugepagesz=1GB
    - hugepagesz=1G
    - intel_iommu=on
  cpu:
    isolated: <CPU_ISOLATED>
    reserved: <CPU_RESERVED>
  hugepages:
    defaultHugepagesSize: 1G
    pages:
      - count: <HUGEPAGES_COUNT>
        node: 0
        size: 1G
  nodeSelector:
    node-role.kubernetes.io/worker: ''
  realTimeKernel:
    enabled: false
    globallyDisableIrqLoadBalancing: true
```

Insert values that are appropriate for your configuration for the `CPU_ISOLATED`, `CPU_RESERVED`, and `HUGEPAGES_COUNT` keys.