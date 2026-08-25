{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the control plane for cluster-wide deployment with the web console {id="ossm-deploy-cluster-wide-control-plane-console_{{ context }}"}

You can configure the `ServiceMeshControlPlane` resource for cluster-wide deployment using the {{ product_title }} web console. In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project.

**Prerequisites**

*   The {{ SMProductName }} Operator is installed.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as`cluster-admin`.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{%- endif %}

**Procedure**

1.  Create a project named `istio-system`.
    1.  Navigate to **Home** → **Projects**.
    1.  Click **Create Project**.
    1.  In the **Name** field, enter `istio-system`. The `ServiceMeshControlPlane` resource must be installed in a project that is separate from your microservices and Operators.

        These steps use `istio-system` as an example. You can deploy the {{ SMProductShortName }} control plane to any project as long as it is separate from the project that contains your services.
    1.  Click **Create**.
1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  Click the {{ SMProductName }} Operator, then click **Istio Service Mesh Control Plane**.
1.  On the **Istio Service Mesh Control Plane** tab, click **Create ServiceMeshControlPlane**.
1.  Click **YAML view**. The version of the {{ SMProductShortName }} control plane determines the features available regardless of the version of the Operator.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Modify the `spec.mode` field of the YAML file to specify `ClusterWide`.
    ```yaml title="Example version {{ MaistraVersion }} istio-installation.yaml" {minja}
    apiVersion: maistra.io/v2
    kind: ServiceMeshControlPlane
    metadata:
      name: basic
      namespace: istio-system
    spec:
      version: v{{ MaistraVersion }}
      mode: ClusterWide
    ```
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  Modify the `spec.mode` field and add the `spec.security.identity.type.ThirdParty` field:
    ```yaml title="Example ServiceMeshControlPlane resource" {minja}
    apiVersion: maistra.io/v2
    kind: ServiceMeshControlPlane
    metadata:
      name: basic
      namespace: istio-system
    spec:
      version: v{{ MaistraVersion }}
      mode: ClusterWide (1)
      security:
        identity:
          type: ThirdParty (2)
      tracing:
        type: Jaeger
        sampling: 10000
      policy:
        type: Istiod
      addons:
        grafana:
          enabled: true
        jaeger:
          install:
            storage:
              type: Memory
        kiali:
          enabled: true
        prometheus:
          enabled: true
      telemetry:
        type: Istiod
    ```
    1.  Specifies that the resource is for a cluster-wide deployment.
{%- if openshift_rosa or openshift_rosa_hcp %}
    1.  Specifies a required setting for {{ product_rosa }}. 
{%- endif %}
{%- if openshift_dedicated %}
    1.  Specifies a required setting for {{ product_dedicated }}. 
{%- endif %}
{% endif %}
1.  Click **Create**. The Operator creates pods, services, and {{ SMProductShortName }} control plane components based on your configuration parameters. The operator also creates the `ServiceMeshMemberRoll` if it does not exist as part of the default configuration.

**Verification**

*   To verify that the control plane installed correctly:
    1.  Click the **Istio Service Mesh Control Plane** tab.
    1.  Click the name of the new `ServiceMeshControlPlane` object.
    1.  Click the **Resources** tab to see the {{ SMProductName }} control plane resources that the Operator created and configured.