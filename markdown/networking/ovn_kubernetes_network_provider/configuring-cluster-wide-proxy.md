{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# Configuring a cluster-wide proxy {id="configuring-a-cluster-wide-proxy"}
{%- set context = "configuring-a-cluster-wide-proxy" %}

If you are using an existing Virtual Private Cloud (VPC), you can configure a cluster-wide proxy during
{%- if openshift_rosa or openshift_rosa_hcp %}
a {{ product_title }}
{% endif %}
{% if openshift_dedicated %}
an {{ product_title }}
{%- endif %}
cluster installation or after the cluster is installed. When you enable a proxy, the core cluster components are denied direct access to the internet, but the proxy does not affect user workloads. {._abstract}


:::note

The system proxies only cluster system egress traffic, including calls to the cloud provider API.

:::


{% if openshift_dedicated %}
You can enable a proxy only for {{ product_title }} clusters that use the Customer Cloud Subscription (CCS) model.
{% endif %}

If you use a cluster-wide proxy, you are responsible for maintaining the availability of the proxy to the cluster. If the proxy becomes unavailable, then it might impact the health and supportability of the cluster.

{% leveloffset +1 %}{% include "./modules/cluster-wide-proxy-preqs.md" %}{% endleveloffset %}

{% if openshift_dedicated %}
**Additional resources**
{._additional-resources}

*   [Customer Cloud Subscriptions on AWS](/osd_planning/aws-ccs#aws-ccs)
{% endif %}

{% leveloffset +1 %}{% include "./modules/configuring-a-proxy-trust-bundle-responsibilities.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/configuring-proxy-during-install-intro.md" %}{% endleveloffset %}

{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
{% leveloffset +2 %}{% include "./modules/configuring-a-proxy-during-installation-ocm.md" %}{% endleveloffset %}

{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
{% leveloffset +2 %}{% include "./modules/configuring-a-proxy-during-installation-cli.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_rosa or openshift_dedicated %}

**Additional resources**
{._additional-resources}

{%- if openshift_rosa %}
*   [Creating a cluster with customizations by using OpenShift Cluster Manager](/rosa_install_access_delete_clusters/rosa-sts-creating-a-cluster-with-customizations#rosa-sts-creating-cluster-customizations-ocm_rosa-sts-creating-a-cluster-with-customizations)
*   [Creating a cluster with customizations using the CLI](/rosa_install_access_delete_clusters/rosa-sts-creating-a-cluster-with-customizations#rosa-sts-creating-cluster-customizations-cli_rosa-sts-creating-a-cluster-with-customizations)
{% endif %}
{% if openshift_dedicated %}
*   [Creating a cluster on AWS](/osd_aws_clusters/creating-an-aws-cluster#osd-create-aws-cluster-ccs_osd-creating-a-cluster-on-aws)
*   [Creating a cluster on {{ gcp_short }} with Workload Identity Federation authentication](/osd_gcp_clusters/creating-a-gcp-cluster-with-workload-identity-federation#osd-creating-a-cluster-on-gcp-with-workload-identity-federation)
{% endif %}
{% endif %}

{% leveloffset +1 %}{% include "./modules/configuring-proxy-after-install-intro.md" %}{% endleveloffset %}

{% if openshift_dedicated %}
{% leveloffset +2 %}{% include "./modules/configuring-a-proxy-after-installation-ocm.md" %}{% endleveloffset %}

{% endif %}

{% if openshift_rosa or openshift_rosa_hcp %}

{% leveloffset +2 %}{% include "./modules/configuring-a-proxy-after-installation-ocm.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configuring-a-proxy-after-installation-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/removing-cluster-wide-proxy-intro.md" %}{% endleveloffset %}

{% leveloffset +3 %}{% include "./modules/nw-rosa-proxy-remove-cli.md" %}{% endleveloffset %}

{% leveloffset +2 %}{% include "./modules/configmap-removing-ca.md" %}{% endleveloffset %}

{% endif %}