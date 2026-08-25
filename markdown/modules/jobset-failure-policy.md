{%- set _mod_docs_content_type = "REFERENCE" %}
# Failure policy configuration for {{ js_operator }} {id="js-failure-policy_{{ context }}"}

To control workload behavior in response to child job failures, you can configure a JobSet failure policy. This enables you to define specific actions, such as restarting or failing the entire JobSet, based on the failure reason or the specific replicated job affected. {._abstract}

## Failure policy actions {id="jobset-failure-policy-actions_{{ context }}"}

These actions are available when a job failure matches a defined rule.

| Action | Description |
| --- | --- |
| `FailJobSet` | Marks the entire JobSet as failed immediately. |
| `RestartJobSet` | Restarts the JobSet by recreating all child jobs. This action counts toward the `maxRestarts` limit. This is the default action if no rules match. |
| `RestartJobSetAndIgnoreMaxRestarts` | Restarts the JobSet without counting toward the `maxRestarts` limit. |

## Rule-targeting attributes {id="jobset-rule-attributes_{{ context }}"}

Use the following attributes to define failure rules.

| Attribute | Description |
| --- | --- |
| `targetReplicatedJobs` | Specifies which replicated jobs trigger the rule. |
| `onJobFailureReasons` | Triggers the rule based on the specific job failure reason. Valid values include `BackoffLimitExceeded`, `DeadlineExceeded`, and `PodFailurePolicy`. |

## Configuration example {id="jobset-rule-config-example_{{ context }}"}

This configuration marks the JobSet as failed if the `leader` job fails.

```yaml title="Example of a YAML file to mark the job set failed if the leader fails"
apiVersion: jobset.x-k8s.io/v1alpha2
kind: JobSet
metadata:
  name: failjobset-action-example
spec:
  failurePolicy:
    maxRestarts: 3
    rules:
      - action: FailJobSet
        targetReplicatedJobs:
        - leader
  replicatedJobs:
  - name: leader
    replicas: 1
    template:
      spec:
        backoffLimit: 0
        completions: 2
        parallelism: 2
        template:
          spec:
            containers:
            - name: leader
              image: docker.io/bash:latest
              command:
              - bash
              - -xc
              - |
                echo "JOB_COMPLETION_INDEX=$JOB_COMPLETION_INDEX"
                if [[ "$JOB_COMPLETION_INDEX" == "0" ]]; then
                  for i in $(seq 10 -1 1)
                  do
                    echo "Sleeping in $i"
                    sleep 1
                  done
                  exit 1
                fi
                for i in $(seq 1 1000)
                do
                  echo "$i"
                  sleep 1
                done
  - name: workers
    replicas: 1
    template:
      spec:
        backoffLimit: 0
        completions: 2
        parallelism: 2
        template:
          spec:
            containers:
            - name: worker
              image: docker.io/bash:latest
              command:
              - bash
              - -xc
              - |
                sleep 1000

```


:::note

The `InPlaceRestart` alpha feature is not currently supported on the {{ js_operator }}.

:::