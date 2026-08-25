{%- set _mod_docs_content_type = "PROCEDURE" %}
# Grant token generation permission for the VNC console by using the cluster role {id="virt-grant-token-generation-permission-VNC_{{ context }}"}

As a cluster administrator, you can install a cluster role and bind it to a user or service account to allow access to the endpoint that generates tokens for the VNC console. {._abstract}

**Procedure**

*   Choose to bind the cluster role to either a user or service account.
    *   Run the following command to bind the cluster role to a user:
        ```terminal
        $ kubectl create rolebinding "${ROLE_BINDING_NAME}" --clusterrole="token.kubevirt.io:generate" --user="${USER_NAME}"
        ```
    *   Run the following command to bind the cluster role to a service account:
        ```terminal
        $ kubectl create rolebinding "${ROLE_BINDING_NAME}" --clusterrole="token.kubevirt.io:generate" --serviceaccount="${SERVICE_ACCOUNT_NAME}"
        ```