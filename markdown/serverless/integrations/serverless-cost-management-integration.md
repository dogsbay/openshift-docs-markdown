{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Integrating {{ ServerlessProductShortName }} with the cost management service {id="serverless-cost-management-integration"}
{% include "./_attributes/common-attributes.md" %}
{%- set context = "serverless-cost-management-integration" %}

[Cost management](https://access.redhat.com/documentation/en-us/cost_management_service/2022/html/getting_started_with_cost_management/assembly-introduction-cost-management#about-cost-management_getting-started) is an {{ product_title }} service that enables you to better understand and track costs for clouds and containers. It is based on the open source [Koku](https://project-koku.github.io/) project.

## Prerequisites {id="prerequisites_serverless-cost-management-integration"}

*   You have cluster administrator permissions.
*   You have set up cost management and added an [{{ product_title }} source](https://access.redhat.com/documentation/en-us/cost_management_service/2022/html/adding_an_openshift_container_platform_source_to_cost_management/index).

{% leveloffset +1 %}{% include "./modules/serverless-cost-management-labels.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_serverless-cost-management-integration" ._additional-resources}
*   [Configure tagging for your sources](https://access.redhat.com/documentation/en-us/cost_management_service/2022/html/getting_started_with_cost_management/assembly-installing-cost-management#configure-tagging-next-step_configuring)
*   [Use the Cost Explorer to visualize your costs](https://access.redhat.com/documentation/en-us/cost_management_service/2022/html/getting_started_with_cost_management/assembly-using-cost-management#cost-explorer-next-step_using-cost-management)