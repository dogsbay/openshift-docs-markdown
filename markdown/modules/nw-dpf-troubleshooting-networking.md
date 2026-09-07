{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshoot DPF networking issues {id="nw-dpf-troubleshooting-networking_{{ context }}"}

You can diagnose and resolve DPF networking issues, including OVN-Kubernetes configuration problems, MTU mismatches, and connectivity failures. {._abstract}

**Prerequisites**

*   DPU provisioning completed successfully.
*   The hosted cluster is accessible with DPU worker nodes joined.
*   You have access to both management and hosted cluster contexts.

**Procedure**

1.  Verify OVN-Kubernetes pod status on the management cluster:
    ```terminal
    $ export KUBECONFIG=/path/to/management-cluster.kubeconfig
    ```
    ```terminal
    $ oc get pods -n openshift-ovn-kubernetes -o wide
    ```

    Check that the following pods are running:
    *   `ovnkube-control-plane-*` pods are running on control plane nodes only.
    *   `ovnkube-node-*` pods are running on all nodes.
    *   `ovs-node-*` pods are running on all nodes.
1.  Check OVN-Kubernetes configuration on the hosted cluster:
    ```terminal
    $ export KUBECONFIG=/path/to/hosted-cluster.kubeconfig
    ```
    ```terminal
    $ oc get pods -n openshift-ovn-kubernetes -o wide
    ```

    Verify that OVN-Kubernetes pods are running on DPU ARM cores, not on host x86 CPUs.
1.  Verify the network MTU configuration:
    ```terminal
    $ oc get network.operator.openshift.io cluster -o yaml | grep -A 5 defaultNetwork
    ```

    Check the following MTU values:
    *   Standard networks: MTU 1400 for pods, 1500 for nodes.
    *   Jumbo frame networks: MTU 8940 for pods, 9000 for nodes.
1.  Test basic pod-to-pod connectivity:
    ```terminal
    $ export KUBECONFIG=/path/to/hosted-cluster.kubeconfig
    ```
    ```terminal
    $ oc run test-pod-1 --image=nicolaka/netshoot --rm -it -- /bin/bash
    ```

    From another terminal, run:
    ```terminal
    $ oc run test-pod-2 --image=nicolaka/netshoot --rm -it -- /bin/bash
    ```

    Test connectivity between the pods by using cluster IP addresses.
1.  Check VTEP network configuration:
    ```terminal
    $ export KUBECONFIG=/path/to/management-cluster.kubeconfig
    ```
    ```terminal
    $ oc debug node/<dpu-enabled-worker-node>
    ```

    In the debug shell, run:
    ```terminal
    $ chroot /host
    ```
    ```terminal
    $ ip addr show | grep $VTEP_CIDR
    ```

    Verify that VTEP interfaces are configured with the correct IP addresses from the `VTEP_CIDR` range.
1.  Test VTEP connectivity:
    ```terminal
    $ ping -c 4 <other-dpu-vtep-ip>
    ```

    If the ping fails, check routing and firewall rules between DPU nodes.
1.  Verify OVN database connectivity:
    ```terminal
    $ export KUBECONFIG=/path/to/hosted-cluster.kubeconfig
    ```
    ```terminal
    $ oc exec -n openshift-ovn-kubernetes <ovnkube-node-pod> -- ovn-nbctl show
    ```

    The output should display the OVN logical network topology.
1.  Check OVN-Kubernetes log errors:
    ```terminal
    $ oc logs -n openshift-ovn-kubernetes <ovnkube-node-pod> -c ovn-controller
    ```

    Look for the following error types:
    *   Database connectivity issues
    *   Port binding failures
    *   Flow programming errors
1.  Verify service mesh connectivity:
    ```terminal
    $ export KUBECONFIG=/path/to/hosted-cluster.kubeconfig
    ```
    ```terminal
    $ oc create service clusterip test-svc --tcp=80:80
    ```
    ```terminal
    $ oc run test-client --image=nicolaka/netshoot --rm -it -- nc -vz test-svc 80
    ```

    A successful connection indicates that service traffic is flowing through the DPU data plane.
1.  Check the SR-IOV network device plugin:
    ```terminal
    $ export KUBECONFIG=/path/to/management-cluster.kubeconfig
    ```
    ```terminal
    $ oc get sriovnetworknodepolicy -n openshift-sriov-network-operator
    ```

    Verify that SR-IOV policies are correctly applied to DPU-enabled worker nodes.

**Troubleshooting**

**OVN-Kubernetes pod failures**

Check that the OVN Helm chart version is compatible with your {{ product_title }} version.
Verify that the CNI configuration matches the DPU acceleration requirements.
Ensure that OVN databases are accessible from the DPU worker nodes.

**MTU mismatch issues**

Verify that all network components use consistent MTU values.
Check that the physical network infrastructure supports the configured MTU.
Update MTU values if the network environment has changed.

**VTEP connectivity problems**

Verify that the VTEP CIDR does not conflict with existing network ranges.
Check that routing is configured between DPU nodes.
Ensure that firewalls allow VTEP traffic on the required ports.

**Service connectivity failures**

Verify that kube-proxy is correctly configured on DPU nodes.
Check that iptables rules are correctly programmed.
Ensure that DPU acceleration is correctly handling service traffic.

**SR-IOV configuration issues**

Verify that the SR-IOV Operator is compatible with the DPU firmware.
Check that the VF count matches the configured value.
Ensure that VFs are correctly allocated to the correct namespaces.