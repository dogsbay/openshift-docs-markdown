{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ cert_manager_operator }} by using the CLI {id="cert-manager-install-cli_{{ context }}"}

You can install the {{ cert_manager_operator }} by using the command-line interface (CLI). {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.

**Procedure**

1.  Create a new project named `cert-manager-operator` by running the following command:
    ```terminal
    $ oc new-project cert-manager-operator
    ```
1.  Create an `OperatorGroup` object:
    1.  Create a YAML file, for example, `operatorGroup.yaml`, with the following content:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: openshift-cert-manager-operator
          namespace: cert-manager-operator
        spec:
          targetNamespaces:
          - "cert-manager-operator"
        ```
    1.  For {{ cert_manager_operator }} v1.15.0 or later, create a YAML file with the following content:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: openshift-cert-manager-operator
          namespace: cert-manager-operator
        spec:
          targetNamespaces: []
          spec: {}
        ```

        :::note

        Starting from {{ cert_manager_operator }} version 1.15.0, it is recommended to install the Operator using the `AllNamespaces` OLM `installMode`. Older versions can continue using the `SingleNamespace` or `OwnNamespace` OLM `installMode`. Support for `SingleNamespace` and `OwnNamespace` will be deprecated in future versions.
        
        :::

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
          name: openshift-cert-manager-operator
          namespace: cert-manager-operator
        spec:
          channel: stable-v1
          name: openshift-cert-manager-operator
          source: redhat-operators
          sourceNamespace: openshift-marketplace
          installPlanApproval: Automatic
        ```
    1.  Create the `Subscription` object by running the following command:
        ```terminal
        $ oc create -f subscription.yaml
        ```

**Verification**

1.  Verify that the OLM subscription is created by running the following command:
    ```terminal
    $ oc get subscription -n cert-manager-operator
    ```
    ```terminal title="Example output"
    NAME                              PACKAGE                           SOURCE             CHANNEL
    openshift-cert-manager-operator   openshift-cert-manager-operator   redhat-operators   stable-v1
    ```
1.  Verify whether the Operator is successfully installed by running the following command:
    ```terminal
    $ oc get csv -n cert-manager-operator
    ```
    ```terminal title="Example output"
    NAME                            DISPLAY                                       VERSION   REPLACES                        PHASE
    cert-manager-operator.v1.13.0   cert-manager Operator for Red Hat OpenShift   1.13.0    cert-manager-operator.v1.12.1   Succeeded
    ```
1.  Verify that the status {{ cert_manager_operator }} is `Running` by running the following command:
    ```terminal
    $ oc get pods -n cert-manager-operator
    ```
    ```terminal title="Example output"
    NAME                                                        READY   STATUS    RESTARTS   AGE
    cert-manager-operator-controller-manager-695b4d46cb-r4hld   2/2     Running   0          7m4s
    ```
1.  Verify that the status of cert-manager pods is `Running` by running the following command:
    ```terminal
    $ oc get pods -n cert-manager
    ```
    ```terminal title="Example output"
    NAME                                       READY   STATUS    RESTARTS   AGE
    cert-manager-58b7f649c4-dp6l4              1/1     Running   0          7m1s
    cert-manager-cainjector-5565b8f897-gx25h   1/1     Running   0          7m37s
    cert-manager-webhook-9bc98cbdd-f972x       1/1     Running   0          7m40s
    ```