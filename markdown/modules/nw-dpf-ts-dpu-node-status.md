{%- set _mod_docs_content_type = "REFERENCE" %}
# DPU nodes remain NotReady in the hosted cluster {id="nw-dpf-ts-dpu-node-status_{{ context }}"}

If DPU nodes remain in a `NotReady` state in the hosted cluster, DPU provisioning might be incomplete, or the DPU firmware and DOCA software versions might be incompatible with the DPF Operator version. {._abstract}


Check DPU and DPU service status on the management cluster
:   Run the following commands:
    ```terminal
    $ oc get dpu -n dpf-operator-system
    ```
    ```terminal
    $ oc get dpuservice -n dpf-operator-system
    ```


Verify node status in the hosted cluster
:   Switch to the hosted cluster kubeconfig and list the nodes:
    ```terminal
    $ export KUBECONFIG=<path_to_hosted_cluster_kubeconfig>
    ```
    ```terminal
    $ oc get nodes
    ```


Check DPF Operator and related pod logs
:   On the management cluster, inspect logs from DPF-related pods for provisioning or networking errors:
    ```terminal
    $ oc logs -n dpf-operator-system <dpu_related_pod_name>
    ```


Verify firmware and software compatibility
:   Confirm that the BlueField firmware and DOCA software versions on the DPU are compatible with the DPF Operator version that you deployed.