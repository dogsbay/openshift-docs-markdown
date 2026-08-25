{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Persistent Volume Claims for Serving {id="pvcs-for-serving"}
{%- set context = "pvcs-for-serving" %}

Some serverless applications need permanent data storage.
To achieve this, you can configure persistent volume claims (PVCs) for your Knative services.

{% leveloffset +1 %}{% include "./modules/serverless-enabling-pvc-support.md" %}{% endleveloffset %}

{% if openshift_enterprise %}
## Additional resources {id="additional-resources_pvcs-for-serving" ._additional-resources}
*   [Understanding persistent storage](/storage/understanding-persistent-storage#understanding-persistent-storage)
{% endif %}