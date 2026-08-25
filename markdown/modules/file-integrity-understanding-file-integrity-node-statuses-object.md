{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding the FileIntegrityNodeStatuses object {id="understanding-file-integrity-node-statuses-object_{{ context }}"}

The scan results of the `FileIntegrity` CR are reported in another object called `FileIntegrityNodeStatuses`. {._abstract}

```terminal
$ oc get fileintegritynodestatuses
```

```terminal title="Example output"
NAME                                                AGE
worker-fileintegrity-ip-10-0-130-192.ec2.internal   101s
worker-fileintegrity-ip-10-0-147-133.ec2.internal   109s
worker-fileintegrity-ip-10-0-165-160.ec2.internal   102s
```


:::note

It might take some time for the `FileIntegrityNodeStatus` object results to be available.

:::


There is one result object per node. The `nodeName` attribute of each `FileIntegrityNodeStatus` object corresponds to the node being scanned. The status of the file integrity scan is represented in the `results` array, which holds scan conditions.

```terminal
$ oc get fileintegritynodestatuses.fileintegrity.openshift.io -ojsonpath='{.items[*].results}' | jq
```

The `fileintegritynodestatus` object reports the latest status of an AIDE run and exposes the status as `Failed`, `Succeeded`, or `Errored` in a `status` field.

```terminal
$ oc get fileintegritynodestatuses -w
```

```terminal title="Example output"
NAME                                                               NODE                                         STATUS
example-fileintegrity-ip-10-0-134-186.us-east-2.compute.internal   ip-10-0-134-186.us-east-2.compute.internal   Succeeded
example-fileintegrity-ip-10-0-150-230.us-east-2.compute.internal   ip-10-0-150-230.us-east-2.compute.internal   Succeeded
example-fileintegrity-ip-10-0-169-137.us-east-2.compute.internal   ip-10-0-169-137.us-east-2.compute.internal   Succeeded
example-fileintegrity-ip-10-0-180-200.us-east-2.compute.internal   ip-10-0-180-200.us-east-2.compute.internal   Succeeded
example-fileintegrity-ip-10-0-194-66.us-east-2.compute.internal    ip-10-0-194-66.us-east-2.compute.internal    Failed
example-fileintegrity-ip-10-0-222-188.us-east-2.compute.internal   ip-10-0-222-188.us-east-2.compute.internal   Succeeded
example-fileintegrity-ip-10-0-134-186.us-east-2.compute.internal   ip-10-0-134-186.us-east-2.compute.internal   Succeeded
example-fileintegrity-ip-10-0-222-188.us-east-2.compute.internal   ip-10-0-222-188.us-east-2.compute.internal   Succeeded
example-fileintegrity-ip-10-0-194-66.us-east-2.compute.internal    ip-10-0-194-66.us-east-2.compute.internal    Failed
example-fileintegrity-ip-10-0-150-230.us-east-2.compute.internal   ip-10-0-150-230.us-east-2.compute.internal   Succeeded
example-fileintegrity-ip-10-0-180-200.us-east-2.compute.internal   ip-10-0-180-200.us-east-2.compute.internal   Succeeded
```