{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ lcao }} by using the CLI {id="cnf-image-based-upgrade-installing-lifecycle-agent-using-cli_{{ context }}"}

You can use the OpenShift CLI (`oc`) to install the {{ lcao }}. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a `Namespace` object YAML file for the {{ lcao }}:
    ```yaml
    apiVersion: v1
    kind: Namespace
    metadata:
      name: openshift-lifecycle-agent
      annotations:
        workload.openshift.io/allowed: management
    ```
    1.  Create the `Namespace` CR by running the following command:
        ```terminal
        $ oc create -f <namespace_filename>.yaml
        ```
1.  Create an `OperatorGroup` object YAML file for the {{ lcao }}:
    ```yaml
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: openshift-lifecycle-agent
      namespace: openshift-lifecycle-agent
    spec:
      targetNamespaces:
      - openshift-lifecycle-agent
    ```
    1.  Create the `OperatorGroup` CR by running the following command:
        ```terminal
        $ oc create -f <operatorgroup_filename>.yaml
        ```
1.  Create a `Subscription` CR for the {{ lcao }}:
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
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
        $ oc create -f <subscription_filename>.yaml
        ```

**Verification**

1.  To verify that the installation succeeded, inspect the CSV resource by running the following command:
    ```terminal
    $ oc get csv -n openshift-lifecycle-agent
    ```

    Example output:
    ```terminal {minja}
    NAME                              DISPLAY                     VERSION               REPLACES                           PHASE
    lifecycle-agent.v{{ product_version }}.0           Openshift Lifecycle Agent   {{ product_version }}.0                Succeeded
    ```
1.  Verify that the {{ lcao }} is up and running by running the following command:
    ```terminal
    $ oc get deploy -n openshift-lifecycle-agent
    ```


    Example output:
    ```terminal
    NAME                                 READY   UP-TO-DATE   AVAILABLE   AGE
    lifecycle-agent-controller-manager   1/1     1            1           14s
    ```