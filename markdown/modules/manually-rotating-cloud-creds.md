{% if context == "changing-cloud-credentials-configuration" %}
{%- set post_install = true -%}
{% endif %}
{% if context == "cco-mode-mint" %}
{%- set mint = true -%}
{% endif %}
{% if context == "cco-mode-passthrough" %}
{%- set passthrough = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
{%- if post_install %}
# Rotating cloud provider credentials manually {id="manually-rotating-cloud-creds_{{ context }}"}
{% endif %}
{% if not post_install %}
# Maintaining cloud provider credentials {id="_maintaining_cloud_provider_credentials"}
{% endif %}

If your cloud provider credentials are changed for any reason, you must manually update the secret that the Cloud Credential Operator (CCO) uses to manage cloud provider credentials. {._abstract}

The process for rotating cloud credentials depends on the mode that the CCO is configured to use. After you rotate credentials for a cluster that is using mint mode, you must manually remove the component credentials that were created by the removed credential.

**Prerequisites**

*   Your cluster is installed on a platform that supports rotating cloud credentials manually with the CCO mode that you are using:

{% if not passthrough %}
    *   For mint mode, Amazon Web Services (AWS) and {{ gcp_first }} are supported.
{% endif %}

{% if not mint %}
    *   For passthrough mode, Amazon Web Services (AWS), Microsoft Azure, {{ gcp_first }}, {{ rh_openstack_first }}, and VMware vSphere are supported.
{% endif %}
*   You have changed the credentials that are used to interface with your cloud provider.
*   The new credentials have sufficient permissions for the mode CCO is configured to use in your cluster.

**Procedure**

1.  In the **Administrator** perspective of the web console, navigate to **Workloads** -> **Secrets**.
1.  In the table on the **Secrets** page, find the root secret for your cloud provider.
<table>
<thead>
<tr>
  <th>Platform</th>
  <th>Secret name</th>
</tr>
</thead>
<tbody>
<tr>
  <td>AWS</td>
  <td><code>aws-creds</code></td>
</tr>
<tr>
  {% if not mint %}<td>Azure</td>{% endif %}
  {% if not mint %}<td><code>azure-credentials</code></td>{% endif %}
</tr>
<tr>
  <td>{{ gcp_short }}</td>
  <td><code>gcp-credentials</code></td>
</tr>
<tr>
  {% if not mint %}<td>{{ rh_openstack }}</td>{% endif %}
  {% if not mint %}<td><code>openstack-credentials</code></td>{% endif %}
</tr>
<tr>
  {% if not mint %}<td>VMware vSphere</td>{% endif %}
  {% if not mint %}<td><code>vsphere-creds</code></td>{% endif %}
</tr>
</tbody>
</table>
1.  Click the Options menu {{ kebab }} in the same row as the secret and select **Edit Secret**.
1.  Record the contents of the **Value** field or fields. You can use this information to verify that the value is different after updating the credentials.
1.  Update the text in the **Value** field or fields with the new authentication information for your cloud provider, and then click **Save**.

{% if not mint %}
1.  If you are updating the credentials for a vSphere cluster that does not have the vSphere CSI Driver Operator enabled, you must force a rollout of the Kubernetes controller manager to apply the updated credentials.

    :::note

    If the vSphere CSI Driver Operator is enabled, this step is not required.
    
    :::


    To apply the updated vSphere credentials, log in to the {{ product_title }} CLI as a user with the `cluster-admin` role and run the following command:
    ```terminal
    $ oc patch kubecontrollermanager cluster \
      -p='{"spec": {"forceRedeploymentReason": "recovery-'"$( date )"'"}}' \
      --type=merge
    ```

    While the credentials are rolling out, the status of the Kubernetes Controller Manager Operator reports `Progressing=true`. To view the status, run the following command:
    ```terminal
    $ oc get co kube-controller-manager
    ```
{% endif %}

{% if post_install %}
1.  If the CCO for your cluster is configured to use mint mode, delete each component secret that is referenced by the individual `CredentialsRequest` objects.
{% endif %}
{% if mint %}
1.  Delete each component secret that is referenced by the individual `CredentialsRequest` objects.
{% endif %}

{% if not passthrough %}
    1.  Log in to the {{ product_title }} CLI as a user with the `cluster-admin` role.
    1.  Get the names and namespaces of all referenced component secrets:
        ```terminal
        $ oc -n openshift-cloud-credential-operator get CredentialsRequest \
          -o json | jq -r '.items[] | select (.spec.providerSpec.kind=="<provider_spec>") | .spec.secretRef'
        ```

        where `<provider_spec>` is the corresponding value for your cloud provider:
        *   AWS: `AWSProviderSpec`
        *   {{ gcp_short }}: `GCPProviderSpec`

        The following example is partial output for the command on an {{ aws_short }} cluster:
        ```json
        {
          "name": "ebs-cloud-credentials",
          "namespace": "openshift-cluster-csi-drivers"
        }
        {
          "name": "cloud-credential-operator-iam-ro-creds",
          "namespace": "openshift-cloud-credential-operator"
        }
        ```
    1.  Delete each of the referenced component secrets:
        ```terminal
        $ oc delete secret <secret_name> \//<1>
          -n <secret_namespace> (2)
        ```

        where:

        `<secret_name>`
        :   Specifies the name of a secret.

        `<secret_namespace>`
        :   Specifies the namespace that contains the secret.

        The following example is a command to delete an AWS secret:
        ```terminal
        $ oc delete secret ebs-cloud-credentials -n openshift-cluster-csi-drivers
        ```

        You do not need to manually delete the credentials from your provider console. Deleting the referenced component secrets will cause the CCO to delete the existing credentials from the platform and create new ones.
{% endif %}

**Verification**

1.  In the **Administrator** perspective of the web console, navigate to **Workloads** -> **Secrets**.
1.  Verify that the contents of the **Value** field or fields have changed.

{% if context == "changing-cloud-credentials-configuration" %}
{%- set post_install = false -%}
{% endif %}
{% if context == "cco-mode-mint" %}
{%- set mint = false -%}
{% endif %}
{% if context == "cco-mode-passthrough" %}
{%- set passthrough = false -%}
{% endif %}