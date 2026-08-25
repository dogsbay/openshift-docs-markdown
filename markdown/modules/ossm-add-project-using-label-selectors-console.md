{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding a project to the mesh using label selectors with the web console {id="ossm-adding-project-using-label-selectors-console_{{ context }}"}

You can use labels selectors to add a project to the {{ SMProductShortName }} with the {{ product_title }} web console.

**Prerequisites**

*   You have installed the {{ SMProductName }} Operator.
*   The deployment has an existing `ServiceMeshMemberRoll` resource.
{%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
*   You are logged in to the {{ product_title }} web console as `cluster-admin`.
{%- endif %}
{%- if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
*   You are logged in to the {{ product_title }} web console as a user with the `dedicated-admin` role.
{%- endif %}

**Procedure**

1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  Click the **Project** menu, and from the drop-down list, select the project where your `ServiceMeshMemberRoll` resource is deployed. For example, **istio-system**.
1.  Click the {{ SMProductName }} Operator.
1.  Click the **Istio Service Mesh Member Roll** tab.
1.  Click **Create ServiceMeshMember Roll**.
1.  Accept the default name for the `ServiceMeshMemberRoll`.
1.  In the **Labels** field, enter key-value pairs to define the labels that identify which namespaces to include in the service mesh. If a project namespace has either label specified by the selectors, then the project namespace is included in the service mesh. You do not need to include both labels.

    For example, entering `mykey=myvalue` includes all namespaces with this label as part of the mesh. When the selector identifies a match, the project namespace is added to the service mesh.

    Entering `myotherkey=myothervalue` includes all namespaces with this label as part of the mesh. When the selector identifies a match, the project namespace is added to the service mesh.
1.  Click **Create**.