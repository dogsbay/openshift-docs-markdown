{%- set _mod_docs_content_type = "CONCEPT" %}
{%- if not (openshift_dedicated or openshift_rosa) %}
# GPUs and CSPs {id="nvidia-gpu-csps_{{ context }}"}
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
# GPUs and {{ product_title }} {id="_gpus_and_product_title"}
{% endif %}

{%- if not (openshift_dedicated or openshift_rosa) %}
You can deploy {{ product_title }} to one of the major cloud service providers (CSPs): {{ aws_first }}, {{ gcp_full }}, or Microsoft Azure. {._abstract}

Two modes of operation are available: a fully managed deployment and a self-managed deployment.

*   In a fully managed deployment, everything is automated by Red&#160;Hat in collaboration with CSP. 
You can request an {{ product_title }} instance through the CSP web console, and the cluster is automatically created and fully managed by Red&#160;Hat. 
Red Hat manages infrastructure operations, including node failure recovery and environment maintenance.
Red&#160;Hat is fully responsible for maintaining the uptime of the cluster.
The fully managed services are available on {{ aws_short }}, {{ azure_short }}, and {{ gcp_short }}. 
For {{ aws_short }}, the {{ product_title }} service is called (Red&#160;Hat {{ product_title }} Service on AWS). 
For Azure, the service is called Azure Red&#160;Hat OpenShift. 
For {{ gcp_short }}, the service is called OpenShift Dedicated on {{ gcp_short }}.
*   In a self-managed deployment, you are responsible for instantiating and maintaining the {{ product_title }} cluster. 
Red&#160;Hat provides the {{ product_title }} install utility to support the deployment of the {{ product_title }} cluster in this case. The self-managed services are available globally to all CSPs.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
You can deploy {{ product_title }} on NVIDIA GPU instance types.
{% endif %}


:::important

The compute instance must be a GPU-accelerated compute instance. Additionally, the GPU type must match the list of supported GPUs from NVIDIA AI Enterprise. For example, T4, V100, and A100 are part of this list.

:::


You can choose one of the following methods to access the containerized GPUs:

*   GPU passthrough to access and use GPU hardware within a virtual machine (VM).
*   GPU (vGPU) time slicing when the entire GPU is not required.