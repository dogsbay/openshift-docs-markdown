{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/attributes-openshift-dedicated.md" %}
# About networking for managed clusters {id="about-managed-networking"}
{%- set context = "about-managed-networking" %}

Learn about the {{ openshift_networking }} capabilities available on your {{ product_title }} cluster, including network plugins, ingress, egress, and traffic management. {._abstract}

{% leveloffset +1 %}{% include "./modules/con_about-managed-networking.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_{{ context }}" ._additional-resources}
*   [OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/about-ovn-kubernetes#about-ovn-kubernetes)
{%- if openshift_rosa or openshift_dedicated %}
*   [{{ OCP_short }} SDN CNI removal in OCP 4.17](https://access.redhat.com/articles/7065170)
{%- endif %}
{%- if openshift_rosa %}
*   [Migrating from the OpenShift SDN network plugin to the OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/migrate-from-openshift-sdn#migrate-from-openshift-sdn)
{%- endif %}
{%- if openshift_dedicated %}
*   [Migrating from the OpenShift SDN network plugin to the OVN-Kubernetes network plugin](/networking/ovn_kubernetes_network_provider/migrate-from-openshift-sdn-osd#migrate-from-openshift-sdn-osd)
{%- endif %}