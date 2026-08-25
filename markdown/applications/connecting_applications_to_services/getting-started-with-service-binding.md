{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
{% include "./_attributes/servicebinding-document-attributes.md" %}
# Getting started with service binding {id="getting-started-with-service-binding"}
{%- set context = "getting-started-with-service-binding" %}

The {{ servicebinding_title }} manages the data plane for workloads and backing services. This guide provides instructions with examples to help you create a database instance, deploy an application, and use the {{ servicebinding_title }} to create a binding connection between the application and the database service. {._abstract}

## Prerequisites {id="_prerequisites"}

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have access to an {{ product_title }} cluster using an account with `cluster-admin` permissions.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You have access to an {{ product_title }} cluster using an account with `dedicated-admin` permissions.
{%- endif %}
*   You have installed the `oc` CLI.
*   You have installed {{ servicebinding_title }} from the software catalog.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have installed the 5.1.2 version of the Crunchy Postgres for Kubernetes Operator from the software catalog using the **v5** Update channel. The installed Operator is available in an appropriate namespace, such as the `my-petclinic` namespace.

    :::note

    You can create the namespace using the `oc create namespace my-petclinic` command.
    
    :::

{%- endif %}
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You have installed the 5.1.2 version of the Crunchy Postgres for Kubernetes Operator from the software catalog using the **v5** Update channel. The installed Operator is available in an appropriate project, such as the `my-petclinic` project.

    :::note

    You can create the project using the `oc new-project my-petclinic` command.
    
    :::

{%- endif %}

{% leveloffset +1 %}{% include "./modules/sbo-creating-a-postgresql-database-instance.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-deploying-the-spring-petclinic-sample-application.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/sbo-connecting-spring-petclinic-sample-app-to-postgresql-database-service.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_getting-started-sbo" ._additional-resources}
*   [Installing Service Binding Operator](/applications/connecting_applications_to_services/installing-sbo#installing-sbo).
*   [Creating applications using the Developer perspective](/applications/creating_applications/odc-creating-applications-using-developer-perspective#odc-creating-applications-using-developer-perspective).
*   [Managing resources from custom resource definitions](/operators/understanding/crds/crd-managing-resources-from-crds).
*   [Known bindable Operators](https://github.com/redhat-developer/service-binding-operator#known-bindable-operators).