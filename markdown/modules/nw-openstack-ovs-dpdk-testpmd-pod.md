{%- set _mod_docs_content_type = "REFERENCE" %}
# A test pod template for clusters that use OVS-DPDK on OpenStack {id="nw-openstack-ovs-dpdk-testpmd-pod_{{ context }}"}

The following `testpmd` pod demonstrates container creation with huge pages, reserved CPUs, and the SR-IOV port. {._abstract}

```yaml title="An example testpmd pod"
apiVersion: v1
kind: Pod
metadata:
  name: testpmd-dpdk
  namespace: mynamespace
  annotations:
    cpu-load-balancing.crio.io: "disable"
    cpu-quota.crio.io: "disable"
# ...
spec:
  containers:
  - name: testpmd
    command: ["sleep", "99999"]
    image: registry.redhat.io/openshift4/dpdk-base-rhel8:v4.9
    securityContext:
      capabilities:
        add: ["IPC_LOCK","SYS_ADMIN"]
      privileged: true
      runAsUser: 0
    resources:
      requests:
        memory: 1000Mi
        hugepages-1Gi: 1Gi
        cpu: '2'
        openshift.io/dpdk1: 1
      limits:
        hugepages-1Gi: 1Gi
        cpu: '2'
        memory: 1000Mi
        openshift.io/dpdk1: 1
    volumeMounts:
      - mountPath: /mnt/huge
        name: hugepage
        readOnly: False
  runtimeClassName: performance-cnf-performanceprofile
  volumes:
  - name: hugepage
    emptyDir:
      medium: HugePages
```

*   The name `dpdk1` in this example is a user-created `SriovNetworkNodePolicy` resource. You can substitute this name for that of a resource that you create.
*   If your performance profile is not named `cnf-performance profile`, replace that string with the correct performance profile name.