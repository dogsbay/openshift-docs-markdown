{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a service account in your project {id="creating-a-service-account-in-your-project_{{ context }}"}

To allow workloads in a project to assume an AWS Identity and Access Management (IAM) role, you can create a service account configured with your IAM role in that project. By using a service account, you can enable any of the workloads in that project to use the same role by assigning a service account to that workload. {._abstract}

**Prerequisites**

*   You have created an AWS IAM role for your service account. For more information, see _Setting up an AWS IAM role for a service account_.
*   You have access to a {{ product_title }} with AWS Security Token Service (STS) cluster. Admin-level user privileges are not required.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  In your {{ product_title }} cluster, create a project:
    ```terminal
    $ oc new-project <project_name>
    ```

    Replace `<project_name>` with the name of your project. The name must match the project name that you specified in your AWS IAM role configuration.

    :::note

    You are automatically switched to the project when it is created.
    
    :::

1.  Create a file named `test-service-account.yaml` with the following service account configuration:
    ```yaml
    apiVersion: v1
    kind: ServiceAccount
    metadata:
      name: <service_account_name>
      namespace: <project_name>
      annotations:
        eks.amazonaws.com/role-arn: "<aws_iam_role_arn>"
    ```

    where

    `<service_account_name>`
    :   Replace `<service_account_name>` with the name of your service account. The name must match the service account name that you specified in your AWS IAM role configuration.

    `<project_name>`
    :   Replace `<project_name>` with the name of your project. The name must match the project name that you specified in your AWS IAM role configuration.

    `<aws_iam_role_arn>`
    :   Specifies the ARN of the AWS IAM role that the service account assumes for use within your pod. Replace `<aws_iam_role_arn>` with the ARN for the AWS IAM role that you created for your service account. The format of the role ARN is `arn:aws:iam::<aws_account_id>:role/<aws_iam_role_name>`.

1.  Create the service account in your project:
    ```terminal
    $ oc create -f test-service-account.yaml
    ```
    ```terminal title="Example output"
    serviceaccount/<service_account_name> created
    ```
1.  Review the details of the service account:
    ```terminal
    $ oc describe serviceaccount <service_account_name>
    ```

    Replace `<service_account_name>` with the name of your service account.

    The output is similar to the following example:
    ```terminal
    Name:                <service_account_name>
    Namespace:           <project_name> (2)
    Labels:              <none>
    Annotations:         eks.amazonaws.com/role-arn: <aws_iam_role_arn> (3)
    Image pull secrets:  <service_account_name>-dockercfg-rnjkq
    Mountable secrets:   <service_account_name>-dockercfg-rnjkq
    Tokens:              <service_account_name>-token-4gbjp
    Events:              <none>
    ```

    where

    `<service_account_name>`
    :   Specifies the name of the service account.

    `<project_name>`
    :   Specifies the project that contains the service account.

    `<aws_iam_role_arn>`
    :   Lists the annotation for the ARN of the AWS IAM role that the service account assumes.