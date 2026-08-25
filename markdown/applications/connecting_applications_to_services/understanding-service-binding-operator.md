{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/servicebinding-document-attributes.md" %}
# Understanding Service Binding Operator {id="understanding-service-binding-operator"}
{%- set context = "understanding-service-binding-operator" %}

Application developers need access to backing services to build and connect workloads. Connecting workloads to backing services is always a challenge because each service provider suggests a different way to access their secrets and consume them in a workload. In addition, manual configuration and maintenance of this binding together of workloads and backing services make the process tedious, inefficient, and error-prone. {._abstract}

The {{ servicebinding_title }} enables application developers to easily bind workloads together with Operator-managed backing services, without any manual procedures to configure the binding connection.

{% leveloffset +1 %}{% include "./modules/sbo-service-binding-terminology.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-about-service-binding-operator.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-key-features.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-api-differences.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_understanding-sbo" ._additional-resources}
*   [Getting started with service binding](/applications/connecting_applications_to_services/getting-started-with-service-binding#getting-started-with-service-binding)