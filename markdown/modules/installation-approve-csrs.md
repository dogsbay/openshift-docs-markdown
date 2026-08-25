{% if context == "installing-ibm-z" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = true -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = true -%}
{% endif %}
{% if context == "creating-multi-arch-compute-nodes-ibm-power" %}
{%- set ibm_power = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Approving the certificate signing requests for your machines {id="installation-approve-csrs_{{ context }}"}

To allow newly added machines to join your {{ product_title }} cluster, confirm that the cluster approves pending certificate signing requests (CSRs), or approve them yourself. Approve client requests first, then server requests. {._abstract}

**Prerequisites**

*   You added machines to your cluster.

**Procedure**

1.  Confirm that the cluster recognizes the machines:
    ```terminal
    $ oc get nodes
    ```
    ```terminal title="Example output"
    NAME      STATUS    ROLES   AGE  VERSION
    master-0  Ready     master  63m  v1.35.4
    master-1  Ready     master  63m  v1.35.4
    master-2  Ready     master  64m  v1.35.4
    ```

    The output lists all of the machines that you created.

    :::note

    The preceding output might not include the compute nodes until you approve some CSRs.
    
    :::

1.  Review the pending CSRs and ensure that you see the client requests with the `Pending` or `Approved` status for each machine that you added to the cluster:
    {%- if not (ibm_z or ibm_z_kvm) %}
    ```terminal
    $ oc get csr
    ```
    ```terminal title="Example output"
    NAME        AGE     REQUESTOR                                                                   CONDITION
    csr-8b2br   15m     system:serviceaccount:openshift-machine-config-operator:node-bootstrapper   Pending
    csr-8vnps   15m     system:serviceaccount:openshift-machine-config-operator:node-bootstrapper   Pending
    ...
    ```

    In this example, two machines are joining the cluster. You might see more approved CSRs in the list.
{% endif %}
{% if ibm_z or ibm_z_kvm %}
    ```terminal
    $ oc get csr
    ```
    ```terminal title="Example output"
    NAME        AGE   REQUESTOR                                   CONDITION
    csr-mddf5   20m   system:node:master-01.example.com   Approved,Issued
    csr-z5rln   16m   system:node:worker-21.example.com   Approved,Issued
    ```
{% endif %}
1.  If the CSRs were not approved, after all of the pending CSRs for the machines you added are in `Pending` status, approve the CSRs for your cluster machines:

    :::note

    You must approve your CSRs within an hour of adding the machines to the cluster. If you do not approve them within an hour, the certificates rotate, and more than two certificates are present for each node. You must approve all of these certificates. After you approve the client CSR, the kubelet creates a secondary CSR for the serving certificate, which requires manual approval. The `machine-approver` then automatically approves later serving certificate renewal requests if the kubelet requests a new certificate with the same parameters.
    
    :::


    :::note

    For clusters running on platforms that are not machine API enabled, such as bare metal and other user-provisioned infrastructure, you must implement a method of automatically approving the kubelet serving certificate requests (CSRs). If you do not approve a request, the `oc exec`, `oc rsh`, and `oc logs` commands cannot succeed, because the API server requires a serving certificate when it connects to the kubelet. Any operation that contacts the kubelet endpoint requires this certificate approval to be in place. The method must watch for new CSRs, confirm that the `node-bootstrapper` service account in the `system:node` or `system:admin` groups submitted the CSR, and confirm the identity of the node.
    
    :::

    *   To approve them individually, run the following command for each valid CSR:
        ```terminal
        $ oc adm certificate approve <csr_name>
        ```

        where:

        `<csr_name>`
        :   Specifies the name of a CSR from the list of current CSRs.
        *   To approve all pending CSRs, run the following command:
        ```terminal
        $ oc get csr -o go-template='{{range .items}}{{if not .status}}{{.metadata.name}}{{"\n"}}{{end}}{{end}}' | xargs --no-run-if-empty oc adm certificate approve
        ```

        :::note


        Some Operators might not become available until you approve some CSRs. Each node submits two CSRs, so you might need to run the command to approve CSRs many times.
        
        :::

1.  After you approve your client requests, review the server requests for each machine that you added to the cluster:
    ```terminal
    $ oc get csr
    ```
    ```terminal title="Example output"
    NAME        AGE     REQUESTOR                                                                   CONDITION
    csr-bfd72   5m26s   system:node:ip-10-0-50-126.us-east-2.compute.internal                       Pending
    csr-c57lv   5m26s   system:node:ip-10-0-95-157.us-east-2.compute.internal                       Pending
    ...
    ```
1.  If the remaining CSRs are not approved, and are in the `Pending` status, approve the CSRs for your cluster machines:
    *   To approve them individually, run the following command for each valid CSR:
        ```terminal
        $ oc adm certificate approve <csr_name>
        ```

        where:

        `<csr_name>`
        :   Specifies the name of a CSR from the list of current CSRs.
        *   To approve all pending CSRs, run the following command:
        ```terminal
        $ oc get csr -o go-template='{{range .items}}{{if not .status}}{{.metadata.name}}{{"\n"}}{{end}}{{end}}' | xargs oc adm certificate approve
        ```
1.  After you approve all client and server CSRs, the machines have the `Ready` status. Verify this by running the following command:
    {%- if not ibm_power %}
    ```terminal
    $ oc get nodes
    ```
{% endif %}
{% if ibm_power %}
    ```terminal
    $ oc get nodes -o wide
    ```
{%- endif %}
{%- if not ibm_power %}
    ```terminal title="Example output"
    NAME      STATUS    ROLES   AGE  VERSION
    master-0  Ready     master  73m  v1.35.4
    master-1  Ready     master  73m  v1.35.4
    master-2  Ready     master  74m  v1.35.4
    worker-0  Ready     worker  11m  v1.35.4
    worker-1  Ready     worker  11m  v1.35.4
    ```
{% endif %}
{% if ibm_power %}
    ```terminal title="Example output"
    NAME               STATUS   ROLES                  AGE   VERSION   INTERNAL-IP      EXTERNAL-IP   OS-IMAGE                                                       KERNEL-VERSION                  CONTAINER-RUNTIME
    worker-0-ppc64le   Ready    worker                 42d   v1.35.4   192.168.200.21   <none>        Red Hat Enterprise Linux CoreOS 415.92.202309261919-0 (Plow)   5.14.0-284.34.1.el9_2.ppc64le   cri-o://1.35.4-3.rhaos4.15.gitb36169e.el9
    worker-1-ppc64le   Ready    worker                 42d   v1.35.4   192.168.200.20   <none>        Red Hat Enterprise Linux CoreOS 415.92.202309261919-0 (Plow)   5.14.0-284.34.1.el9_2.ppc64le   cri-o://1.35.4-3.rhaos4.15.gitb36169e.el9
    master-0-x86       Ready    control-plane,master   75d   v1.35.4   10.248.0.38      10.248.0.38   Red Hat Enterprise Linux CoreOS 415.92.202309261919-0 (Plow)   5.14.0-284.34.1.el9_2.x86_64    cri-o://1.35.4-3.rhaos4.15.gitb36169e.el9
    master-1-x86       Ready    control-plane,master   75d   v1.35.4   10.248.0.39      10.248.0.39   Red Hat Enterprise Linux CoreOS 415.92.202309261919-0 (Plow)   5.14.0-284.34.1.el9_2.x86_64    cri-o://1.35.4-3.rhaos4.15.gitb36169e.el9
    master-2-x86       Ready    control-plane,master   75d   v1.35.4   10.248.0.40      10.248.0.40   Red Hat Enterprise Linux CoreOS 415.92.202309261919-0 (Plow)   5.14.0-284.34.1.el9_2.x86_64    cri-o://1.35.4-3.rhaos4.15.gitb36169e.el9
    worker-0-x86       Ready    worker                 75d   v1.35.4   10.248.0.43      10.248.0.43   Red Hat Enterprise Linux CoreOS 415.92.202309261919-0 (Plow)   5.14.0-284.34.1.el9_2.x86_64    cri-o://1.35.4-3.rhaos4.15.gitb36169e.el9
    worker-1-x86       Ready    worker                 75d   v1.35.4   10.248.0.44      10.248.0.44   Red Hat Enterprise Linux CoreOS 415.92.202309261919-0 (Plow)   5.14.0-284.34.1.el9_2.x86_64    cri-o://1.35.4-3.rhaos4.15.gitb36169e.el9
    ```
{%- endif %}

    :::note

    You might need to wait a few minutes after approval of the server CSRs for the machines to change to the `Ready` status.
    
    :::


{% if context == "installing-ibm-z" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "installing-ibm-z-kvm" %}
{%- set ibm_z_kvm = false -%}
{% endif %}
{% if context == "installing-ibm-z-lpar" %}
{%- set ibm_z = false -%}
{% endif %}
{% if context == "creating-multi-arch-compute-nodes-ibm-power" %}
{%- set ibm_power = false -%}
{% endif %}