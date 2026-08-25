{%- set _mod_docs_content_type = "CONCEPT" %}
# Specifying Kiali configuration in a Kiali custom resource {id="ossm-specifying-external-kiali_{{ context }}"}

You can fully customize your Kiali deployment by configuring Kiali in the Kiali custom resource (CR) rather than in the `ServiceMeshControlPlane` (SMCP) resource. This configuration is sometimes called an "external Kiali" since the configuration is specified outside of the SMCP.


:::note

You must deploy the `ServiceMeshControlPlane` and Kiali custom resources in the same namespace. For example, `istio-system`.

:::


You can configure and deploy a Kiali instance and then specify the `name` of the Kiali resource as the value for `spec.addons.kiali.name` in the SMCP resource. If a Kiali CR matching the value of `name` exists, the {{ SMProductShortName }} control plane will use the existing installation. This approach lets you fully customize your Kiali configuration.