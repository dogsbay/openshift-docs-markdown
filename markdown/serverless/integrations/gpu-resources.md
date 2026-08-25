{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using NVIDIA GPU resources with serverless applications {id="gpu-resources"}
{%- set context = "gpu-resources" %}

NVIDIA supports using GPU resources on {{ product_title }}.
See [GPU Operator on OpenShift](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/openshift/contents.html) for more information about setting up GPU resources on {{ product_title }}.

{% leveloffset +1 %}{% include "./modules/serverless-gpu-resources-kn.md" %}{% endleveloffset %}

{% if openshift_enterprise %}
## Additional resources {id="additional-requirements_gpu-resources" ._additional-resources}
*   [Setting resource quotas for extended resources](/applications/quotas/quotas-setting-per-project#quotas-setting-per-project)
{% endif %}