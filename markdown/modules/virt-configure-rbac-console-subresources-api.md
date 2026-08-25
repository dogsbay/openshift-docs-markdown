{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring RBAC permissions for managing VM states by using the web console {id="virt-configure-rbac-console-subresources-api_{{ context }}"}

To allow users to manage virtual machine (VM) states by using the {{ product_title }} web console, you must create an RBAC cluster role and cluster role binding.
The cluster role uses the `subresources.kubevirt.io` API to define which resources can be controlled by certain users or groups. {._abstract}

**Prerequisites**

*   You have cluster administrator access to an {{ product_title }} cluster where {{ VirtProductName }} is installed.
*   You have installed the {{ oc_first }}.

**Procedure**

1.  Create a `ClusterRole` object that allows the target user or group to manage VM states:
    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRole
    metadata:
      name: vm-manager-access
    rules:
      - apiGroups:
          - subresources.kubevirt.io
        resources:
          - virtualmachines/start
          - virtualmachines/stop
        verbs:
          - update
    # ...
    ```
1.  Run the following command to apply the cluster role:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Confirm that the cluster role was created by running the following command and observing the output:
    ```terminal
    $ oc get clusterrole <name>
    ```

    Example output:
    ```terminal
    NAME                AGE
    vm-manager-access   15s
    ```
1.  Inspect the details of the cluster role, and ensure the intended rules for `subresources.kubevirt.io` are present, specifically the `virtualmachines/start` and `virtualmachines/stop` subresources.

    Run the following command and observe the output:
    ```terminal
    $ oc describe clusterrole <name>
    ```

    Example output:
    ```terminal
    Name:         vm-manager-access
    Labels:       <none>
    Annotations:  <none>
    PolicyRule:
      Resources  Non-Resource URLs  Resource Names  Verbs
      ---------  -----------------  --------------  -----
      virtualmachines/start, virtualmachines/stop with subresources.kubevirt.io group  []  []  [update]
    ```
1.  Create a `ClusterRoleBinding` object to bind the cluster role you have created to the target user or group:
    ```yaml
    apiVersion: rbac.authorization.k8s.io/v1
    kind: ClusterRoleBinding
    metadata:
      name: vm-manager-access-binding
    subjects:
      - kind: User
        name: test-user
        apiGroup: rbac.authorization.k8s.io
    roleRef:
      kind: ClusterRole
      name: vm-manager-access
      apiGroup: rbac.authorization.k8s.io
    ```
1.  Run the following command to apply the cluster role binding:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```
1.  Confirm that the cluster role binding was created by running the following command and observing the output:
    ```terminal
    $ oc get clusterrolebinding <name>
    ```

    Example output:
    ```terminal
    NAME                        AGE
    vm-manager-access-binding   15s
    ```

**Verification**

1.  Check if the user can start a VM by running the following command:
    ```terminal
    $ oc auth can-i update virtualmachines/start --namespace=<namespace> --as=<user_name> --subresource=subresources.kubevirt.io
    ```

    Example output:
    ```terminal
    yes
    ```
1.  Check if the user can stop a VM by running the following command:
    ```terminal
    $ oc auth can-i update virtualmachines/stop --namespace=<namespace> --as=<user_name> --group=subresources.kubevirt.io
    ```

    Example output:
    ```terminal
    yes
    ```