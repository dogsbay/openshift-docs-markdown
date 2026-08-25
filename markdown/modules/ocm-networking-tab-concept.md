{%- set _mod_docs_content_type = "CONCEPT" %}
# Networking tab {id="ocm-networking-tab_{{ context }}"}

The ***Networking*** tab provides a control plane API endpoint as well as the default application router. Both the control plane API endpoint and the default application router can be made private by selecting the respective box below label. If applicable, you can also find your virtual private cloud (VPC) details on this tab. {._abstract}

{% if openshift_rosa_hcp %}
You can change your application ingress to private or public by selecting the ***Edit application ingress*** button then checking or unchecking the "Make router private" checkbox.
{% endif %}
{% if openshift_rosa %}
Select the ***Edit application ingress*** button to edit the existing application ingress. You can change your application ingress to private or public by checking or unchecking the "Make router private" checkbox.


:::important

For Security Token Service (STS) installations, these options cannot be changed. STS installations also do not allow you to change privacy nor allow you to add an additional router.

:::

{% endif %}
{% if not (openshift_rosa or openshift_rosa_hcp) %}

:::important

{{ cluster_manager_first }} does not support the networking tab for a {{ gcp_first }}, non-CCS cluster running in a Red Hat {{ gcp_short }} project.

:::

{% endif %}