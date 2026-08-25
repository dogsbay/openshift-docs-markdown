{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ zero_trust_full }} by using the CLI {id="zero-trust-manager-install-cli_{{ context }}"}

Install the {{ zero_trust_full }} by using the command-line interface (CLI) to create the required project, `OperatorGroup`, and `Subscription` objects. You can then deploy the Operator components necessary for managing workload identities on your {{ product_title }} cluster. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.


:::note

A minimum of 1Gi persistent volume is required to install the SPIRE Server.

:::


**Procedure**

1.  Create a new project named `zero-trust-workload-identity-manager` by running the following command:
    ```terminal
    $ oc new-project zero-trust-workload-identity-manager
    ```
1.  Create an `OperatorGroup` object:
    1.  Create a YAML file, for example, `operatorGroup.yaml`, with the following content:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: openshift-zero-trust-workload-identity-manager
          namespace: zero-trust-workload-identity-manager
        spec:
          upgradeStrategy: Default
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
          name: openshift-zero-trust-workload-identity-manager
          namespace: zero-trust-workload-identity-manager
        spec:
          channel: stable-v1
          name: openshift-zero-trust-workload-identity-manager
          source: redhat-operators
          sourceNamespace: openshift-marketplace
          installPlanApproval: Automatic
        ```
    1.  Create the `Subscription` object by running the following command:
        ```terminal
        $ oc create -f subscription.yaml
        ```

**Verification**

*   Verify that the OLM subscription is created by running the following command:
    ```terminal
    $ oc get subscription -n zero-trust-workload-identity-manager
    ```
    ```terminal title="Example output"
    NAME                                             PACKAGE                                SOURCE             CHANNEL
    openshift-zero-trust-workload-identity-manager   zero-trust-workload-identity-manager   redhat-operators   stable-v1
    ```
*   Verify whether the Operator is successfully installed by running the following command:
    ```terminal
    $ oc get csv -n zero-trust-workload-identity-manager
    ```
    ```terminal title="Example output"
    NAME                                         DISPLAY                                VERSION  PHASE
    zero-trust-workload-identity-manager.v1.0.0   Zero Trust Workload Identity Manager   1.0.0    Succeeded
    ```
*   Verify that the {{ zero_trust_full }} controller manager is ready by running the following command:
    ```terminal
    $ oc get deployment -l name=zero-trust-workload-identity-manager -n zero-trust-workload-identity-manager
    ```
    ```terminal title="Example output"
    NAME                                                      READY   UP-TO-DATE   AVAILABLE   AGE
    zero-trust-workload-identity-manager-controller-manager   1/1     1            1           43m
    ```