{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a secret for AWS CloudWatch with an existing AWS role {id="cluster-logging-collector-log-forward-secret-cloudwatch_{{ context }}"}
If you have an existing role for AWS, you can create a secret for AWS with STS using the `oc create secret --from-literal` command.

**Procedure**

*   In the CLI, enter the following to generate a secret for AWS:
    ```terminal
    $ oc create secret generic cw-sts-secret -n openshift-logging --from-literal=role_arn=arn:aws:iam::123456789012:role/my-role_with-permissions
    ```
    ```yaml title="Example Secret"
    apiVersion: v1
    kind: Secret
    metadata:
      namespace: openshift-logging
      name: my-secret-name
    stringData:
      role_arn: arn:aws:iam::123456789012:role/my-role_with-permissions
    ```