{%- set _mod_docs_content_type = "PROCEDURE" %}
# Apply SELinux log policies {id="spo-selinux-permissive_{{ context }}"}

To log policy violations or AVC denials, set the `SElinuxProfile` profile to `permissive`. {._abstract}


:::important

This procedure defines logging policies. It does not set enforcement policies.

:::


**Procedure**

*   Add `permissive: true` to an `SElinuxProfile`:
    ```yaml
    apiVersion: security-profiles-operator.x-k8s.io/v1alpha2
    kind: SelinuxProfile
    metadata:
      name: nginx-secure
    spec:
      permissive: true
    ```