{% if context == "configuring-iam-ibm-cloud" %}
{%- set ibm_cloud = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Alternatives to storing administrator-level secrets in the kube-system project {id="alternatives-to-storing-admin-secrets-in-kube-system_{{ context }}"}

The Cloud Credential Operator (CCO) manages cloud provider credentials as Kubernetes custom resource definitions (CRDs). You can configure the CCO to suit the security requirements of your organization by setting different values for the `credentialsMode` parameter in the `install-config.yaml` file. {._abstract}

{% if ibm_cloud %}
Storing an administrator-level credential secret in the cluster `kube-system` project is not supported for {{ ibm_cloud_name }}; therefore, you must set the `credentialsMode` parameter for the CCO to `Manual` when installing {{ product_title }} and manage your cloud credentials manually.

Using manual mode allows each cluster component to have only the permissions it requires, without storing an administrator-level credential in the cluster. You can also use this mode if your environment does not have connectivity to the cloud provider public IAM endpoint. However, you must manually reconcile permissions with new release images for every upgrade. You must also manually supply credentials for every component that requests them.
{% endif %}

{% if context == "configuring-iam-ibm-cloud" %}
{%- set ibm_cloud = "" -%}
{% endif %}