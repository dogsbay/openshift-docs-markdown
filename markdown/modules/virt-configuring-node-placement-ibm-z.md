{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure VM node placement on {{ ibm_z_title }} mixed-node clusters {id="virt-configuring-node-placement-ibm-z_{{ context }}"}

On {{ ibm_z_name }} (`s390x`) clusters, {{ VirtProductName }} only supports VMs on bare metal LPAR nodes. Without a `nodeSelector` rule, the scheduler can place VM workloads on incompatible z/VM or KVM guest nodes, causing VM pods to enter a crash loop. {._abstract}

By patching the `HyperConverged` custom resource (CR), you can restrict both {{ VirtProductName }} infrastructure components and VM workloads to bare metal LPAR nodes in a single declarative configuration. The Node Feature Discovery (NFD) Operator automatically labels bare metal LPAR nodes with `feature.node.kubernetes.io/cpu-model.hypervisor: PR_SM` by reading `/proc/cpuinfo` at node boot. You can use this label as a reliable discriminator for LPAR-only placement.

**Prerequisites**

*   Your cluster has bare metal LPAR compute nodes on {{ ibm_z_name }} or {{ ibm_linuxone_name }} hardware.
*   You have installed the Node Feature Discovery (NFD) Operator and an active `NodeFeatureDiscovery` instance is running.
*   You have installed {{ VirtProductName }}.
*   You have installed the {{ oc_first }}.
*   You are logged in with cluster administrator permissions.

**Procedure**

1.  Verify that the NFD Operator has labeled the LPAR nodes by running the following command:
    ```terminal
    $ oc get nodes -L feature.node.kubernetes.io/cpu-model.hypervisor
    ```
    ```terminal title="Example output"
    worker-lpar                PR_SM
    worker-zvm                 z_VM_7.4.0
    worker-kvm                 KVM_Linux
    ```

    Nodes labeled `PR_SM` are valid VM targets. Nodes labeled `KVM_Linux` or `z_VM_7.4.0` are not supported VM targets.
1.  Patch the `HyperConverged` CR to restrict {{ VirtProductName }} infrastructure components and VM workloads to `PR_SM` nodes by running the following command:
    ```terminal
    $ oc patch hyperconverged kubevirt-hyperconverged -n openshift-cnv \
      --type=merge -p '
    spec:
      infra:
        nodePlacement:
          nodeSelector:
            feature.node.kubernetes.io/cpu-model.hypervisor: "PR_SM"
      workloads:
        nodePlacement:
          nodeSelector:
            feature.node.kubernetes.io/cpu-model.hypervisor: "PR_SM"
    '
    ```

    where:

    `spec.infra.nodePlacement`
    :   Specifies the node placement for {{ VirtProductName }} infrastructure components, including `virt-handler`. Setting this field prevents `virt-handler` rollout failures on non-LPAR worker nodes.

    `spec.workloads.nodePlacement`
    :   Specifies the default scheduling placement for all VM pods (`virt-launcher`) across the cluster, ensuring that VMs start only on `PR_SM` LPAR nodes without requiring per-VM `nodeSelector` definitions.

    :::note

    In environments where `spec.infra.nodePlacement` does not fully prevent `virt-handler` scheduling on non-LPAR nodes, you can protect those nodes by applying a taint.
    
    :::

    ```terminal
    $ oc adm taint nodes _<non_lpar_node>_ kubevirt.io/no-virt=true:NoSchedule
    ```

**Verification**

1.  Verify that `virt-handler` pods are running only on `PR_SM` LPAR nodes by running the following command:
    ```terminal
    $ oc get pods -n openshift-cnv -l kubevirt.io=virt-handler -o wide
    ```

    Confirm that no `virt-handler` pods are running on nodes labeled `KVM_Linux` or `z_VM_7.4.0`.
1.  Verify that the HyperConverged Operator is healthy by running the following command:
    ```terminal
    $ oc get hyperconverged kubevirt-hyperconverged -n openshift-cnv
    ```

    The output must show `Available: True` and `Degraded: False`.
1.  Optional: Deploy a test VM without a `nodeSelector` to confirm cluster-wide placement by running the following command:
    ```terminal
    $ oc apply -f - <<EOF
    apiVersion: kubevirt.io/v1
    kind: VirtualMachine
    metadata:
      name: test-vm-placement
      namespace: default
    spec:
      runStrategy: Always
      template:
        spec:
          domain:
            devices:
              disks:
              - disk:
                  bus: virtio
                name: containerdisk
            resources:
              requests:
                memory: 512Mi
          volumes:
          - containerDisk:
              image: quay.io/kubevirt/cirros-container-disk-demo:latest
            name: containerdisk
    EOF
    ```
1.  Verify that the test VM runs on a `PR_SM` LPAR node by running the following command:
    ```terminal
    $ NODE=$(oc get pod -n default -l vm.kubevirt.io/name=test-vm-placement \
        -o jsonpath='{.items[0].spec.nodeName}') && \
      echo "Scheduled node: $NODE" && \
      oc get node "$NODE" -L feature.node.kubernetes.io/cpu-model.hypervisor
    ```

    The node must report `PR_SM` in the `CPU-MODEL.HYPERVISOR` column.
1.  Delete the test VM by running the following command:
    ```terminal
    $ oc delete vm test-vm-placement -n default
    ```