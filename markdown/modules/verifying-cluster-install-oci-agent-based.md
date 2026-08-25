{% if context == "installing-c3-agent-based-installer" %}
{%- set c3 = true -%}
{% endif %}

{% if context == "installing-pca-agent-based-installer" %}
{%- set pca = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" -%}

{% if c3 %}
# Verifying that your Agent-based cluster installation runs on {{ oci_edge_no_rt }} {id="verifying-cluster-install-oci-agent-based_{{ context }}"}

Verify that your cluster was installed and is running effectively on {{ oci_edge_no_rt }}. {._abstract}

**Prerequisites**

*   You created all the required {{ oci_first_no_rt }} resources and services. See the "Creating {{ oci }} infrastructure resources and services" section.
*   You created `install-config.yaml` and `agent-config.yaml` configuration files. See the "Creating configuration files for installing a cluster on {{ oci_edge_no_rt }}" section.
*   You uploaded the agent ISO image to a default Oracle Object Storage bucket, and you created a compute instance on {{ oci_edge_no_rt }}. For more information, see "Running a cluster on {{ oci_edge_no_rt }}".
{% endif %}

{% if pca %}
# Verifying that your Agent-based cluster installation runs on {{ oci_pca_short }} {id="verifying-cluster-install-oci-agent-based_{{ context }}"}

Verify that your cluster was installed and is running effectively on {{ oci_pca_short }}. {._abstract}

**Prerequisites**

*   You created all the required {{ oci_pca }} resources and services. See the "Creating {{ oci_pca_no_rt }} infrastructure resources and services" section.
*   You created `install-config.yaml` and `agent-config.yaml` configuration files. See the "Creating configuration files for installing a cluster on {{ oci_pca_short }}" section.
*   You uploaded the agent ISO image to a default Oracle Object Storage bucket, and you created a compute instance on {{ oci_pca_short }}. For more information, see "Running a cluster on {{ oci_pca_short }}".
{% endif %}

{% if not (pca or c3) %}
# Verifying that your Agent-based cluster installation runs on {{ oci_distributed_no_rt }} {id="verifying-cluster-install-oci-agent-based_{{ context }}"}

Verify that your cluster was installed and is running effectively on {{ oci_distributed }}. {._abstract}

**Prerequisites**

*   You created all the required {{ oci }} resources and services. See the "Creating {{ oci_distributed_no_rt }} infrastructure resources and services" section.
*   You created `install-config.yaml` and `agent-config.yaml` configuration files. See the "Creating configuration files for installing a cluster on {{ oci_distributed_no_rt }}" section.
*   You uploaded the agent ISO image to a default Oracle Object Storage bucket, and you created a compute instance on {{ oci_distributed_no_rt }}. For more information, see "Running a cluster on {{ oci_distributed_no_rt }}".
{% endif %}

**Procedure**

*   After you deploy the compute instance on a self-managed node in your {{ product_title }} cluster, monitor the cluster’s status by choosing one of the following options:
    *   From the {{ product_title }} CLI, enter the following command:
        ```terminal
        $ ./openshift-install agent wait-for install-complete --log-level debug
        ```

        Check the status of the `rendezvous` host node that runs the bootstrap node.  After the host reboots, the host forms part of the cluster.
    *   Use the `kubeconfig` API to check the status of various {{ product_title }} components. For the  `KUBECONFIG` environment variable, set the relative path of the cluster’s `kubeconfig` configuration file:
        ```terminal
        $  export KUBECONFIG=~/auth/kubeconfig
        ```

        Check the status of each of the cluster’s self-managed nodes. CCM applies a label to each node to designate the node as running in a cluster on {{ oci }}.
        ```terminal
        $ oc get nodes -A
        ```
        ```terminal title="Output example"
        NAME                                   STATUS ROLES                 AGE VERSION
        main-0.private.agenttest.oraclevcn.com Ready  control-plane, master 7m  v1.27.4+6eeca63
        main-1.private.agenttest.oraclevcn.com Ready  control-plane, master 15m v1.27.4+d7fa83f
        main-2.private.agenttest.oraclevcn.com Ready  control-plane, master 15m v1.27.4+d7fa83f
        ```

        Check the status of each of the cluster’s Operators, with the CCM Operator status being a good indicator that your cluster is running.
        ```terminal
        $ oc get co
        ```
        ```terminal title="Truncated output example"
        NAME           VERSION     AVAILABLE  PROGRESSING    DEGRADED   SINCE   MESSAGE
        authentication 4.22.0-0    True       False          False      6m18s
        baremetal      4.22.0-0    True       False          False      2m42s
        network        4.22.0-0    True       True           False      5m58s  Progressing: …
            …
        ```

{% if context == "installing-c3-agent-based-installer" %}
{%- set c3 = "" -%}
{% endif %}

{% if context == "installing-pca-agent-based-installer" %}
{%- set pca = "" -%}
{% endif %}