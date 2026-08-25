{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Reducing resource consumption of {{ pipelines_shortname }} {id="reducing-pipelines-resource-consumption"}
{%- set context = "reducing-pipelines-resource-consumption" %}

If you use clusters in multi-tenant environments you must control the consumption of CPU, memory, and storage resources for each project and Kubernetes object. This helps prevent any one application from consuming too many resources and affecting other applications.

To define the final resource limits that are set on the resulting pods, {{ pipelines_title }} use resource quota limits and limit ranges of the project in which they are executed.

To restrict resource consumption in your project, you can:

*   [Set and manage resource quotas](/applications/quotas/quotas-setting-per-project) to limit the aggregate resource consumption.
*   Use [limit ranges to restrict resource consumption](/nodes/clusters/nodes-cluster-limit-ranges) for specific objects, such as pods, images, image streams, and persistent volume claims.

{% leveloffset +1 %}{% include "./modules/op-understanding-pipelines-resource-consumption.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-mitigating-extra-pipeline-resource-consumption.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_reducing-pipelines-resource-consumption" ._additional-resources}

*   [Setting compute resource quota for {{ pipelines_shortname }}](/cicd/pipelines/setting-compute-resource-quota-for-openshift-pipelines#setting-compute-resource-quota-for-openshift-pipelines)
*   [Resource quotas per project](/applications/quotas/quotas-setting-per-project#quotas-setting-per-project)
*   [Restricting resource consumption using limit ranges](/nodes/clusters/nodes-cluster-limit-ranges#nodes-cluster-limit-ranges)
*   [Resource requests and limits in Kubernetes](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/#resources)