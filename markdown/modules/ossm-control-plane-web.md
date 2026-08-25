{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deploying the {{ SMProductShortName }} control plane from the web console {id="ossm-control-plane-deploy-operatorhub_{{ context }}"}

You can deploy a basic `ServiceMeshControlPlane` by using the web console.  In this example, `istio-system` is the name of the {{ SMProductShortName }} control plane project.

**Prerequisites**

*   The {{ SMProductName }} Operator must be installed.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You are logged in to the {{ product_title }} web console as `cluster-admin`.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You are logged in to the {{ product_title }} web console as a user with the `dedicated-admin` role.
{%- endif %}

**Procedure**

1.  Log in to the {{ product_title }} web console as a user with the `cluster-admin` role. If you use {{ product_dedicated }}, you must have an account with the `dedicated-admin` role.
1.  Create a project named `istio-system`.
    1.  Navigate to **Home** → **Projects**.
    1.  Click **Create Project**.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedcated) %}
    1.  In the **Name** field, enter `istio-system`. The `ServiceMeshControlPlane` resource must be installed in a project that is separate from your microservices and Operators.

        These steps use `istio-system` as an example, but you can deploy your {{ SMProductShortName }} control plane in any project as long as it is separate from the project that contains your services.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedcated %}
    1.  In the **Name** field, enter `istio-system`. The `ServiceMeshControlPlane` resource must be installed in the `istio-system` project, separate from your microservices and Operators.
{%- endif %}
    1.  Click **Create**.
1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  Click the {{ SMProductName }} Operator, then click **Istio Service Mesh Control Plane**.
1.  On the **Istio Service Mesh Control Plane** tab, click **Create ServiceMeshControlPlane**.
    1.  Accept the default {{ SMProductShortName }} control plane version to take advantage of the features available in the most current version of the product. The version of the control plane determines the features available regardless of the version of the Operator.

{% if openshift_rosa or openshift_rosa_hcp %}
    1.  Add the `spec.security.identity.type.ThirdParty` field, required by {{ product_rosa }}.
{% endif %}
{% if openshift_dedicated %}
    1.  Add the `spec.security.identity.type.ThirdParty` field, required by {{ product_dedicated }}.
{% endif %}
    1.  Click **Create**.

    The Operator creates pods, services, and {{ SMProductShortName }} control plane components based on your configuration parameters. You can configure `ServiceMeshControlPlane` settings at a later time.

**Verification**

*   To verify the control plane installed correctly, click the **Istio Service Mesh Control Plane** tab.
    1.  Click the name of the new control plane.
    1.  Click the **Resources** tab to see the {{ SMProductName }} control plane resources the Operator created and configured.