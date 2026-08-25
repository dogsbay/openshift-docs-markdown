{% if context == "spo-seccomp" %}
{%- set seccomp = true -%}
{%- set type = "seccomp" -%}
{%- set kind = "SeccompProfile" -%}
{%- set object = "seccompprofiles" -%}
{% endif %}
{% if context == "spo-selinux" %}
{%- set selinux = true -%}
{%- set type = "SELinux" -%}
{%- set kind = "SelinuxProfile" -%}
{%- set object = "selinuxprofiles" -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Merge per-container profile instances {id="spo-container-profile-instances_{{ context }}"}

To reuse one recorded profile when deploying applications with a `ReplicaSet` or `Deployment`, configure the Security Profiles Operator to merge per-container profile instances into a single profile instead of keeping a separate profile for each container. {._abstract}

**Procedure**

1.  Edit a `ProfileRecording` object to include a `mergeStrategy: containers` variable:
    ```yaml
    apiVersion: security-profiles-operator.x-k8s.io/v1alpha1
    kind: ProfileRecording
    metadata:
      # The name of the Recording is the same as the resulting {{ kind }} CRD
      # after reconciliation.
      name: test-recording
      namespace: my-namespace
    spec:
      kind: {{ kind }}
      recorder: logs
      mergeStrategy: containers
      podSelector:
        matchLabels:
          app: sp-record
    ```
1.  Label the namespace by running the following command:
    ```terminal
    $ oc label ns my-namespace security.openshift.io/scc.podSecurityLabelSync=false pod-security.kubernetes.io/enforce=privileged pod-security.kubernetes.io/audit=privileged pod-security.kubernetes.io/warn=privileged --overwrite=true
    ```
1.  Create the workload with the following YAML:
    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-deploy
      namespace: my-namespace
    spec:
      replicas: 3
      selector:
        matchLabels:
          app: sp-record
      template:
        metadata:
          labels:
            app: sp-record
        spec:
          serviceAccountName: spo-record-sa
          containers:
          - name: nginx-record
            image: quay.io/security-profiles-operator/test-nginx-unprivileged:1.21
            ports:
            - containerPort: 8080
    ```
1.  To record the individual profiles, delete the deployment by running the following command:
    ```terminal
    $ oc delete deployment nginx-deploy -n my-namespace
    ```
1.  To merge the profiles, delete the profile recording by running the following command:
    ```terminal
    $ oc delete profilerecording test-recording -n my-namespace
    ```
1.  To start the merge operation and generate the results profile, run the following command:
    ```terminal
    $ oc get {{ object }} -lspo.x-k8s.io/recording-id=test-recording -n my-namespace
    ```
{%- if selinux %}
    ```terminal title="Example output for SELinux profile"
    NAME                          USAGE                            STATE
    test-recording-nginx-record   test-recording-nginx-record.process   Installed
    ```
{% endif %}
{% if seccomp %}
    ```terminal title="Example output for seccomp profile"
    NAME                          STATUS       AGE
    test-recording-nginx-record   Installed    55s
    ```
{%- endif %}
1.  To view the permissions used by any of the containers, run the following command:
    ```terminal
    $ oc get {{ object }} test-recording-nginx-record -o yaml
    ```

{% if context == "spo-seccomp" %}
{%- set seccomp = false -%}
{%- set type = false -%}
{%- set kind = false -%}
{%- set object = false -%}
{% endif %}
{% if context == "spo-selinux" %}
{%- set selinux = false -%}
{%- set type = false -%}
{%- set kind = false -%}
{%- set object = false -%}
{% endif %}