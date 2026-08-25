{%- set _mod_docs_content_type = "REFERENCE" %}
# FileIntegrityNodeStatus CR success example {id="file-integrity-node-status-success_{{ context }}"}

The following example shows a `FileIntegrityNodeStatus` CR with successful scan conditions. {._abstract}

```terminal title="Example output of a condition with a success status"
[
  {
    "condition": "Succeeded",
    "lastProbeTime": "2020-09-15T12:45:57Z"
  }
]
[
  {
    "condition": "Succeeded",
    "lastProbeTime": "2020-09-15T12:46:03Z"
  }
]
[
  {
    "condition": "Succeeded",
    "lastProbeTime": "2020-09-15T12:45:48Z"
  }
]
```

In this case, all three scans succeeded and so far there are no other conditions.