{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing {{ support_log_gather }} by using the CLI {id="support-log-gather-install-cli_{{ context }}"}

To enable automated log collection for support cases, you can install {{ support_log_gather }} from the command-line interface (CLI). {._abstract}

{%- set FeatureName = "Support Log Gather" %}
{% include "./snippets/technology-preview.md" %}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.

**Procedure**

1.  Create a new project named `must-gather-operator` by running the following command:
    ```terminal
    $ oc new-project must-gather-operator
    ```
1.  Create an `OperatorGroup` object:
    1.  Create a YAML file, for example, `operatorGroup.yaml`, that defines the `OperatorGroup` object:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: must-gather-operator
          namespace: must-gather-operator
        spec: {}
        ```
    1.  Create the `OperatorGroup` object by running the following command:
        ```terminal
        $ oc create -f operatorGroup.yaml
        ```
1.  Create a `Subscription` object:
    1.  Create a YAML file, for example, `subscription.yaml`, that defines the `Subscription` object:
        ```yaml
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: support-log-gather-operator
          namespace: must-gather-operator
        spec:
          channel: tech-preview
          name: support-log-gather-operator
          source: redhat-operators
          sourceNamespace: openshift-marketplace
          installPlanApproval: Automatic
        ```
    1.  Create the `Subscription` object by running the following command:
        ```terminal
        $ oc create -f subscription.yaml
        ```

**Verification**

1.  Verify the status of the pods in the Operator namespace by running the following command.
    ```terminal
    $ oc get pods
    ```
    ```terminal title="Example output"
    NAME                                                              READY   STATUS      RESTARTS   AGE
    must-gather-operator-657fc74d64-2gg2w                             1/1     Running     0          13m
    ```

    The status of all the pods must be `Running`.
1.  Verify that the subscription is created by running the following command:
    ```terminal
    $ oc get subscription -n must-gather-operator
    ```
    ```terminal title="Example output"
    NAME                          PACKAGE                       SOURCE            CHANNEL
    support-log-gather-operator   support-log-gather-operator   redhat-operators  tech-preview
    ```
1.  Verify that the Operator is installed by running the following command:
    ```terminal
    $ oc get csv -n must-gather-operator
    ```
    ```terminal title="Example output"
    NAME                                  DISPLAY                VERSION   REPLACES   PHASE
    support-log-gather-operator.v4.22.0   support log gather     4.22.0               Succeeded
    ```