{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the policy by using form {id="virt-update-node-network-config-form_{{ context }}"}

You can update a `NodeNetworkConfigurationPolicy` object by using the form view in the web console. {._abstract}


:::note

Addition of a VLAN interface using the form is not supported. To add a VLAN interface, you must use YAML to create the policy. Once added, you cannot edit the policy using form.

:::


**Procedure**

1.  Navigate to **Networking** → **NodeNetworkConfigurationPolicy**.
1.  In the **NodeNetworkConfigurationPolicy** page, click the {{ kebab }} icon placed next to the policy you want to edit, and click **Edit**.
1.  Edit the fields that you want to update.
1.  Click **Save**.