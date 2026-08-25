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
# Record profiles from workloads {id="spo-recording-profiles_{{ context }}"}

The Security Profiles Operator can record system calls with `ProfileRecording` objects to create baseline profiles for applications. {._abstract}

When using the log enricher for recording {{ type }} profiles, verify the log enricher feature is enabled. See _Additional resources_ for more information.


:::note

A container with `privileged: true` security context restraints prevents log-based recording. Privileged containers are not subject to {{ type }} policies, and log-based recording makes use of a special {{ type }} profile to record events.

:::


**Procedure**

1.  Create a project by running the following command:
    ```terminal
    $ oc new-project my-namespace
    ```
1.  Label the namespace with `enable-recording=true` by running the following command:
    ```terminal
    $ oc label ns my-namespace spo.x-k8s.io/enable-recording=true
    ```
1.  Create a `ProfileRecording` object containing a `recorder: logs` variable:
    ```yaml {minja}
    apiVersion: security-profiles-operator.x-k8s.io/v1alpha1
    kind: ProfileRecording
    metadata:
      namespace: my-namespace
      name: test-recording
    spec:
      kind: {{ kind }}
      recorder: logs
      podSelector:
        matchLabels:
          app: my-app
    ```
1.  Create a workload to record:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      namespace: my-namespace
      name: my-pod
      labels:
        app: my-app
    spec:
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
      containers:
        - name: nginx
          image: quay.io/security-profiles-operator/test-nginx-unprivileged:1.21
          ports:
            - containerPort: 8080
          securityContext:
            allowPrivilegeEscalation: false
            capabilities:
              drop: [ALL]
        - name: redis
          image: quay.io/security-profiles-operator/redis:6.2.1
          securityContext:
            allowPrivilegeEscalation: false
            capabilities:
              drop: [ALL]
    ```
1.  Confirm the pod is in a `Running` state by entering the following command:
    ```terminal
    $ oc -n my-namespace get pods
    ```
    ```terminal title="Example output"
    NAME     READY   STATUS    RESTARTS   AGE
    my-pod   2/2     Running   0          18s
    ```
1.  Confirm the enricher indicates that it receives audit logs for those containers:
    ```terminal
    $ oc -n openshift-security-profiles logs --since=1m --selector name=spod -c log-enricher
    ```

{% if seccomp %}
    ```terminal title="Example output"
    I0523 14:19:08.747313  430694 enricher.go:445] log-enricher "msg"="audit" "container"="redis" "executable"="/usr/local/bin/redis-server" "namespace"="my-namespace" "node"="xiyuan-23-5g2q9-worker-eastus2-6rpgf" "pid"=656802 "pod"="my-pod" "syscallID"=0 "syscallName"="read" "timestamp"="1684851548.745:207179" "type"="seccomp"
    ```
{% endif %}

{% if selinux %}
    ```terminal title="Example output"
    I0517 13:55:36.383187  348295 enricher.go:376] log-enricher "msg"="audit" "container"="redis" "namespace"="my-namespace" "node"="ip-10-0-189-53.us-east-2.compute.internal" "perm"="name_bind" "pod"="my-pod" "profile"="test-recording_redis_6kmrb_1684331729" "scontext"="system_u:system_r:selinuxrecording.process:s0:c4,c27" "tclass"="tcp_socket" "tcontext"="system_u:object_r:redis_port_t:s0" "timestamp"="1684331735.105:273965" "type"="selinux"
    ```
{% endif %}

**Verification**

1.  Remove the pod:
    ```terminal
    $ oc -n my-namespace delete pod my-pod
    ```
1.  Confirm the Security Profiles Operator reconciles the two {{ type }} profiles:

{% if seccomp %}
    ```terminal
    $ oc get seccompprofiles -lspo.x-k8s.io/recording-id=test-recording
    ```
    ```terminal title="Example output for seccomp profile"
    NAME                   STATUS      AGE
    test-recording-nginx   Installed   2m48s
    test-recording-redis   Installed   2m48s
    ```
{% endif %}

{% if selinux %}
    ```terminal
    $ oc get selinuxprofiles -lspo.x-k8s.io/recording-id=test-recording
    ```
    ```terminal title="Example output for SELinux profile"
    NAME                   USAGE                                 STATE
    test-recording-nginx   test-recording-nginx.process   Installed
    test-recording-redis   test-recording-redis.process   Installed
    ```
{% endif %}

{% if context == "spo-seccomp" %}
{%- set seccomp = "" -%}
{%- set type = "" -%}
{%- set kind = "" -%}
{%- set object = "" -%}
{% endif %}
{% if context == "spo-selinux" %}
{%- set selinux = "" -%}
{%- set type = "" -%}
{%- set kind = "" -%}
{%- set object = "" -%}
{% endif %}