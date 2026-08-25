{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the AWS Load Balancer Operator by using the CLI {id="nw-installing-aws-load-balancer-operator-cli_{{ context }}"}

To deploy the AWS Load Balancer Controller, install the AWS Load Balancer Operator by using the command-line interface (CLI). {._abstract}

**Prerequisites**

*   You are logged in to the {{ product_title }} web console as a user with `cluster-admin` permissions.
*   Your cluster is configured with AWS as the platform type and cloud provider.
*   You have logged into the {{ oc_first }}.

**Procedure**

1.  Create a `Namespace` object:
    1.  Create a YAML file that defines the `Namespace` object:
        ```yaml title="Example namespace.yaml file"
        apiVersion: v1
        kind: Namespace
        metadata:
          name: aws-load-balancer-operator
        # ...
        ```
    1.  Create the `Namespace` object by running the following command:
        ```terminal
        $ oc apply -f namespace.yaml
        ```
1.  Create an `OperatorGroup` object:
    1.  Create a YAML file that defines the `OperatorGroup` object:
        ```yaml title="Example operatorgroup.yaml file"
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: aws-lb-operatorgroup
          namespace: aws-load-balancer-operator
        spec:
          upgradeStrategy: Default
        ```
    1.  Create the `OperatorGroup` object by running the following command:
        ```terminal
        $ oc apply -f operatorgroup.yaml
        ```
1.  Create a `Subscription` object:
    1.  Create a YAML file that defines the `Subscription` object:
        ```yaml title="Example subscription.yaml file"
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: aws-load-balancer-operator
          namespace: aws-load-balancer-operator
        spec:
          channel: stable-v1
          installPlanApproval: Automatic
          name: aws-load-balancer-operator
          source: redhat-operators
          sourceNamespace: openshift-marketplace
        ```
    1.  Create the `Subscription` object by running the following command:
        ```terminal
        $ oc apply -f subscription.yaml
        ```

**Verification**

1.  Get the name of the install plan from the subscription:
    ```terminal
    $ oc -n aws-load-balancer-operator \
      get subscription aws-load-balancer-operator \
      --template='{{.status.installplan.name}}{{"\n"}}'
    ```
1.  Check the status of the install plan:
    ```terminal
    $ oc -n aws-load-balancer-operator \
      get ip <install_plan_name> \
      --template='{{.status.phase}}{{"\n"}}'
    ```

    The output must be `Complete`.