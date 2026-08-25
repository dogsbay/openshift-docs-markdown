{%- set _mod_docs_content_type = "REFERENCE" %}
# A test pod template for clusters that use OVS hardware offloading on OpenStack {id="nw-openstack-hw-offload-testpmd-pod_{{ context }}"}

The following `testpmd` pod demonstrates Open vSwitch (OVS) hardware offloading on {{ rh_openstack_first }}. {._abstract}

```yaml title="An example testpmd pod"
apiVersion: v1
kind: Pod
metadata:
  name: testpmd-sriov
  namespace: mynamespace
  annotations:
    k8s.v1.cni.cncf.io/networks: hwoffload1
spec:
  runtimeClassName: performance-cnf-performanceprofile
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
      limits:
        hugepages-1Gi: 1Gi
        cpu: '2'
        memory: 1000Mi
    volumeMounts:
      - mountPath: /mnt/huge
        name: hugepage
        readOnly: False
  volumes:
  - name: hugepage
    emptyDir:
      medium: HugePages
```

*   If your performance profile is not named `cnf-performance profile`, replace that string with the correct performance profile name.