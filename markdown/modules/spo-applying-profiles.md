{% if context == "spo-seccomp" %}
{%- set seccomp = true -%}
{%- set type = "seccomp" -%}
{%- set kind = "SeccompProfile" -%}
{% endif %}
{% if context == "spo-selinux" %}
{%- set selinux = true -%}
{%- set type = "SELinux" -%}
{%- set kind = "SelinuxProfile" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Apply {{ type }} profiles to a pod {id="spo-applying-profiles_{{ context }}"}

To enforce a recorded or custom {{ type }} profile on a workload, create a pod that references the profile in its security context. {._abstract}

{% if selinux %}
For {{ type }} profiles, the namespace must be labeled to allow [privileged](https://kubernetes.io/docs/concepts/security/pod-security-standards/) workloads.
{% endif %}

**Procedure**

{% if seccomp %}
1.  Create a pod object that defines a `securityContext`:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: test-pod
    spec:
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: Localhost
          localhostProfile: operator/profile1.json
      containers:
        - name: test-container
          image: quay.io/security-profiles-operator/test-nginx-unprivileged:1.21
          securityContext:
            allowPrivilegeEscalation: false
            capabilities:
              drop: [ALL]
    ```
1.  View the profile path of the `seccompProfile.localhostProfile` attribute by running the following command:
    ```terminal
    $ oc get seccompprofile profile1 --output wide
    ```
    ```terminal title="Example output"
    NAME       STATUS     AGE   SECCOMPPROFILE.LOCALHOSTPROFILE
    profile1   Installed  14s   operator/profile1.json
    ```
1.  View the path to the localhost profile by running the following command:
    ```terminal
    $ oc get sp profile1 --output=jsonpath='{.status.localhostProfile}'
    ```
    ```terminal title="Example output"
    operator/profile1.json
    ```
1.  Apply the `localhostProfile` output to the patch file:
    ```yaml
    spec:
      template:
        spec:
          securityContext:
            seccompProfile:
              type: Localhost
              localhostProfile: operator/profile1.json
    ```
1.  Apply the profile to any other workload, such as a `Deployment` object, by running the following command:
    ```terminal
    $ oc -n my-namespace patch deployment myapp --patch-file patch.yaml --type=merge
    ```
    ```terminal title="Example output"
    deployment.apps/myapp patched
    ```

**Verification**

*   Confirm the profile was applied correctly by running the following command:
    ```terminal
    $ oc -n my-namespace get deployment myapp --output=jsonpath='{.spec.template.spec.securityContext}' | jq .
    ```
    ```json title="Example output"
    {
      "seccompProfile": {
        "localhostProfile": "operator/profile1.json",
        "type": "localhost"
      }
    }
    ```
{% endif %}
{% if selinux %}
    1.  Apply the `scc.podSecurityLabelSync=false` label to the `nginx-deploy` namespace by running the following command:
        ```terminal
        $ oc label ns nginx-deploy security.openshift.io/scc.podSecurityLabelSync=false
        ```
    1.  Apply the `privileged` label to the `nginx-deploy` namespace by running the following command:
        ```terminal
        $ oc label ns nginx-deploy --overwrite=true pod-security.kubernetes.io/enforce=privileged
        ```
    1.  Obtain the SELinux profile usage string by running the following command:
        ```terminal
        $ oc get selinuxprofile.security-profiles-operator.x-k8s.io/nginx-secure -ojsonpath='{.status.usage}'
        ```
        ```terminal title="Example output"
        nginx-secure.process
        ```
    1.  Apply the output string in the workload manifest in the `.spec.containers[].securityContext.seLinuxOptions` attribute:
        ```yaml
        apiVersion: v1
        kind: Pod
        metadata:
          name: nginx-secure
          namespace: nginx-deploy
        spec:
          securityContext:
            runAsNonRoot: true
            seccompProfile:
              type: RuntimeDefault
          containers:
            - image: nginxinc/nginx-unprivileged:1.21
              name: nginx
              securityContext:
                allowPrivilegeEscalation: false
                capabilities:
                  drop: [ALL]
                seLinuxOptions:
                  # NOTE: This uses an appropriate SELinux type
                  type: nginx-secure.process
        ```

        :::important

        The SELinux `type` must exist before creating the workload.
        
        :::

{% endif %}

{% if context == "spo-seccomp" %}
{%- set seccomp = false -%}
{%- set type = false -%}
{%- set kind = false -%}
{% endif %}
{% if context == "spo-selinux" %}
{%- set selinux = false -%}
{%- set type = false -%}
{%- set kind = false -%}
{% endif %}