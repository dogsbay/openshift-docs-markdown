{%- set _mod_docs_content_type = "REFERENCE" %}
# Worker node CSR approval fails {id="nw-dpf-ts-worker-csr-approval_{{ context }}"}

If certificate signing request (CSR) approval for worker nodes fails, network connectivity between the management cluster and the DPU or hosted cluster path might be incomplete. {._abstract}


Check Host-Based Networking pods on worker nodes
:   Run the following command to verify that HBN pods are running:
    ```terminal
    $ oc get pods -n openshift-hbn -o wide
    ```


Verify DPU management network connectivity
:   From a management cluster node, ping the DPU management IP address:
    ```terminal
    $ ping <dpu_management_ip>
    ```


Verify the `br-ex` bridge on worker nodes
:   Confirm that the `br-ex` bridge that the worker `MachineConfig` resource creates is present and that required firewall rules allow traffic on the DPU management and high-speed networks.