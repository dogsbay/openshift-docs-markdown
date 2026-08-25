{%- set _mod_docs_content_type = "PROCEDURE" %}
# Connecting an existing distributed tracing Jaeger instance {id="ossm-config-external-jaeger_{{ context }}"}

If you already have an existing {{ JaegerName }} instance in {{ product_title }}, you can configure your `ServiceMeshControlPlane` resource to use that instance for {{ DTShortName }}.


:::important

Starting with {{ SMProductName }} 2.5, {{ JaegerName }} and {{ es_op }} are deprecated and will be removed in a future release. Red&#160;Hat will provide bug fixes and support for these features during the current release lifecycle, but these features will no longer receive enhancements and will be removed. As an alternative to {{ JaegerName }}, you can use {{ TempoName }} instead.

:::


**Prerequisites**

*   {{ DTProductName }} instance installed and configured.

**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** -> **Installed Operators**.
1.  Click the **Project** menu and select the project where you installed the {{ SMProductShortName }} control plane, for example **istio-system**.
1.  Click the {{ SMProductName }} Operator. In the **Istio Service Mesh Control Plane** column, click the name of your `ServiceMeshControlPlane` resource, for example `basic`.
1.  Add the name of your {{ JaegerShortName }} instance to the `ServiceMeshControlPlane`.
    1.  Click the **YAML** tab.
    1.  Add the name of your {{ JaegerShortName }} instance to `spec.addons.jaeger.name` in your `ServiceMeshControlPlane` resource. In the following example, `distr-tracing-production` is the name of the {{ JaegerShortName }} instance.
        ```yaml title="Example distributed tracing configuration"
        spec:
          addons:
            jaeger:
              name: distr-tracing-production
        ```
    1.  Click **Save**.
1.  Click **Reload** to verify the `ServiceMeshControlPlane` resource was configured correctly.