{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a ClusterGroupUpgrade CR with pre-caching {id="talo-precache-start_and_update_{{ context }}"}

For {{ sno }}, the pre-cache feature allows the required container images to be present on the spoke cluster before the update starts. {._abstract}


:::note

For pre-caching, {{ cgu_operator }} uses the `spec.remediationStrategy.timeout` value from the `ClusterGroupUpgrade` CR. You must set a `timeout` value that allows sufficient time for the pre-caching job to complete. When you enable the `ClusterGroupUpgrade` CR after pre-caching has completed, you can change the `timeout` value to a duration that is appropriate for the update.

:::


**Prerequisites**

*   Install the {{ cgu_operator_first }}.
*   Provision one or more managed clusters.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Save the contents of the `ClusterGroupUpgrade` CR with the `preCaching` field set to `true` in the `clustergroupupgrades-group-du.yaml` file:
    ```yaml
    apiVersion: ran.openshift.io/v1alpha1
    kind: ClusterGroupUpgrade
    metadata:
      name: du-upgrade-4918
      namespace: ztp-group-du-sno
    spec:
      preCaching: true
      clusters:
      - cnfdb1
      - cnfdb2
      enable: false
      managedPolicies:
      - du-upgrade-platform-upgrade
      remediationStrategy:
        maxConcurrency: 2
        timeout: 240
    ```

    The `preCaching` field is set to `true`, which enables {{ cgu_operator }} to pull the container images before starting the update.
1.  When you want to start pre-caching, apply the `ClusterGroupUpgrade` CR by running the following command:
    ```terminal
    $ oc apply -f clustergroupupgrades-group-du.yaml
    ```

**Verification**

1.  Check if the `ClusterGroupUpgrade` CR exists in the hub cluster by running the following command:
    ```terminal
    $ oc get cgu -A
    ```

    Example output:
    ```terminal
    NAMESPACE          NAME              AGE   STATE        DETAILS
    ztp-group-du-sno   du-upgrade-4918   10s   InProgress   Precaching is required and not done
    ```

    The CR is created.
1.  Check the status of the pre-caching task by running the following command:
    ```terminal
    $ oc get cgu -n ztp-group-du-sno du-upgrade-4918 -o jsonpath='{.status}'
    ```

    Example output:
    ```json
    {
      "conditions": [
        {
          "lastTransitionTime": "2022-01-27T19:07:24Z",
          "message": "Precaching is required and not done",
          "reason": "InProgress",
          "status": "False",
          "type": "PrecachingSucceeded"
        },
        {
          "lastTransitionTime": "2022-01-27T19:07:34Z",
          "message": "Pre-caching spec is valid and consistent",
          "reason": "PrecacheSpecIsWellFormed",
          "status": "True",
          "type": "PrecacheSpecValid"
        }
      ],
      "precaching": {
        "clusters": [
          "cnfdb1"
          "cnfdb2"
        ],
        "spec": {
          "platformImage": "image.example.io"},
        "status": {
          "cnfdb1": "Active"
          "cnfdb2": "Succeeded"}
        }
    }
    ```

    The output lists the identified clusters.
    The `platformImage` value in `status.precaching.spec` is derived by {{ cgu_operator }} from the `ClusterVersion` object in the managed policies.
1.  Check the status of the pre-caching job by running the following command on the spoke cluster:
    ```terminal
    $ oc get jobs,pods -n openshift-talo-pre-cache
    ```

    Example output:
    ```terminal
    NAME                  COMPLETIONS   DURATION   AGE
    job.batch/pre-cache   0/1           3m10s      3m10s

    NAME                     READY   STATUS    RESTARTS   AGE
    pod/pre-cache--1-9bmlr   1/1     Running   0          3m10s
    ```
1.  Check the status of the `ClusterGroupUpgrade` CR by running the following command:
    ```terminal
    $ oc get cgu -n ztp-group-du-sno du-upgrade-4918 -o jsonpath='{.status}'
    ```

    Example output:
    ```json
    "conditions": [
        {
          "lastTransitionTime": "2022-01-27T19:30:41Z",
          "message": "The ClusterGroupUpgrade CR has all clusters compliant with all the managed policies",
          "reason": "UpgradeCompleted",
          "status": "True",
          "type": "Ready"
        },
        {
          "lastTransitionTime": "2022-01-27T19:28:57Z",
          "message": "Precaching is completed",
          "reason": "PrecachingCompleted",
          "status": "True",
          "type": "PrecachingSucceeded"
        }
    ```

The pre-cache tasks are done.