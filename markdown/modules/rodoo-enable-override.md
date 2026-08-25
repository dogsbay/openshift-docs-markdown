{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling the run-once duration override on a namespace {id="rodoo-enable-override_{{ context }}"}

Enable the run-once duration override on a namespace by adding the `runoncedurationoverrides.admission.runoncedurationoverride.openshift.io/enabled=true` label to the namespace. {._abstract}

**Prerequisites**

*   The {{ run_once_operator }} is installed.

**Procedure**

1.  Log in to the OpenShift CLI.
1.  Add the label to enable the run-once duration override to your namespace:
    ```terminal
    $ oc label namespace <namespace> \
        runoncedurationoverrides.admission.runoncedurationoverride.openshift.io/enabled=true
    ```

    Replace &lt;namespace> with the namespace to enable the run-once duration override on.

    After you enable the run-once duration override on this namespace, future run-once pods that are created in this namespace will have their `activeDeadlineSeconds` field set to the override value from the {{ run_once_operator }}. Existing pods in this namespace will also have their `activeDeadlineSeconds` value set when they are updated next.

**Verification**

1.  Create a test run-once pod in the namespace that you enabled the run-once duration override on:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: example
      namespace: namespace
    spec:
      restartPolicy: Never
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
      containers:
        - name: busybox
          securityContext:
            allowPrivilegeEscalation: false
            capabilities:
              drop: [ALL]
          image: busybox:1.25
          command:
            - /bin/sh
            - -ec
            - |
              while sleep 5; do date; done
    ```

    where:

    `metadata.namespace`
    :   Specifies your namespace.

    `spec.restartPolicy`
    :   Specifies the restart policy. The `restartPolicy` must be `Never` or `OnFailure` to be a run-once pod.

1.  Verify that the pod has its `activeDeadlineSeconds` field set:
    ```terminal
    $ oc get pods -n <namespace> -o yaml | grep activeDeadlineSeconds
    ```
    ```terminal title="Example output"
        activeDeadlineSeconds: 3600
    ```