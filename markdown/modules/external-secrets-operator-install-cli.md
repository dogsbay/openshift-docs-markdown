{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the {{ external_secrets_operator }} by using the CLI {id="external-secrets-operator-install-cli_{{ context }}"}

You can install the {{ external_secrets_operator }} by manually configuring the Operator Lifecycle Manager (OLM) resources using the OpenShift CLI. You can create a dedicated namespace, define the Operator’s scope, and install the Operator from the catalog. {._abstract}

**Prerequisites**

*   You have access to the cluster with `cluster-admin` privileges.

**Procedure**

1.  Create a new project named `external-secrets-operator` by running the following command:
    ```terminal
    $ oc new-project external-secrets-operator
    ```
1.  Create an `OperatorGroup` object by defining a YAML file with the following content:
    ```yaml
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: openshift-external-secrets-operator
      namespace: external-secrets-operator
    spec:
      targetNamespaces: []
    ```
1.  Create the `OperatorGroup` object by running the following command:
    ```terminal
    $ oc create -f operatorGroup.yaml
    ```
1.  Create a `Subscription` object by defining a YAML file with the following content:

    The following is an example of a `subscription.yaml` file.
    ```yaml
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-external-secrets-operator
      namespace: external-secrets-operator
    spec:
      channel: stable-v1
      name: openshift-external-secrets-operator
      source: redhat-operators
      sourceNamespace: openshift-marketplace
      installPlanApproval: Automatic
      startingCSV: external-secrets-operator.v1.0.0
    ```
1.  Create the `Subscription` object by running the following command:
    ```terminal
    $ oc create -f subscription.yaml
    ```

**Verification**

1.  Verify that the {{ olm }} subscription is created by running the following command:
    ```terminal
    $ oc get subscription -n external-secrets-operator
    ```

    The following is example output verifying the {{ olm }} subscription is created.
    ```terminal
    NAME                                  PACKAGE                               SOURCE             CHANNEL
    openshift-external-secrets-operator   openshift-external-secrets-operator   redhat-operators   stable-v1
    ```
1.  Verify whether the Operator is successfully installed by running the following command:
    ```terminal
    $ oc get csv -n external-secrets-operator
    ```

    The following is example output verifying that the Operator is installed.
    ```terminal
    NAME                               DISPLAY                                           VERSION   REPLACES   PHASE
    external-secrets-operator.v1.0.0   External Secrets Operator for Red Hat OpenShift   1.0.0                Succeeded
    ```
1.  Verify that the status of the {{ external_secrets_operator_short }} is `Running` by entering the following command:
    ```terminal
    $ oc get pods -n external-secrets-operator
    ```

    The following is example output verifying the {{ external_secrets_operator_short }} is `Running`.
    ```terminal
    NAME                                                            READY   STATUS    RESTARTS   AGE
    external-secrets-operator-controller-manager-5699f4bc54-kbsmn   1/1     Running   0          25h
    ```