{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set up the custom seccomp profile {id="setting-custom-seccomp-profile_{{ context }}"}

You can configure a custom seccomp profile for use with your workloads. {._abstract}

**Prerequisite**

*   You have cluster administrator permissions.
*   You have created a custom security context constraints (SCC). For more information, see "Additional resources".
*   You have created a custom seccomp profile.

**Procedure**

1.  Upload your custom seccomp profile to `/var/lib/kubelet/seccomp/<custom-name>.json` by using the Machine Config. See "Additional resources" for detailed steps.
1.  Update the custom SCC by providing reference to the created custom seccomp profile:
    ```yaml
    seccompProfiles:
    - localhost/<custom-name>.json
    ```

    where:

    `<custom-name>`
    :   Specifies the name of your custom seccomp profile.