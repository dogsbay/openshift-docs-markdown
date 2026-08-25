{% if context == "operator-reference" %}
{%- set operators = true -%}
{% endif %}
{% if context == "cluster-capabilities" %}
{%- set cluster_caps = true -%}
{% endif %}

{%- set _mod_docs_content_type = "REFERENCE" %}
{% if operators %}
# Cloud Credential Operator {id="cloud-credential-operator_{{ context }}"}
{% endif %}
{% if cluster_caps %}
# Cloud credential capability {id="_cloud_credential_capability"}
{% endif %}

{%- if cluster_caps %}
The Cloud Credential Operator provides features for the `CloudCredential` capability. {._abstract}


:::note

Currently, disabling the `CloudCredential` capability is only supported for bare-metal clusters.

:::

{% endif %}

The Cloud Credential Operator (CCO) manages cloud provider credentials as Kubernetes custom resource definitions (CRDs). The CCO syncs on `CredentialsRequest` custom resources (CRs) to allow {{ product_title }} components to request cloud provider credentials with the specific permissions that are required for the cluster to run.

By setting different values for the `credentialsMode` parameter in the `install-config.yaml` file, the CCO can be configured to operate in several different modes. If no mode is specified, or the `credentialsMode` parameter is set to an empty string (`""`), the CCO operates in its default mode.

{% if operators %}

Project

:   See "openshift-cloud-credential-operator" in the _Additional resources_ section.


CRDs

:   *   `credentialsrequests.cloudcredential.openshift.io`
        *   Scope: Namespaced
        *   CR: `CredentialsRequest`
        *   Validation: Yes

    Configuration objects

:   No configuration required.
{% endif %}

{% if context == "operator-reference" %}
{%- set operators = false -%}
{% endif %}
{% if context == "cluster-capabilities" %}
{%- set cluster_caps = false -%}
{% endif %}