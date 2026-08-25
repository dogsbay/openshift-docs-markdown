{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating SELinux profiles {id="spo-create-selinux-profile_{{ context }}"}

Use the `SelinuxProfile` object to create SELinux profiles. {._abstract}

The `SelinuxProfile` object has several features that allow for better security hardening and readability:

*   Restricts the profiles to inherit from to the current namespace or a system-wide profile. Because there are typically many profiles installed on the system, but only a subset should be used by cluster workloads, the inheritable system profiles are listed in the `spod` instance in `spec.selinuxOptions.allowedSystemProfiles`.
*   Performs basic validation of the permissions, classes and labels.
*   Adds a new keyword `@self` that describes the process using the policy. This allows reusing a policy between workloads and namespaces easily, as the usage of the policy is based on the name and namespace.
*   Adds features for better security hardening and readability compared to writing a profile directly in the SELinux CIL language.

**Procedure**

1.  Create a project by running the following command:
    ```terminal
    $ oc new-project nginx-deploy
    ```
1.  Create a policy that can be used with a non-privileged workload by creating the following `SelinuxProfile` object:
    ```yaml
    apiVersion: security-profiles-operator.x-k8s.io/v1alpha2
    kind: SelinuxProfile
    metadata:
      name: nginx-secure
    spec:
      allow:
        '@self':
          tcp_socket:
          - listen
        http_cache_port_t:
          tcp_socket:
          - name_bind
        node_t:
          tcp_socket:
          - node_bind
      inherit:
      - kind: System
        name: container
    ```
1.  Wait for `selinuxd` to install the policy by running the following command:
    ```terminal
    $ oc wait --for=condition=ready selinuxprofile nginx-secure
    ```
    ```terminal title="Example output"
    selinuxprofile.security-profiles-operator.x-k8s.io/nginx-secure condition met
    ```

    The policies are placed into an `emptyDir` in the container owned by the Security Profiles Operator. The policies are saved in Common Intermediate Language (CIL) format in `/etc/selinux.d/<name>_<namespace>.cil`.
1.  Access the pod by running the following command:
    ```terminal
    $ oc -n openshift-security-profiles rsh -c selinuxd ds/spod
    ```

**Verification**

1.  View the file contents with `cat` by running the following command:
    ```terminal
    $ cat /etc/selinux.d/nginx-secure.cil
    ```
    ```terminal title="Example output"
    (block nginx-secure
    (blockinherit container)
    (allow process nginx-secure.process ( tcp_socket ( listen )))
    (allow process http_cache_port_t ( tcp_socket ( name_bind )))
    (allow process node_t ( tcp_socket ( node_bind )))
    )
    ```
1.  Verify that a policy has been installed by running the following command:
    ```terminal
    $ semodule -l | grep nginx-secure
    ```
    ```terminal title="Example output"
    nginx-secure
    ```