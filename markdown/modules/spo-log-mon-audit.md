{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitor the audit logs {id="spo-log-mon-audit_{{ context }}"}

Monitor advanced audit logs from the `json-enricher` container, by streaming pod logs or by reading the audit log file on the node, so you can verify that Advanced Audit Logging is capturing session activity. {._abstract}

The audit log file is specified in the `auditLogPath` field and is written to the file system on the node where the pod is running. To inspect the audit logs, access the node and open the file at the configured path, such as `/tmp/logs/audit1.log`.

**Procedure**

1.  Stream the advanced audit log by using the following command:
    ```terminal
    # kubectl -n openshift-security-profiles logs --since=1m --selector name=spod -c json-enricher --max-log-requests 6 -f
    ```
1.  Identify the node on which the pod is scheduled by using the following command:
    ```terminal
    # kubectl get pod my-pod -o wide
    ```
1.  Access the node by using the following command:
    ```terminal
    $ sudo ssh core@<node_name>
    ```
1.  View the audit log by using the following command:
    ```terminal
    $ cat /tmp/logs/audit1.log
    ```
    ```terminal title="Example output"
    {
    "auditID": "a1b2c3d4-e5f6-7890-abcd-111111111111",
    "cmdLine": "mkdir /tmp/audittest ",
    "executable": "/bin/bash",
    "gid": 0,
    "node": {"name": "worker-1"},
    "pid": 27184,
    "requestUID": "f011c4a3-b20e-44ed-bb91-23e03ae31b3e",
    "resource": {
    "container": "nginx",
    "namespace": "default",
    "pod": "my-pod"
    },
    "syscalls": ["getpid", "execve"],
    "timestamp": "2026-02-16T06:34:53.000Z",
    "uid": 0,
    "version": "spo/v1_alpha"
    }
    {
    "auditID": "a1b2c3d4-e5f6-7890-abcd-222222222222",
    "cmdLine": "touch /tmp/audittest/demo-file ",
    "executable": "/bin/bash",
    "gid": 0,
    "node": {"name": "worker-1"},
    "pid": 27274,
    "requestUID": "f011c4a3-b20e-44ed-bb91-23e03ae31b3e",
    "resource": {
    "container": "nginx",
    "namespace": "default",
    "pod": "my-pod"
    },
    "syscalls": ["getpid", "execve"],
    "timestamp": "2026-02-16T06:35:02.000Z",
    "uid": 0,
    "version": "spo/v1_alpha"
    }
    ```