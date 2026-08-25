{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ lcao }} by using the CLI {id="ibi-install-lcao-cli_{{ context }}"}

You can use the OpenShift CLI (`oc`) to install the {{ lcao }} from the 4.15 Operator catalog.

**Prerequisites**

*   Install the OpenShift CLI (`oc`).
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a namespace for the {{ lcao }}:
    ```yaml title="Example lcao-namespace.yaml file"
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-lifecycle-agent
      annotations:
        workload.openshift.io/allowed: management
    ```
    1.  Create the `Namespace` CR:
        ```terminal
        $ oc create -f lcao-namespace.yaml
        ```
1.  Create an Operator group for the {{ lcao }}.
    ```yaml title="Example lcao-operatorgroup.yaml file"
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: openshift-lifecycle-agent
      namespace: openshift-lifecycle-agent
    spec:
      targetNamespaces:
      - openshift-lifecycle-agent
    ```
    1.  Create the `OperatorGroup` CR:
        ```terminal
        $ oc create -f lcao-operatorgroup.yaml
        ```
1.  Create a `Subscription` CR:
    1.  Define the `Subscription` CR and save the YAML file, for example, `lcao-subscription.yaml`:
        ```yaml title="Example lcao-subscription.yaml file"
        apiVersion: operators.coreos.com/v1
        kind: Subscription
        metadata:
          name: openshift-lifecycle-agent-subscription
          namespace: openshift-lifecycle-agent
        spec:
          channel: "stable"
          name: lifecycle-agent
          source: redhat-operators
          sourceNamespace: openshift-marketplace
        ```
    1.  Create the `Subscription` CR by running the following command:
        ```terminal
        $ oc create -f lcao-subscription.yaml
        ```

**Verification**

1.  Verify that the installation succeeded by inspecting the CSV resource:
    ```terminal
    $ oc get csv -n openshift-lifecycle-agent
    ```
    ```terminal title="Example output"
    NAME                              DISPLAY                     VERSION               REPLACES                           PHASE
    lifecycle-agent.v{{ product_version }}.0           Openshift Lifecycle Agent   {{ product_version }}.0                Succeeded
    ```
1.  Verify that the {{ lcao }} is up and running:
    ```terminal
    $ oc get deploy -n openshift-lifecycle-agent
    ```

    ```terminal title="Example output"
    NAME                                 READY   UP-TO-DATE   AVAILABLE   AGE
    lifecycle-agent-controller-manager   1/1     1            1           14s
    ```