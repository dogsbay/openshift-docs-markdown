{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Kernel Module Management Operator by using the CLI {id="kmm-install-using-cli_{{ context }}"}

To install the Kernel Module Management (KMM) Operator on {{ product_title }}, you can create `Namespace`, `OperatorGroup`, and `Subscription` resources by using the OpenShift CLI (`oc`). {._abstract}

**Prerequisites**

*   You have a running {{ product_title }} cluster.
*   You installed the OpenShift CLI (`oc`).
*   You are logged into the OpenShift CLI as a user with `cluster-admin` privileges.

**Procedure**

1.  Install KMM in the `openshift-kmm` namespace:
    1.  Create the following `Namespace` CR and save the YAML  file, for example, `kmm-namespace.yaml`:
        ```yaml
        apiVersion: v1
        kind: Namespace
        metadata:
          name: openshift-kmm
        ```
    1.  Create the following `OperatorGroup` CR and save the YAML file, for example, `kmm-op-group.yaml`:
        ```yaml
        apiVersion: operators.coreos.com/v1
        kind: OperatorGroup
        metadata:
          name: kernel-module-management
          namespace: openshift-kmm
        ```
    1.  Create the following `Subscription` CR and save the YAML file, for example, `kmm-sub.yaml`:
        ```yaml
        apiVersion: operators.coreos.com/v1alpha1
        kind: Subscription
        metadata:
          name: kernel-module-management
          namespace: openshift-kmm
        spec:
          channel: stable
          installPlanApproval: Automatic
          name: kernel-module-management
          source: redhat-operators
          sourceNamespace: openshift-marketplace
        ```
    1.  Create the subscription object by running the following command:
        ```terminal
        $ oc create -f kmm-sub.yaml
        ```

**Verification**

*   To verify that the Operator deployment is successful, run the following command:
    ```terminal
    $ oc get -n openshift-kmm deployments.apps kmm-operator-controller
    ```

    Example output:
    ```terminal
    NAME                              READY UP-TO-DATE  AVAILABLE AGE
    kmm-operator-controller           1/1   1           1         97s
    ```

    The Operator is available.