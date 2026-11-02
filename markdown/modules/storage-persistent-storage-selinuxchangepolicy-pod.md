{%- set _mod_docs_content_type = "PROCEDURE" %}
# Changing seLinuxChangePolicy at the pod level {id="using_selinuxChangePolicy_pod_{{ context }}"}

Set `seLinuxChangePolicy` to `Recursive` at the pod level to override namespace defaults or opt out of the SELinux mount option default for specific workloads.  {._abstract}

Configure the `seLinuxChangePolicy` parameter in deployment or statefulset specifications to apply it to managed pods, or set it directly when creating individual pods. You cannot modify this parameter on existing pods.

This procedure describes how to set the `seLinuxChangePolicy` parameter in an existing deployment.

**Prerequisites**

*   Access to the {{ product_title }} console.

**Procedure**

1.  Click **Workloads** > **Deployments**.
1.  On the **Deployment** page, click the required deployment.
1.  On the **Deployment details** page, click the **YAML** tab.
1.  Edit the deployment’s YAML file under `spec.template.spec.securityContext` similar to the following example file:
    ```yaml title="Example deployment YAML file setting seLinuxChangePolicy"
      ...
    securityContext:
      seLinuxChangePolicy: Recursive
      ...
    ```
    *   `securityContext.seLinuxChangePolicy`: When set to `Recursive`, specifies recursively relabeling all files on all pod volumes to the appropriate SELinux context.
1.  Click **Save**.