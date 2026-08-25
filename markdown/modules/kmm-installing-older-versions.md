{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Kernel Module Management Operator on earlier versions of {{ product_title }} {id="kmm-install-older-version_{{ context }}"}

As a cluster administrator, you can install the Kernel Module Management (KMM) Operator by using the OpenShift CLI. {._abstract}

The KMM Operator is supported on {{ product_title }} 4.12 and later.
For version 4.10 and earlier, you must create a new `SecurityContextConstraint` object and bind it to the Operator’s `ServiceAccount`.

**Prerequisites**

*   You have a running {{ product_title }} cluster.
*   You installed the OpenShift CLI (`oc`).
*   You are logged into the OpenShift CLI as a user with `cluster-admin` privileges.

**Procedure**

1.  Install KMM in the `openshift-kmm` namespace:
    1.  Create the following `Namespace` CR and save the YAML file, for example, `kmm-namespace.yaml` file:
        ```yaml
        apiVersion: v1
        kind: Namespace
        metadata:
          name: openshift-kmm
        ```
    1.  Create the following `SecurityContextConstraint` object and save the YAML file, for example, `kmm-security-constraint.yaml`:
        ```yaml
        allowHostDirVolumePlugin: false
        allowHostIPC: false
        allowHostNetwork: false
        allowHostPID: false
        allowHostPorts: false
        allowPrivilegeEscalation: false
        allowPrivilegedContainer: false
        allowedCapabilities:
          - NET_BIND_SERVICE
        apiVersion: security.openshift.io/v1
        defaultAddCapabilities: null
        fsGroup:
          type: MustRunAs
        groups: []
        kind: SecurityContextConstraints
        metadata:
          name: restricted-v2
        priority: null
        readOnlyRootFilesystem: false
        requiredDropCapabilities:
          - ALL
        runAsUser:
          type: MustRunAsRange
        seLinuxContext:
          type: MustRunAs
        seccompProfiles:
          - runtime/default
        supplementalGroups:
          type: RunAsAny
        users: []
        volumes:
          - configMap
          - downwardAPI
          - emptyDir
          - persistentVolumeClaim
          - projected
          - secret
        ```
    1.  Bind the `SecurityContextConstraint` object to the Operator’s `ServiceAccount` by running the following commands:
        ```terminal
        $ oc apply -f kmm-security-constraint.yaml
        ```
        ```terminal
        $ oc adm policy add-scc-to-user kmm-security-constraint -z kmm-operator-controller -n openshift-kmm
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