{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-deploying" %}
# Installing Logging {id="cluster-logging-deploying"}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}

{{ Product_title }} Operators use custom resources (CR) to manage applications and their components. High-level configuration and settings are provided by the user within a CR. The Operator translates high-level directives into low-level actions, based on best practices embedded within the Operator’s logic. A custom resource definition (CRD) defines a CR and lists all the configurations available to users of the Operator. Installing an Operator creates the CRDs, which are then used to generate CRs.


:::important

You must install the {{ clo }} **after** the log store Operator.

:::


You deploy {{ logging }} by installing the {{ loki_op }} or {{ es_op }} to manage your log store, followed by the {{ clo }} to manage the components of logging. You can use either the {{ product_title }} web console or the {{ product_title }} CLI to install or configure {{ logging }}.

{% leveloffset +1 %}{% include "./snippets/logging-elastic-dep-snip.md" %}{% endleveloffset %}


:::tip

You can alternatively apply all example objects.

:::


{% if openshift_origin %}
## Prerequisites {id="prerequisites_cluster-logging-deploying"}
*   Ensure that you have downloaded the {{ cluster_manager_url_pull }} as shown in _Obtaining the installation program_ in the installation documentation for your platform.

    If you have the pull secret, add the `redhat-operators` catalog to the OperatorHub custom resource (CR) as shown in _Configuring {{ product_title }} to use Red&#160;Hat Operators_.
{% endif %}

{% leveloffset +1 %}{% include "./modules/logging-es-deploy-console.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-es-deploy-cli.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./snippets/logging-retention-period-snip.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-loki-cli-install.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/logging-loki-gui-install.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{% if openshift_enterprise or openshift_origin %}
*   [About OVN-Kubernetes network policy](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#ovn-k-network-policy)
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   [About the OVN-Kubernetes default Container Network Interface (CNI) network provider](https://docs.openshift.com/container-platform/latest/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes.html)
{% endif %}