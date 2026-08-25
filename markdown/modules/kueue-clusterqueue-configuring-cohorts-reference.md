{%- set _mod_docs_content_type = "REFERENCE" %}
# Cohort configuration within a cluster queue spec {id="clusterqueue-configuring-cohorts-reference_{{ context }}"}

You can add a cluster queue to a cohort by specifying the cohort name in the `.spec.cohortName` field of the `ClusterQueue` object. {._abstract}

The following example shows a `ClusterQueue` object with a cohort configured:

```yaml
apiVersion: kueue.x-k8s.io/v1beta2
kind: ClusterQueue
metadata:
  name: cluster-queue
spec:
# ...
  cohortName: example-cohort
# ...
```

All cluster queues that have a matching `spec.cohortName` are part of the same cohort.

If the `spec.cohortName` field is omitted, the cluster queue does not belong to any cohort and cannot access borrowable resources.