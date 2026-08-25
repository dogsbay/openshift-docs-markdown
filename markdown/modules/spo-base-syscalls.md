{%- set _mod_docs_content_type = "PROCEDURE" %}
# Base syscalls for a container runtime {id="spo-base-syscalls_{{ context }}"}

You can use the `baseProfileName` attribute to establish the minimum required `syscalls` for a given runtime to start a container. {._abstract}

**Procedure**

*   Edit the `SeccompProfile` kind object and add `baseProfileName: runc-v1.0.0` to the `spec` field:
    ```yaml
    apiVersion: security-profiles-operator.x-k8s.io/v1beta1
    kind: SeccompProfile
    metadata:
      name: example-name
    spec:
      defaultAction: SCMP_ACT_ERRNO
      baseProfileName: runc-v1.0.0
      syscalls:
        - action: SCMP_ACT_ALLOW
          names:
            - exit_group
    ```