---
title: Running tasks in pods using jobs
---

# Running tasks in pods using jobs {#nodes-nodes-jobs}

Jobs execute one-time or scheduled tasks in your cluster, tracking completion status and managing pod lifecycles for batch workloads, parallel processing, and recurring operations.

A *job* executes a task in your OpenShift Container Platform cluster.

A job tracks the overall progress of a task and updates its status with information about active, succeeded, and failed pods. Deleting a job cleans up any pod replicas it created. Jobs are part of the Kubernetes API, which can be managed with `oc` commands like other object types.

```yaml {title="Sample Job specification"}
apiVersion: batch/v1
kind: Job
metadata:
  name: pi
spec:
  parallelism: 1
  completions: 1
  activeDeadlineSeconds: 1800
  backoffLimit: 6
  ttlSecondsAfterFinished: 100
  template:
    metadata:
      name: pi
    spec:
      containers:
      - name: pi
        image: perl
        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: OnFailure
#...
```

where:

`spec.parallelism`
:   Specifies the pod replicas a job should run in parallel.

`spec.completions`
:   Specifies the successful pod completions needed to mark a job completed.

`spec.activeDeadlineSeconds`
:   Specifies the maximum duration the job can run.

`spec.backoffLimit`
:   Specifies the number of retries for a job.

`spec.ttlSecondsAfterFinished`
:   Specifies the period of time in seconds after which the job should be automatically deleted upon completion.

`spec.template`
:   Specifies the template for the pod the controller creates.

`spec.template.spec.restartPolicy`
:   Specifies the restart policy of the pod.

**Additional resources**

- [Jobs (Kubernetes documentation)](https://kubernetes.io/docs/concepts/workloads/controllers/job/)
