{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the ARN role for the AWS Load Balancer Operator {id="specifying-role-arn-albo-sts_{{ context }}"}

You can configure the Amazon Resource Name (ARN) role for the {{ aws_short }} Load Balancer Operator as an environment variable. You can configure the ARN role by using the CLI. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create the `aws-load-balancer-operator` project by running the following command:
    ```terminal
    $ oc new-project aws-load-balancer-operator
    ```
1.  Create the `OperatorGroup` object by running the following command:
    ```terminal
    $ cat <<EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: aws-load-balancer-operator
      namespace: aws-load-balancer-operator
    spec:
      targetNamespaces: []
    EOF
    ```
1.  Create the `Subscription` object by running the following command:
    ```terminal
    $ cat <<EOF | oc apply -f -
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: aws-load-balancer-operator
      namespace: aws-load-balancer-operator
    spec:
      channel: stable-v1
      name: aws-load-balancer-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
      config:
        env:
        - name: ROLEARN
          value: "<albo_role_arn>"
    EOF
    ```

    where:

    `<albo_role_arn>`
    :   Specifies the ARN role to be used in the `CredentialsRequest` to provision the {{ aws_short }} credentials for the {{ aws_short }} Load Balancer Operator. An example for `<albo_role_arn>` is `arn:aws:iam::<aws_account_number>:role/albo-operator`.

    :::note

    The {{ aws_short }} Load Balancer Operator waits until the secret is created before moving to the `Available` status.
    
    :::