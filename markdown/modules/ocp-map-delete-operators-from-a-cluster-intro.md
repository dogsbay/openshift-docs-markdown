{%- set _mod_docs_content_type = "CONCEPT" %}

# Delete Operators with {{ olmv0 }} {id="ocp-map-delete-operators-from-a-cluster-intro_{{ context }}"}

You can delete Operators that were installed with Operator Lifecycle Manager (OLM) on your {{ product_title }} cluster. {._abstract}


:::important

You must successfully and completely uninstall an Operator before reinstalling the same Operator. If you do not fully uninstall the Operator, resources such as a project or namespace can remain in a "Terminating" state. When you try to reinstall the Operator, you might see "error resolving resource" messages.

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
For more information, see "Reinstalling Operators after failed uninstallation".
{% endif %}

:::