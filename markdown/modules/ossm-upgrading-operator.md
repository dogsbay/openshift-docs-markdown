{%- set _mod_docs_content_type = "CONCEPT" %}
# Upgrading the Operators {id="ossm-upgrading-operator_{{ context }}"}

In order to keep your {{ SMProductShortName }} patched with the latest security fixes, bug fixes, and software updates, you must keep your Operators updated. You initiate patch updates by upgrading your Operators.


:::important

The version of the Operator does **not** determine the version of your service mesh. The version of your deployed {{ SMProductShortName }} control plane determines your version of Service Mesh.

:::


Because the {{ SMProductName }} Operator supports multiple versions of the {{ SMProductShortName }} control plane, updating the {{ SMProductName }} Operator does _not_ update the `spec.version` value of your deployed `ServiceMeshControlPlane`. Also note that the `spec.version` value is a two digit number, for example 2.2, and that patch updates, for example 2.2.1, are not reflected in the SMCP version value.

Operator Lifecycle Manager (OLM) controls the installation, upgrade, and role-based access control (RBAC) of Operators in a cluster. The OLM runs by default in {{ product_title }}. OLM queries for available Operators as well as upgrades for installed Operators.

Whether or not you have to take action to upgrade your Operators depends on the settings you selected when installing them. When you installed each of your Operators, you selected an **Update Channel** and an **Approval Strategy**. The combination of these two settings determine when and how your Operators are updated.

**Interaction of Update Channel and Approval Strategy**

<table>
<tbody>
<tr>
  <td>Versioned channel</td>
  <td>"Stable" or "Preview" Channel</td>
  <td><strong>Automatic</strong></td>
</tr>
<tr>
  <td>Automatically updates the Operator for minor and patch releases for that version only. Will not automatically update to the next major version (that is, from version 2.0 to 3.0). Manual change to Operator subscription required to update to the next major version.</td>
  <td>Automatically updates Operator for all major, minor, and patch releases.</td>
  <td><strong>Manual</strong></td>
</tr>
<tr>
  <td>Manual updates required for minor and patch releases for the specified version. Manual change to Operator subscription required to update to the next major version.</td>
  <td>Manual updates required for all major, minor, and patch releases.</td>
</tr>
</tbody>
</table>

When you update your {{ SMProductName }} Operator the Operator Lifecycle Manager (OLM) removes the old Operator pod and starts a new pod. Once the new Operator pod starts, the reconciliation process checks the `ServiceMeshControlPlane` (SMCP), and if there are updated container images available for any of the {{ SMProductShortName }} control plane components, it replaces those {{ SMProductShortName }} control plane pods with ones that use the new container images.

When you upgrade the Kiali and {{ JaegerName }} Operators, the OLM reconciliation process scans the cluster and upgrades the managed instances to the version of the new Operator. For example, if you update the {{ JaegerName }} Operator from version 1.30.2 to version 1.34.1, the Operator scans for running instances of {{ JaegerShortName }} and upgrades them to 1.34.1 as well.

To stay on a particular patch version of {{ SMProductName }}, you would need to disable automatic updates and remain on that specific version of the Operator.