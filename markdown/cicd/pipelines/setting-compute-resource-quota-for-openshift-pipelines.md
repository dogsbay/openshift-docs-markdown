{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Setting compute resource quota for {{ pipelines_shortname }} {id="setting-compute-resource-quota-for-openshift-pipelines"}
{%- set context = "setting-compute-resource-quota-for-openshift-pipelines" %}

A `ResourceQuota` object in {{ pipelines_title }} controls the total resource consumption per namespace. You can use it to limit the quantity of objects created in a namespace, based on the type of the object. In addition, you can specify a compute resource quota to restrict the total amount of compute resources consumed in a namespace.

However, you might want to limit the amount of compute resources consumed by pods resulting from a pipeline run, rather than setting quotas for the entire namespace. Currently, {{ pipelines_title }} does not enable you to directly specify the compute resource quota for a pipeline.

{% leveloffset +1 %}{% include "./modules/op-alternative-approaches-compute-resource-quota-pipelines.md" %}{% endleveloffset %}


:::note

When using {{ pipelines_title }} in a namespace configured with a `ResourceQuota` object, the pods resulting from task runs and pipeline runs might fail with an error, such as: `failed quota: <quota name> must specify cpu, memory`.

To avoid this error, do any one of the following:

*   (Recommended) Specify a limit range for the namespace.
*   Explicitly define requests and limits for all containers.

For more information, refer to the [issue](https://issues.redhat.com/browse/SRVKP-1801) and the [resolution](https://access.redhat.com/solutions/2841971).

:::


If your use case is not addressed by these approaches, you can implement a workaround by using a resource quota for a priority class.

{% leveloffset +1 %}{% include "./modules/op-specifying-pipelines-resource-quota-using-priority-class.md" %}{% endleveloffset %}

## Additional resources {id="additional-resources_setting-compute-resource-quota-for-pipelines" ._additional-resources}

*   [Restrict resource consumption with limit ranges](/nodes/clusters/nodes-cluster-limit-ranges#nodes-cluster-limit-ranges)
*   [Resource quotas in Kubernetes](https://kubernetes.io/docs/concepts/policy/resource-quotas/)
*   [Limit ranges in Kubernetes](https://kubernetes.io/docs/concepts/policy/limit-range/)
*   [Resource requests and limits in Kubernetes](https://kubernetes.io/docs/concepts/workloads/pods/init-containers/#resources)