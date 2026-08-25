{%- set _mod_docs_content_type = "CONCEPT" %}
# Configuring a proxy during installation using {{ cluster_manager }} {id="configuring-a-proxy-during-installation-ocm_{{ context }}"}

If you are installing
{%- if openshift_dedicated %}
an {{ product_title }}
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp %}
a {{ product_title }}
{%- endif %}
cluster into an existing Virtual Private Cloud (VPC), you can use {{ cluster_manager_first }} to enable a cluster-wide HTTP or HTTPS proxy during installation.
{%- if openshift_dedicated %}
You can enable a proxy only for clusters that use the Customer Cloud Subscription (CCS) model. {._abstract}
{%- endif %}

Before the installation, you must verify that the proxy is accessible from the VPC that you install the cluster into. The proxy must also be accessible from the private subnets of the VPC.

{% if openshift_dedicated %}
For detailed steps to configure a cluster-wide proxy during installation by using {{ cluster_manager }}, see _Creating a cluster on AWS_ or _Creating a cluster on {{ gcp_short }}_.
{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}
For detailed steps to configure a cluster-wide proxy during installation by using {{ cluster_manager }}, see _Creating a cluster with customizations by using OpenShift Cluster Manager_.
{% endif %}