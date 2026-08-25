{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/servicebinding-document-attributes.md" %}
# Projecting binding data {id="projecting-binding-data"}
{%- set context = "projecting-binding-data" %}

This section provides information on how you can consume the binding data. {._abstract}

## Consumption of binding data {id="_consumption_of_binding_data"}
After the backing service exposes the binding data, for a workload to access and consume this data, you must project it into the workload from a backing service. {{ servicebinding_title }} automatically projects this set of data into the workload in the following methods:

1.  By default, as files.
1.  As environment variables, after you configure the `.spec.bindAsFiles` parameter from the `ServiceBinding` resource.

{% leveloffset +1 %}{% include "./modules/sbo-configuration-of-directory-path-to-project-binding-data.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-projecting-the-binding-data.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_projecting-binding-data-sbo" ._additional-resources}
*   [Exposing binding data from a service](/applications/connecting_applications_to_services/exposing-binding-data-from-a-service#exposing-binding-data-from-a-service).
*   [Using the projected binding data in the source code of the application](https://redhat-developer.github.io/service-binding-operator/userguide/using-projected-bindings/using-projected-bindings.html).