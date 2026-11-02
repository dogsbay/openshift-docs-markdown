{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing fsGroup at the namespace level {id="using_fsGroup_namespace_{{ context }}"}

You can change `fsGroupChangePolicy` at the namespace level to establish a default permission-change behavior for all pods in that namespace, reducing per-pod configuration overhead.  {._abstract}

After applying the desired setting for `fsGroupChangePolicy` at the namespace level, all subsequently created pods in that namespace inherit the setting. However, if desired, you can override the inherited `fsGroupChangePolicy` setting for individual pods. Setting `fsGroupChangePolicy` at the pod level overrides inheritance from the namespace level setting for that pod.

**Prerequisites**

*   You are logged in to a running {{ product_title }} cluster with administrator privileges.
*   You have access to the {{ product_title }} console.

**Procedure**

1.  Select the desired namespace:
    1.  Click **Administration** > **Namespaces**. 
    1.  On the **Namespaces** page, click the desired namespace. The **Namespace details** page appears.
1.  Add the `fsGroupChangePolicy` label to the namespace:
    1.  On the **Namespace details** page, next to **Labels**, click **Edit**.
    1.  In the **Edit labels** dialog, add the label `storage.openshift.io/fsgroup-change-policy` and set it equal to either:
        *   `OnRootMismatch`: Specifies only changing permissions and ownership if the permission and the ownership of root directory does not match with expected permissions of the volume, thus helping to avoid pod timeout problems.
        *   `Always`: (Default) Specifies always changing permission and ownership of the volume when a volume is mounted.
    1.  Click **Save**.

**Verification**

*   Start up a pod in the previously edited namespace and observe that the parameter `spec.securityContext.fsGroupChangePolicy` contains the value that you set for the namespace.
    ```yaml title="Example pod YAML file showing fsGroupChangePolicy setting"
    securityContext:
      seLinuxOptions:
        level: 's0:c27,c24'
      runAsNonRoot: true
      fsGroup: 1000750000
      fsGroupChangePolicy: OnRootMismatch
      ...
    ```

    The value for `securityContext.fsGroupChangePolicy` is inherited from the namespace.