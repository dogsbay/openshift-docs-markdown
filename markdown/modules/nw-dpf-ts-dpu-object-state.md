{%- set _mod_docs_content_type = "REFERENCE" %}
# DPU objects remain in the `DPU Cluster Config` state {id="nw-dpf-ts-dpu-object-state_{{ context }}"}

If DPU objects remain in a `DPU Cluster Config` state and do not progress, the hosted cluster might have pending certificate signing requests (CSRs) that must be approved. {._abstract}


Check for pending CSRs in the hosted cluster
:   Switch to the hosted cluster context and check for any pending CSRs:
    ```terminal
    $ export KUBECONFIG=<path_to_hosted_cluster_kubeconfig>
    ```
    ```terminal
    $ oc get csr -A
    ```

    Review the output and approve any CSRs that show a `Pending` status.