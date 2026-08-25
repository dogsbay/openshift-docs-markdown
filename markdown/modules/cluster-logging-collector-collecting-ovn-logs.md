{%- set _mod_docs_content_type = "PROCEDURE" %}
# Collecting OVN network policy audit logs {id="cluster-logging-collecting-ovn-audit-logs_{{ context }}"}

You can collect the OVN network policy audit logs from the `/var/log/ovn/acl-audit-log.log` file on OVN-Kubernetes pods and forward them to logging servers.

**Prerequisites**

*   You are using {{ product_title }} version 4.8 or later.
*   You are using Cluster Logging 5.2 or later.
*   You have already set up a `ClusterLogForwarder` custom resource (CR) object.
*   The {{ product_title }} cluster is configured for OVN-Kubernetes network policy audit logging. See the following "Additional resources" section.


:::note

Often, logging servers that store audit data must meet organizational and governmental requirements for compliance and security.

:::


**Procedure**

1.  Create or edit a YAML file that defines the `ClusterLogForwarder` CR object as described in other topics on forwarding logs to third-party systems.
1.  In the YAML file, add the `audit` log type to the `inputRefs` element in a pipeline. For example:
    ```yaml
      pipelines:
       - name: audit-logs
         inputRefs:
          - audit (1)
         outputRefs:
          - secure-logging-server (2)
    ```
    1.  Specify `audit` as one of the log types to input.
    1.  Specify the output that connects to your logging server.
1.  Recreate the updated CR object:
    ```terminal
    $ oc create -f <file-name>.yaml
    ```

**Verification**

Verify that audit log entries from the nodes that you are monitoring are present among the log data gathered by the logging server.

Find an original audit log entry in `/var/log/ovn/acl-audit-log.log` and compare it with the corresponding log entry on the logging server.

For example, an original log entry in `/var/log/ovn/acl-audit-log.log` might look like this:

```txt
2021-07-06T08:26:58.687Z|00004|acl_log(ovn_pinctrl0)|INFO|name="verify-audit-
logging_deny-all", verdict=drop, severity=alert:
icmp,vlan_tci=0x0000,dl_src=0a:58:0a:81:02:12,dl_dst=0a:58:0a:81:02:14,nw_src=10
.129.2.18,nw_dst=10.129.2.20,nw_tos=0,nw_ecn=0,nw_ttl=64,icmp_type=8,icmp_code=0
```

And the corresponding OVN audit log entry you find on the logging server might look like this:

```json
{
  "@timestamp" : "2021-07-06T08:26:58..687000+00:00",
  "hostname":"ip.abc.iternal",
  "level":"info",
  "message" : "2021-07-06T08:26:58.687Z|00004|acl_log(ovn_pinctrl0)|INFO|name=\"verify-audit-logging_deny-all\", verdict=drop, severity=alert: icmp,vlan_tci=0x0000,dl_src=0a:58:0a:81:02:12,dl_dst=0a:58:0a:81:02:14,nw_src=10.129.2.18,nw_dst=10.129.2.20,nw_tos=0,nw_ecn=0,nw_ttl=64,icmp_type=8,icmp_code=0"
}
```

Where:

*   `@timestamp` is the timestamp of the log entry.
*   `hostname` is the node from which the log originated.
*   `level` is the log entry.
*   `message` is the original audit log message.


:::note

On an Elasticsearch server, look for log entries whose indices begin with `audit-00000`.

:::


**Troubleshooting**

1.  Verify that your {{ product_title }} cluster meets all the prerequisites.
1.  Verify that you have completed the procedure.
1.  Verify that the nodes generating OVN logs are enabled and have `/var/log/ovn/acl-audit-log.log` files.
1.  Check the Fluentd pod logs for issues.