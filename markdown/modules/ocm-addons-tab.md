{%- set _mod_docs_content_type = "CONCEPT" %}
# Add-ons tab {id="ocm-addons-tab_{{ context }}"}

{% if openshift_rosa %}
The **Add-ons** tab displays all of the optional add-ons that can be added to the cluster. Select the desired add-on, and then select **Install** below the description for the add-on that displays.
{% endif %}
{% if openshift_rosa_hcp %}
The Add-ons tab is not currently supported on hosted control plane clusters.
{% endif %}