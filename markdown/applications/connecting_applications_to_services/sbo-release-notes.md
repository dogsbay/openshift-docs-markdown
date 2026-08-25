{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/servicebinding-document-attributes.md" %}
{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Release notes for {{ servicebinding_title }} {id="servicebinding-release-notes"}
{%- set context = "servicebinding-release-notes" %}

The {{ servicebinding_title }} consists of a controller and an accompanying custom resource definition (CRD) for service binding. It manages the data plane for workloads and backing services. The Service Binding Controller reads the data made available by the control plane of backing services. Then, it projects this data to workloads according to the rules specified through the `ServiceBinding` resource.

With {{ servicebinding_title }}, you can:

*   Bind your workloads together with Operator-managed backing services.
*   Automate configuration of binding data.
*   Provide service operators a low-touch administrative experience to provision and manage access to services.
*   Enrich development lifecycle with a consistent and declarative service binding method that eliminates discrepancies in cluster environments.

The custom resource definition (CRD) of the {{ servicebinding_title }} supports the following APIs:

*   **Service Binding** with the `binding.operators.coreos.com` API group.
*   **Service Binding (Spec API)** with the `servicebinding.io` API group.

## Support matrix {id="support-matrix"}

Some features in the following table are in [Technology Preview](https://access.redhat.com/support/offerings/techpreview). These experimental features are not intended for production use.

In the table, features are marked with the following statuses:

*   **TP**: _Technology Preview_
*   **GA**: _General Availability_

Note the following scope of support on the Red Hat Customer Portal for these features:

**Support matrix**

| **{{ servicebinding_title }}** 2+ | **API Group and Support Status** | **OpenShift Versions** |
| --- | --- | --- |
| **Version** | **`binding.operators.coreos.com`** | **`servicebinding.io`** |
|  | 1.3.3 | GA |
| GA | 4.9-4.12 | 1.3.1 |
| GA | GA | 4.9-4.11 |
| 1.3 | GA | GA |
| 4.9-4.11 | 1.2 | GA |
| GA | 4.7-4.11 | 1.1.1 |
| GA | TP | 4.7-4.10 |
| 1.1 | GA | TP |
| 4.7-4.10 | 1.0.1 | GA |
| TP | 4.7-4.9 | 1.0 |
| GA | TP | 4.7-4.9 |

{% leveloffset +1 %}{% include "./modules/sbo-release-notes-1-3-3.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/sbo-release-notes-1-3-1.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/sbo-release-notes-1-3.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/sbo-release-notes-1-2.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/sbo-release-notes-1-1-1.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/sbo-release-notes-1-1.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/sbo-release-notes-1-0-1.md" %}{% endleveloffset %}
{% leveloffset +1 %}{% include "./modules/sbo-release-notes-1-0.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_release-notes-sbo" ._additional-resources}
*   [Understanding Service Binding Operator](/applications/connecting_applications_to_services/understanding-service-binding-operator#understanding-service-binding-operator).