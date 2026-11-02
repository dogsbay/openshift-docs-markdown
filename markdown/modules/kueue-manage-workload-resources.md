{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manage workload resources with gang scheduling {id="kueue-manage-workload-resources_{{ context }}"}

To manage workload admission and readiness in {{ kueue_name }}, configure gang scheduling. Set admission modes, cluster-wide readiness timeouts, and retry limits. {._abstract}

The following example uses the `ByWorkload` policy with parallel admission. It sets a 10-minute start timeout, a 30-minute recovery timeout, and a retry limit of five.

**Prerequisites**

*   You have cluster administrator permissions.
*   You installed the {{ kueue_name }} Operator on your cluster.
*   You created a `Kueue` custom resource (CR) named `cluster`.
*   You installed the {{ oc_first }}.

**Procedure**

1.  Update the `Kueue` CR configuration by setting the `spec.config.gangScheduling` field to the following values. Keep the other CR settings.
    ```yaml
    apiVersion: kueue.openshift.io/v1
    kind: Kueue
    metadata:
      name: cluster
    spec:
      config:
        integrations:
          frameworks:
          - BatchJob
        gangScheduling:
          policy: ByWorkload
          byWorkload:
            admission: Parallel
            timeoutSeconds: 600
            recoveryTimeoutSeconds: 1800
            requeuingStrategy:
              timeReference: Eviction
              retryLimit: 5
              backoffBaseSeconds: 120
              backoffMaxSeconds: 7200
    # ...
    ```

    For more information about the policy field, see "Gang scheduling configuration". For more information about admission, timeout, and requeue fields, see "Gang scheduling admission, timeout, and requeue fields".
1.  Apply the updated `Kueue` CR to the cluster by running the following command:
    ```terminal
    $ oc apply -f <filename>.yaml
    ```