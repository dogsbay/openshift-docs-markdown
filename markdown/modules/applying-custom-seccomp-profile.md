{%- set _mod_docs_content_type = "PROCEDURE" %}
# Apply the custom seccomp profile to the workload {id="applying-custom-seccomp-profile_{{ context }}"}

You can apply a custom seccomp profile to your workload to restrict the system calls available to your containers. {._abstract}

**Prerequisite**

*   The cluster administrator has set up the custom seccomp profile. For more details, see "Setting up the custom seccomp profile".

**Procedure**

*   Apply the seccomp profile to the workload by setting the `securityContext.seccompProfile.type` field as following:

    Example:
    ```yaml
    spec:
      securityContext:
        seccompProfile:
          type: Localhost
          localhostProfile: <custom-name>.json
    ```

    where:

    `<custom-name>`
    :   Specifies the name of your custom seccomp profile.
    Alternatively, you can use the pod annotations `seccomp.security.alpha.kubernetes.io/pod: localhost/<custom-name>.json`. However, this method is deprecated in {{ product_title }} {{ product_version }}.