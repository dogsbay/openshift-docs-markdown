{%- set _mod_docs_content_type = "REFERENCE" %}
# {{ SMProductName }} version 2.6.0 {id="ossm-release-2-6-0_{{ context }}"}

This release of {{ SMProductName }} updates the {{ SMProductName }} Operator version to 2.6.0, and includes the following `ServiceMeshControlPlane` resource version updates: 2.6.0, 2.5.3 and 2.4.9.
This release adds new features, addresses Common Vulnerabilities and Exposures (CVEs), and is supported on {{ product_title }} 4.14 and later.

This release ends maintenance support for {{ SMProductName }} version 2.3. If you are using {{ SMProductShortName }} version 2.3, you should update to a supported version.


:::important

{{ SMProductName }} is designed for FIPS. {{ SMProductShortName }} uses the RHEL cryptographic libraries that have been submitted to NIST for FIPS 140-2/140-3 Validation on the x86_64, ppc64le, and s390x architectures.
For more information about the NIST validation program, see [Cryptographic Module Validation Program](https://csrc.nist.gov/Projects/cryptographic-module-validation-program/validated-modules). For the latest NIST status for the individual versions of RHEL cryptographic libraries that have been submitted for validation, see [Compliance Activities and Government Standards](https://access.redhat.com/articles/compliance_activities_and_gov_standards#fips-140-2-and-fips-140-3-2).

:::


## Component updates {id="component-versions-ossm-2-6-0_{{ context }}"}

| Component | Version |
| --- | --- |
| Istio | 1.20.8 |
| Envoy Proxy | 1.28.5 |
| Kiali | 1.73.9 |

## Istio 1.20 support {id="istio-1-20-support-ossm-2-6-0_{{ context }}"}

Service Mesh 2.6 is based on Istio 1.20, which provides new features and product enhancements, including:

*   Native sidecars are supported on {{ product_title }} 4.16 or later.
    ```yaml title="Example ServiceMeshControlPlane resource"
    apiVersion: maistra.io/v2
    kind: ServiceMeshControlPlane
    metadata:
      name: basic
    spec:
      runtime:
        components:
          pilot:
            container:
              env:
                ENABLE_NATIVE_SIDECARS: "true"
    ```
*   Traffic mirroring in Istio 1.20 now supports multiple destinations. This feature enables the mirroring of traffic to various endpoints, allowing for simultaneous observation across different service versions or configurations.

While {{ SMProductName }} supports many Istio 1.20 features, the following exceptions should be noted:

*   Ambient mesh is not supported
*   QuickAssist Technology (QAT) PrivateKeyProvider in Istio is not supported

## Istio and Kiali bundle image name changes {id="istio-kiali-bundle-image-name-changes-ossm-2-6-0_{{ context }}"}
This release updates the Istio bundle image name and the Kiali bundle image name to better align with Red Hat naming conventions.

*   Istio bundle image name: `openshift-service-mesh/istio-operator-bundle`
*   Kiali bundle image name: `openshift-service-mesh/kiali-operator-bundle`

## Integration with {{ TempoName }} and {{ OTELName }} {id="integration-otel-tempo-ossm-2-6-0_{{ context }}"}
This release introduces a generally available integration of the tracing extension provider(s) {{ TempoName }} and {{ OTELName }}.

You can expose tracing data to the {{ TempoName }} by appending a named element and the `opentelemetry` provider to the `spec.meshConfig.extensionProviders` specification in the `ServiceMehControlPlane` resource. Then, a telemetry custom resource configures Istio proxies to collect trace spans and send them to the OpenTelemetry Collector endpoint.

You can create a {{ OTELName }} instance in a mesh namespace and configure it to send tracing data to a tracing platform backend service.

## {{ JaegerName }} default setting change {id="jaeger-default-setting-change-ossm-2-6-0_{{ context }}"}
This release disables {{ JaegerName }} by default for new instances of the `ServiceMeshControlPlane` resource.

When updating existing instances of the `ServiceMeshControlPlane` resource to {{ SMProductName }} version 2.6, {{ JaegerShortName }} remains enabled by default.

{{ SMProductName }} 2.6 is the last release that includes support for {{ JaegerName }} and {{ es_op }}. Both {{ JaegerShortName }} and {{ es_op }} will be removed in the next release. If you are currently using {{ JaegerShortName }} and {{ es_op }}, you need to switch to {{ TempoName }} and {{ OTELName }}.

## Gateway API use is generally available for {{ SMProductName }} cluster-wide deployments {id="gateway-api-ga-cluster-wide-deployments-ossm-2-6-0_{{ context }}"}
This release introduces the General Availability for using the Kubernetes Gateway API version 1.0.0 with {{ SMProductName }} 2.6. This API use is limited to {{ SMProductName }}. The Gateway API custom resource definitions (CRDs) are not supported.

Gateway API is now enabled by default if cluster-wide mode is enabled (`spec.mode: ClusterWide`). It can be enabled even if the custom resource definitions (CRDs) are not installed in the cluster.


:::important

Gateway API for multitenant mesh deployments is still in Technology Preview.

:::


Refer to the following table to determine which Gateway API version should be installed with the OpenShift {{ SMProductShortName }} version you are using:

| Service Mesh Version | Istio Version | Gateway API Version | Notes |
| --- | --- | --- | --- |
| 2.6 | 1.20.x | 1.0.0 | N/A |
| 2.5.x | 1.18.x | 0.6.2 | Use the experimental branch because `ReferenceGrand` is missing in v0.6.2. |
| 2.4.x | 1.16.x | 0.5.1 | For multitenant mesh deployment, all Gateway API CRDs must be present. Use the experimental branch. |

You can disable this feature by setting `PILOT_ENABLE_GATEWAY_API` to `false`:

```yaml
apiVersion: maistra.io/v2
kind: ServiceMeshControlPlane
metadata:
  name: basic
spec:
  runtime:
    components:
      pilot:
        container:
          env:
            PILOT_ENABLE_GATEWAY_API: "false"
```

## Fixed issues {id="ossm-fixed-issues-2-6-0_{{ context }}"}

*   [OSSM-6754](https://issues.redhat.com/browse/OSSM-6754) Previously, in {{ product_title }} 4.15, when users navigated to a **Service details** page, clicked the **Service Mesh** tab, and refreshed the page, the **Service Mesh details** page remained stuck on Service Mesh content information, even though the active tab was the default **Details** tab. Now, after a refresh, users can navigate through the different tabs of the **Service details** page without issue.
*   [OSSM-2101](https://issues.redhat.com/browse/OSSM-2101) Previously, the Istio Operator never deleted the `istio-cni-node` DaemonSet and other CNI resources when they were no longer needed. Now, after upgrading the Operator, if there is at least one SMCP installed in the cluster, the Operator reconciles this SMCP, and then deletes all unused CNI installations (even very old CNI versions as early as v2.0).

## Kiali known issues {id="ossm-kiali-known-issues-2-6-0_{{ context }}"}
*   [OSSM-6099](https://issues.redhat.com/browse/OSSM-6099) Installing the OpenShift {{ SMProductShortName }} Console (OSSMC) plugin fails on an IPv6 cluster.

    Workaround: Install the OSSMC plugin on an IPv4 cluster.