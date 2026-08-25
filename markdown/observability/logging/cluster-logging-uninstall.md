{%- set _mod_docs_content_type = "ASSEMBLY" -%}
{%- set context = "cluster-logging-uninstall" %}
{% include "./_attributes/common-attributes.md" %}
# Uninstalling Logging {id="cluster-logging-uninstall"}

You can remove {{ logging }} from your {{ product_title }} cluster by removing installed Operators and related custom resources (CRs).

{% leveloffset +1 %}{% include "./modules/uninstall-cluster-logging-operator.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/uninstall-logging-delete-pvcs.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/uninstall-loki-operator.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/uninstall-es-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/olm-deleting-operators-from-a-cluster-using-cli.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

{%- if openshift_enterprise or openshift_origin %}
*   [Reclaiming a persistent volume manually](/storage/understanding-persistent-storage#reclaim-manual_understanding-persistent-storage)
{%- endif %}
{%- if openshift_rosa or openshift_dedicated %}
* [Reclaiming a persistent volume manually](https://docs.openshift.com/container-platform/latest/storage/understanding-persistent-storage.html#reclaim-manual_understanding-persistent-storage)
{%- endif %}