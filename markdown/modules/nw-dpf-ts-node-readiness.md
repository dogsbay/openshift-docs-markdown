{%- set _mod_docs_content_type = "REFERENCE" %}
# Management cluster nodes do not become ready {id="nw-dpf-ts-node-readiness_{{ context }}"}

If management cluster nodes do not reach a `Ready` state after DPU provisioning completes, the OVN-Kubernetes CNI pods might not be running correctly on the management cluster or the hosted cluster. {._abstract}


Check OVN-Kubernetes pods on the management cluster
:   Switch to the management cluster context and verify that all OVN-Kubernetes pods are running on the x86_64 worker nodes and control plane nodes:
    ```terminal
    $ export KUBECONFIG=<path_to_management_cluster_kubeconfig>
    ```
    ```terminal
    $ oc get pods -n openshift-ovn-kubernetes -o wide
    ```


Check OVN-Kubernetes pods on the hosted cluster
:   Switch to the hosted cluster context and verify that all OVN-Kubernetes pods are running on the DPU workers:
    ```terminal
    $ export KUBECONFIG=<path_to_hosted_cluster_kubeconfig>
    ```
    ```terminal
    $ oc get pods -n openshift-ovn-kubernetes -o wide
    ```

    Ensure that all pods in the `openshift-ovn-kubernetes` namespace are in a `Running` state on both clusters.