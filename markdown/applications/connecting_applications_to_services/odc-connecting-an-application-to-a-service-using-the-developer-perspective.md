{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/servicebinding-document-attributes.md" %}
# Connecting an application to a service using the Developer perspective {id="odc-connecting-an-application-to-a-service-using-the-developer-perspective"}
{%- set context = "odc-connecting-an-application-to-a-service-using-the-developer-perspective" %}

Use the **Topology** view for the following purposes: {._abstract}

*   Grouping multiple components within an application.
*   Connecting components with each other.
*   Connecting multiple resources to services with labels.

You can either use a binding or a visual connector to connect components.

A binding connection between the components can be established only if the target node is an Operator-backed service. This is indicated by the **Create a binding connector** tool-tip which appears when you drag an arrow to such a target node. When an application is connected to a service by using a binding connector a `ServiceBinding` resource is created. Then, the {{ servicebinding_title }} controller projects the necessary binding data into the application deployment. After the request is successful, the application is redeployed establishing an interaction between the connected components.

A visual connector establishes only a visual connection between the components, depicting an intent to connect. No interaction between the components is established. If the target node is not an Operator-backed service the **Create a visual connector** tool-tip is displayed when you drag an arrow to a target node.

{% leveloffset +1 %}{% include "./modules/odc-discovering-and-identifying-operator-backed-bindable-services.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/odc-creating-a-visual-connection-between-components.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/odc-creating-a-binding-connection-between-components.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/odc-verifying-the-status-of-your-service-binding-from-the-topology-view.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/odc-visualizing-the-binding-connections-to-resources.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources-odc-connecting-an-application-to-a-service-using-the-developer-perspective" ._additional-resources}
*   [Getting started with service binding](/applications/connecting_applications_to_services/getting-started-with-service-binding#getting-started-with-service-binding)
*   [Known bindable Operators](https://github.com/redhat-developer/service-binding-operator#known-bindable-operators)