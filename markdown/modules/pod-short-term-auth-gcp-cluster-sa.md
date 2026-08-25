{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating an {{ product_title }} service account for {{ gcp_short }} {id="pod-short-term-auth-gcp-cluster-sa_{{ context }}"}

You create an {{ product_title }} service account and annotate it to impersonate a {{ gcp_short }} service account. {._abstract}

**Prerequisites**

*   Your {{ gcp_short }} cluster uses {{ gcp_wid_short }}.
*   You have created a federated {{ gcp_short }} service account.
*   You have access to the {{ oc_first }} as a user with the `cluster-admin` role.
*   You have access to the {{ gcp_full }} CLI (`gcloud`) as a user with privileges to manage Identity and Access Management (IAM) and workload identity configurations.

**Procedure**

1.  Create an {{ product_title }} service account to use for {{ gcp_wid_short }} pod authentication by running the following command:
    ```terminal
    $ oc create serviceaccount <service_account_name>
    ```
1.  Annotate the service account with the identity provider and {{ gcp_short }} service account to impersonate by running the following command:
    ```terminal
    $ oc patch serviceaccount <service_account_name> -p '{"metadata": {"annotations": {"cloud.google.com/workload-identity-provider": "projects/<project_number>/locations/global/workloadIdentityPools/<identity_pool>/providers/<identity_provider>"}}}'
    ```

    Replace `<project_number>`, `<identity_pool>`, and `<identity_provider>` with the values for your configuration.

    :::note

    For `<project_number>`, specify the {{ gcp_full }} project number, not the project ID.
    
    :::

1.  Annotate the service account with the email address for the {{ gcp_short }} service account by running the following command:
    ```terminal
    $ oc patch serviceaccount <service_account_name> -p '{"metadata": {"annotations": {"cloud.google.com/service-account-email": "<service_account_email>"}}}'
    ```

    Replace `<service_account_email>` with the email address for the {{ gcp_short }} service account.

    :::tip

    {{ gcp_short }} service account email addresses typically use the format `<service_account_name>@<project_id>.iam.gserviceaccount.com`
    
    :::

1.  Annotate the service account to use the `direct` external credentials configuration injection mode by running the following command:
    ```terminal
    $ oc patch serviceaccount <service_account_name> -p '{"metadata": {"annotations": {"cloud.google.com/injection-mode": "direct"}}}'
    ```

    In this mode, the Workload Identity Federation webhook controller directly generates the {{ gcp_short }} external credentials configuration and injects them into the pod.
1.  Use the {{ gcp_full }} CLI (`gcloud`) to specify the permissions for the workload by running the following command:
    ```terminal
    $ gcloud projects add-iam-policy-binding <project_id> --member "<service_account_email>" --role "projects/<project_id>/roles/<role_for_workload_permissions>"
    ```

    Replace `<role_for_workload_permissions>` with the role for the workload.
    Specify a role that grants the permissions that your workload requires.

**Verification**

*   To verify the service account configuration, inspect the `ServiceAccount` manifest by running the following command:
    ```terminal
    $ oc get serviceaccount <service_account_name>
    ```

    In the following example, the `service-a/app-x` {{ product_title }} service account can impersonate a {{ gcp_short }} service account called `app-x`:
    ```yaml title="Example output"
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: app-x
      namespace: service-a
      annotations:
        cloud.google.com/workload-identity-provider: "projects/<project_number>/locations/global/workloadIdentityPools/<identity_pool>/providers/<identity_provider>"
        cloud.google.com/service-account-email: "app-x@project.iam.googleapis.com"
        cloud.google.com/audience: "sts.googleapis.com"
        cloud.google.com/token-expiration: "86400"
        cloud.google.com/gcloud-run-as-user: "1000"
        cloud.google.com/injection-mode: "direct"
    ```

    where:

    `metadata.annotations.cloud.google.com/workload-identity-provider`
    :   Specifies the workload identity provider for the service account of the cluster.

    `metadata.annotations.cloud.google.com/audience`
    :   Specifies the allowed audience for the workload identity provider.

    `metadata.annotations.cloud.google.com/token-expiration`
    :   Specifies the token expiration time period in seconds.

    `metadata.annotations.cloud.google.com/injection-mode`
    :   Specifies the `direct` external credentials configuration injection mode.