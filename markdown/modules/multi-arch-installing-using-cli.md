{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Multiarch Tuning Operator by using the CLI {id="multi-architecture-installing-using-cli_{{ context }}"}

You can install the Multiarch Tuning Operator by using the {{ oc_first }}. {._abstract}

**Prerequisites**

*   You have installed the {{ oc_first }}.
*   You have logged in to `oc` as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a new project named `openshift-multiarch-tuning-operator` by running the following command:
    ```terminal
    $ oc create ns openshift-multiarch-tuning-operator
    ```
1.  Create an `OperatorGroup` object:
    1.  Create a YAML file with the configuration for creating an `OperatorGroup` object.
        ```yaml title="Example YAML configuration for creating an OperatorGroup object"
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: openshift-multiarch-tuning-operator
          namespace: openshift-multiarch-tuning-operator
        spec: {}
        ```
    1.  Create the `OperatorGroup` object by running the following command:
        ```terminal
        $ oc create -f <file_name>
        ```

        Replace `<file_name>` with the name of the YAML file that contains the `OperatorGroup` object configuration.
1.  Create a `Subscription` object:
    1.  Create a YAML file with the configuration for creating a `Subscription` object.
        ```yaml title="Example YAML configuration for creating a Subscription object"
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: openshift-multiarch-tuning-operator
          namespace: openshift-multiarch-tuning-operator
        spec:
          channel: stable
          name: multiarch-tuning-operator
          source: redhat-operators
          sourceNamespace: openshift-marketplace
          installPlanApproval: Automatic
          startingCSV: multiarch-tuning-operator.<version>
        ```
    1.  Create the `Subscription` object by running the following command:
        ```terminal
        $ oc create -f <file_name>
        ```

        Replace `<file_name>` with the name of the YAML file that contains the `Subscription` object configuration.

        :::note

        For more details about configuring the `Subscription` object and `OperatorGroup` object, see "Installing from the software catalog by using the CLI".
        
        :::


**Verification**

1.  To verify that the Multiarch Tuning Operator is installed, run the following command:
    ```terminal
    $ oc get csv -n openshift-multiarch-tuning-operator
    ```
    ```terminal title="Example output"
    NAME                                   DISPLAY                     VERSION       REPLACES                            PHASE
    multiarch-tuning-operator.<version>   Multiarch Tuning Operator   <version>     multiarch-tuning-operator.1.0.0      Succeeded
    ```

    The installation is successful if the Operator is in the `Succeeded` phase.
1.  Optional: To verify that the `OperatorGroup` object is created, run the following command:
    ```terminal
    $ oc get operatorgroup -n openshift-multiarch-tuning-operator
    ```
    ```terminal title="Example output"
    NAME                                        AGE
    openshift-multiarch-tuning-operator-q8zbb   133m
    ```
1.  Optional: To verify that the `Subscription` object is created, run the following command:
    ```terminal
    $ oc get subscription -n openshift-multiarch-tuning-operator
    ```
    ```terminal title="Example output"
    NAME                        PACKAGE                     SOURCE                  CHANNEL
    multiarch-tuning-operator   multiarch-tuning-operator   redhat-operators        stable
    ```