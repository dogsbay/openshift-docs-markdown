{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating the long-lived service account and token to use with MTV providers {id="virt-creating-long-lived-account-and-token_{{ context }}"}

When you register an {{ VirtProductName }} provider in the {{ mtv_first }} web console, you must create a service account and cluster role binding, which gives MTV persistent permissions to read and create virtual machine resources during migration. {._abstract}

**Procedure**

1.  Create the cluster role as shown in the following example:
    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
      name: live-migration-role
    rules:
      - apiGroups:
          - forklift.konveyor.io
        resources:
          - '*'
        verbs:
          - get
          - list
          - watch
      - apiGroups:
          - ""
        resources:
          - secrets
          - namespaces
          - configmaps
          - persistentvolumes
          - persistentvolumeclaims
        verbs:
          - get
          - list
          - watch
          - create
          - update
          - patch
          - delete
      - apiGroups:
          - k8s.cni.cncf.io
        resources:
          - network-attachment-definitions
        verbs:
          - get
          - list
          - watch
      - apiGroups:
          - storage.k8s.io
        resources:
          - storageclasses
        verbs:
          - get
          - list
          - watch
      - apiGroups:
          - kubevirt.io
        resources:
          - virtualmachines
          - virtualmachines/finalizers
          - virtualmachineinstancemigrations
        verbs:
          - get
          - list
          - watch
          - create
          - update
          - patch
          - delete
      - apiGroups:
          - kubevirt.io
        resources:
          - kubevirts
          - virtualmachineinstances
        verbs:
          - get
          - list
          - watch
      - apiGroups:
          - cdi.kubevirt.io
        resources:
          - datavolumes
          - datavolumes/finalizers
        verbs:
          - get
          - list
          - watch
          - create
          - update
          - patch
          - delete
      - apiGroups:
          - apps
        resources:
          - deployments
        verbs:
          - get
          - list
          - watch
          - create
          - update
          - patch
          - delete
      - apiGroups:
          - instancetype.kubevirt.io
        resources:
          - virtualmachineclusterpreferences
          - virtualmachineclusterinstancetypes
        verbs:
          - get
          - list
          - watch
      - apiGroups:
          - instancetype.kubevirt.io
        resources:
          - virtualmachinepreferences
          - virtualmachineinstancetypes
        verbs:
          - get
          - list
          - watch
          - create
          - update
          - patch
          - delete
    ```
1.  Create the cluster role by running the following command:
    ```terminal
    $ oc create -f <filename>.yaml
    ```
1.  Create a service account by running the following command:
    ```terminal
    $ oc create serviceaccount <service_account_name> -n <service_account_namespace>
    ```
1.  Create a cluster role binding that links the service account to the cluster role, by running the following command:
    ```terminal
    $ oc create clusterrolebinding <service_account_name> --clusterrole=<cluster_role_name> --serviceaccount=<service_account_namespace>:<service_account_name>
    ```
1.  Create a secret to hold the token by saving the following manifest as a YAML file:
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: <name_of_secret>
      namespace: <namespace_for_service_account>
      annotations:
        kubernetes.io/service-account.name: <service_account_name>
    type: kubernetes.io/service-account-token
    ```
1.  Apply the manifest by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  After the secret is populated, run the following command to get the service account bearer token:
    ```terminal
    $ TOKEN_BASE64=$(oc get secret "<name_of_secret>" -n "<namespace_bound_to_service_account>" -o jsonpath='{.data.token}')
      TOKEN=$(echo "$TOKEN_BASE64" | base64 --decode)
      echo "$TOKEN"
    ```
1.  Copy the printed token.
1.  In the {{ mtv_first }} web console, when you create a provider and select **{{ VirtProductName }}**, paste the token into the **Service account bearer token** field.