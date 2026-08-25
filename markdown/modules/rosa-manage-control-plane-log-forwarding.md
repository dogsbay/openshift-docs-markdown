{%- set _mod_docs_content_type = "REFERENCE" %}
# Managing control plane log forwarding {id="rosa-manage-control-plane-log-forwarding_{{ context }}"}

After you configure the {{ product_title }} clusters to use your selected log forwarder for control plane logs, see the following commands to run based on your specific needs. For all of these commands, you must provide the `clusterid` or cluster name in the `--cluster` flag: {._abstract}


`rosa create log-forwarder -c <cluster_name|cluster_id>`
:   Configures your {{ product_title }} cluster to use the log forwarder.

`rosa list log-forwarder -c <cluster_name|cluster_id>`
:   Displays all of the log forwarder configurations for a {{ product_title }} cluster.

`rosa describe log-forwarder -c <cluster_name|cluster_id> <log_fwd_id>`
:   Provides additional details for a specific log forwarder.

`rosa edit log-forwarder -c <cluster_name|cluster_id> <log_fwd_id>`
:   Changes the following log forwarder fields: groups, applications, and S3 and CloudWatch configurations.

`rosa delete log-forwarder -c <cluster_name|cluster_id> <log_fwd_id>`
:   Deletes the log forwarder configuration. Logs are no longer forwarded to your chosen destinations but are not automatically deleted. If you no longer want to store your logs in the S3 bucket or CloudWatch group, delete those logs.

    Additionally, use this command to change the following log forwarder fields: ID, cluster ID, and the type for S3 and CloudWatch. Delete a log forwarder and re-create it with the updated values.