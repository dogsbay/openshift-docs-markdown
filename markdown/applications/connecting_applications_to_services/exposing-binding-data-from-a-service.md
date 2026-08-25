{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/servicebinding-document-attributes.md" %}
# Exposing binding data from a service {id="exposing-binding-data-from-a-service"}
{%- set context = "exposing-binding-data-from-a-service" %}

Application developers need access to backing services to build and connect workloads. Connecting workloads to backing services is always a challenge because each service provider requires a different way to access their secrets and consume them in a workload. {._abstract}

The {{ servicebinding_title }} enables application developers to easily bind workloads together with operator-managed backing services, without any manual procedures to configure the binding connection. For the {{ servicebinding_title }} to provide the binding data, as an Operator provider or user who creates backing services, you must expose the binding data to be automatically detected by the {{ servicebinding_title }}. Then, the {{ servicebinding_title }} automatically collects the binding data from the backing service and shares it with a workload to provide a consistent and predictable experience.

{% leveloffset +1 %}{% include "./modules/sbo-methods-of-exposing-binding-data.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-data-model.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-setting-annotations-mapping-optional.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-rbac-requirements.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-categories-of-exposable-binding-data.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_exposing-binding-data" ._additional-resources}
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   [Defining cluster service versions (CSVs)](/operators/operator_sdk/osdk-generating-csvs#osdk-generating-csvs).
{%- endif %}
*   [Projecting binding data](/applications/connecting_applications_to_services/projecting-binding-data#projecting-binding-data).