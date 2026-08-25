{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating seccomp profiles {id="spo-create-seccomp-profile_{{ context }}"}

Use the `SeccompProfile` object to create seccomp profiles. {._abstract}

`SeccompProfile` objects can restrict syscalls within a container, limiting the access of your application.

**Procedure**

1.  Create a project by running the following command:
    ```terminal
    $ oc new-project my-namespace
    ```
1.  Create the `SeccompProfile` object:
    ```yaml
    apiVersion: security-profiles-operator.x-k8s.io/v1beta1
    kind: SeccompProfile
    metadata:
      name: profile1
    spec:
      defaultAction: SCMP_ACT_LOG
    ```

    The seccomp profile will be saved in `/var/lib/kubelet/seccomp/operator/<namespace>/<name>.json`.

    An `init` container creates the root directory of the Security Profiles Operator to run the Operator without `root` group or user ID privileges. A symbolic link is created from the rootless profile storage `/var/lib/openshift-security-profiles` to the default `seccomp` root path inside of the kubelet root `/var/lib/kubelet/seccomp/operator`.