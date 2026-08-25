{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a proxy after installation using {{ cluster_manager }} {id="configuring-a-proxy-after-installation-ocm_{{ context }}"}

You can use {{ cluster_manager_first }} to add a cluster-wide proxy configuration to an existing {{ product_title }} cluster in a Virtual Private Cloud (VPC).
{%- if openshift_dedicated %}
You can enable a proxy only for clusters that use the Customer Cloud Subscription (CCS) model.
{% endif %} {._abstract}

You can also use {{ cluster_manager }} to update an existing cluster-wide proxy configuration. For example, you might need to update the network address for the proxy or replace the additional trust bundle if any of the certificate authorities for the proxy expire.


:::important

The cluster applies the proxy configuration to the control plane and compute nodes. While applying the configuration, each cluster node is temporarily placed in an unschedulable state and drained of its workloads. The process restarts each node.

:::


**Prerequisites**

{% if not openshift_dedicated %}
*   You have an {{ product_title }} cluster.
{% endif %}
{% if openshift_dedicated %}
*   You have an {{ product_title }} cluster that uses the Customer Cloud Subscription (CCS) model.
{%- endif %}
*   You deploy your cluster in a VPC.

**Procedure**

1.  Navigate to {{ cluster_manager_url }} and select your cluster.
1.  Under the **Virtual Private Cloud (VPC)** section on the **Networking** page, click **Edit cluster-wide proxy**.
1.  On the **Edit cluster-wide proxy** page, give your proxy configuration details:
    1.  Enter a value in at least one of the following fields:
        *   Specify a valid **HTTP proxy URL**.
        *   Specify a valid **HTTPS proxy URL**.
        *   In the **Additional trust bundle** field, give a Privacy Enhanced Mail (PEM) encoded X.509 certificate bundle.

            If you are replacing an existing trust bundle file, select **Replace file** to view the field. The system adds the bundle to the trusted certificate store for the cluster nodes. You must use an additional trust bundle file if you use a TLS-inspecting proxy unless an authority from the {{ op_system_first }} trust bundle signs the identity certificate for the proxy. This requirement applies regardless of whether the proxy is transparent or requires explicit configuration by using the `http-proxy` and `https-proxy` arguments.
    1.  Click **Confirm**.

**Verification**

*   Under the **Virtual Private Cloud (VPC)** section on the **Networking** page, verify that the proxy configuration for your cluster is as expected.