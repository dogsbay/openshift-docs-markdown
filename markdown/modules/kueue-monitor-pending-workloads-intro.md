{%- set _mod_docs_content_type = "CONCEPT" %}
# Monitor pending {{ kueue_name }} workloads {id="kueue-monitor-pending-workloads-intro_{{ context }}"}

{{ kueue_name }} provides the `VisibilityOnDemand` feature so that you can monitor the pipeline of pending jobs in a cluster queue or a local queue.  {._abstract}

Monitoring pending workloads helps batch users estimate when their jobs will start, and helps batch administrators see where the queue is backed up.