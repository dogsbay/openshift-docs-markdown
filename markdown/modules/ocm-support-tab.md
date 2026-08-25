{%- set _mod_docs_content_type = "REFERENCE" %}
# Support tab {id="ocm-support-tab_{{ context }}"}

In the **Support** tab, you can add notification contacts for individuals that should receive cluster notifications. The username or email address that you provide must relate to a user account in the Red Hat organization where the cluster is deployed.
{%- if openshift_dedicated or openshift_rosa %}
For the steps to add a notification contact, see _Adding cluster notification contacts_.
{% endif %} {._abstract}

Also from this tab, you can open a support case to request technical support for your cluster.