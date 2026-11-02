{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing seLinuxChangePolicy at the namespace level {id="using_selinuxChangePolicy_namespace_{{ context }}"}

Configure `seLinuxChangePolicy` to `Recursive` at the namespace level to opt out of the SELinux mount option default for all pods in that namespace. This setting applies automatically to new pods while allowing pod-level overrides when workloads require different SELinux relabeling behavior. {._abstract}

**Prerequisites**

*   Logged in to a running {{ product_title }} cluster with administrator privileges.
*   Access to the {{ product_title }} console.

**Procedure**

1.  Select the needed namespace:
    1.  Click **Administration** > **Namespaces**. 
    1.  On the **Namespaces** page, click the desired namespace. The **Namespace details** page appears.
1.  Add the `seLinuxChangePolicy` label to the namespace:
    1.  On the **Namespace details** page, next to **Labels**, click **Edit**.
    1.  In the **Edit labels** dialog, add the label `storage.openshift.io/selinux-change-policy=Recursive`.

        This specifies recursively relabeling all files on pod volumes to the appropriate SELinux context.
    1.  Click **Save**.
1.  Verify the results by starting up a pod in the previously edited namespace and observe that the parameter `spec.securityContext.seLinuxChangePolicy` is set to `Recursive`.
    ```yaml title="Example pod YAML file showing seLinuxChangePolicy setting"
    securityContext:
        seLinuxOptions:
          level: 's0:c27,c19'
        runAsNonRoot: true
        fsGroup: 1000740000
        seccompProfile:
          type: RuntimeDefault
        seLinuxChangePolicy: Recursive
      ...
    ```
    *   The value for `securityContext.seLinuxChangePolicy` is inherited from the namespace.