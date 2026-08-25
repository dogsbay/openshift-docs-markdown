{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/servicebinding-document-attributes.md" %}
# Getting started with service binding on {{ ibm_power_title }}, {{ ibm_z_title }}, and {{ ibm_linuxone_title }} {id="getting-started-with-service-binding-ibm-power-ibm-z"}
{%- set context = "getting-started-with-service-binding-ibm-power-ibm-z" %}

The {{ servicebinding_title }} manages the data plane for workloads and backing services. This guide provides instructions with examples to help you create a database instance, deploy an application, and use the {{ servicebinding_title }} to create a binding connection between the application and the database service. {._abstract}

## Prerequisites {id="_prerequisites"}

*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   You have installed the `oc` CLI.
*   You have installed the {{ servicebinding_title }} from the software catalog.

{% leveloffset +1 %}{% include "./modules/sbo-deploying-a-postgresql-database-operator-power-z.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-creating-a-postgresql-database-instance-power-z.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-deploying-the-spring-petclinic-sample-application-power-z.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-connecting-spring-petclinic-sample-app-to-postgresql-database-service-power-z.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_getting-started-with-service-binding-ibm-power-ibm-z" ._additional-resources}
*   [Installing Service Binding Operator](/applications/connecting_applications_to_services/installing-sbo#installing-sbo)
*   [Creating applications using the Developer perspective](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-developer-perspective)
*   [Managing resources from custom resource definitions](/operators/understanding/crds/crd-managing-resources-from-crds)