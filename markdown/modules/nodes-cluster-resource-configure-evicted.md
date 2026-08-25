{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding pod eviction {id="nodes-cluster-resource-configure-evicted_{{ context }}"}

You can review the following concepts to learn the {{ product_title }} pod eviction policy. {._abstract}

{{ product_title }} can evict a pod from its node when the node’s memory is exhausted. Depending on the extent of memory exhaustion, the eviction might or might not be graceful. Graceful eviction implies the main process (PID 1) of each container receiving a SIGTERM signal, then some time later a SIGKILL signal if the process has not exited already. Non-graceful eviction implies the main process of each container immediately receiving a SIGKILL signal.

An evicted pod has phase **Failed** and reason **Evicted**. It is not restarted, regardless of the value of `restartPolicy`. However, controllers such as the replication controller will notice the pod’s failed status and create a new pod to replace the old one.

```terminal
$ oc get pod test
```

```terminal title="Example output"
NAME      READY     STATUS    RESTARTS   AGE
test      0/1       Evicted   0          1m
```

```terminal
$ oc get pod test -o yaml
```

```terminal title="Example output"
apiVersion: v1
kind: Pod
metadata:
  name: test
...
status:
  message: 'Pod The node was low on resource: [MemoryPressure].'
  phase: Failed
  reason: Evicted
```