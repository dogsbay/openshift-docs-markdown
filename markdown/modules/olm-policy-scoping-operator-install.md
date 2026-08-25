{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scoping Operator installations {id="olm-policy-scoping-operator-install_{{ context }}"}

To provide scoping rules to Operator installations and upgrades on Operator Lifecycle Manager (OLM), associate a service account with an Operator group. {._abstract}

Using this example, a cluster administrator can confine a set of Operators to a designated namespace.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Create a new namespace:
    ```terminal title="Example command that creates a Namespace object"
    $ cat <<EOF | oc create -f -
    apiVersion: v1
    kind: Namespace
    metadata:
      name: scoped
    EOF
    ```
1.  Allocate permissions that you want the Operator(s) to be confined to. This involves creating a new service account, relevant role(s), and role binding(s) in the newly created, designated namespace:
    1.  Create a service account by running the following command:
        ```terminal title="Example command that creates a ServiceAccount object"
        $ cat <<EOF | oc create -f -
        apiVersion: v1
        kind: ServiceAccount
        metadata:
          name: scoped
          namespace: scoped
        EOF
        ```
    1.  Create a secret by running the following command:
        ```terminal title="Example command that creates a long-lived API token Secret object"
        $ cat <<EOF | oc create -f -
        apiVersion: v1
        kind: Secret
        type: kubernetes.io/service-account-token
        metadata:
          name: scoped
          namespace: scoped
          annotations:
            kubernetes.io/service-account.name: scoped
        EOF
        ```

        The secret must be a long-lived API token, which is used by the service account.
    1.  Create a role by running the following command.

        :::warning

        In this example, the role grants the service account permissions to do anything in the designated namespace for demonostration purposes only. In a production environment, you should create a more fine-grained set of permissions. For more information, see "Fine-grained permissions".
        
        :::

        ```terminal title="Example command that creates Role and RoleBinding objects"
        $ cat <<EOF | oc create -f -
        apiVersion: rbac.authorization.k8s.io/v1
        kind: Role
        metadata:
          name: scoped
          namespace: scoped
        rules:
        - apiGroups: ["*"]
          resources: ["*"]
          verbs: ["*"]
        ---
        apiVersion: rbac.authorization.k8s.io/v1
        kind: RoleBinding
        metadata:
          name: scoped-bindings
          namespace: scoped
        roleRef:
          apiGroup: rbac.authorization.k8s.io
          kind: Role
          name: scoped
        subjects:
        - kind: ServiceAccount
          name: scoped
          namespace: scoped
        EOF
        ```
1.  Create an `OperatorGroup` object in the designated namespace by running the following command. This Operator group targets the designated namespace to ensure that its tenancy is confined to it. In addition, Operator groups allow a user to specify a service account.
    ```terminal title="Example command that creates an OperatorGroup object"
    $ cat <<EOF | oc create -f -
    apiVersion: operators.coreos.com/v1
    kind: OperatorGroup
    metadata:
      name: scoped
      namespace: scoped
    spec:
      serviceAccountName: scoped
      targetNamespaces:
      - scoped
    EOF
    ```

    Specify the service account created in the previous step. Any Operator installed in the designated namespace is tied to this Operator group and therefore to the service account specified.
1.  Create a `Subscription` object in the designated namespace to install an Operator:
    ```terminal title="Example command that creates a Subscription object"
    $ cat <<EOF | oc create -f -
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      name: openshift-cert-manager-operator
      namespace: scoped
    spec:
      channel: stable-v1
      name: openshift-cert-manager-operator
      source: <catalog_source_name>
      sourceNamespace: <catalog_source_namespace>
    EOF
    ```

    where:

    `<catalog_source_name>`
    :   Specifies a catalog source that already exists in the designated namespace or one that is in the global catalog namespace, for example `redhat-operators`.

    `<catalog_source_namespace>`
    :   Specifies a namespace where the catalog source was created, for example `openshift-marketplace` for the `redhat-operators` catalog.
    Any Operator tied to this Operator group is confined to the permissions granted to the specified service account. If the Operator requests permissions that are outside the scope of the service account, the installation fails with relevant errors.