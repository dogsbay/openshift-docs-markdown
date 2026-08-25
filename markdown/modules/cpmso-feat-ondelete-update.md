{%- set _mod_docs_content_type = "CONCEPT" %}
# Manual updates to the control plane configuration {id="cpmso-feat-ondelete-update_{{ context }}"}

Use the `OnDelete` update strategy to test configuration changes on individual control plane machines before applying them cluster-wide. Manually replacing machines allows you to test changes to your configuration on a single machine before applying the changes more broadly. {._abstract}

For clusters that are configured to use the `OnDelete` update strategy, the Operator creates a replacement control plane machine when you delete an existing machine. When the replacement control plane machine is ready, the etcd Operator allows the existing machine to be deleted. The replacement machine then joins the control plane.

If multiple control plane machines are deleted, the Operator creates all of the required replacement machines simultaneously. The Operator maintains etcd health by preventing more than one machine being removed from the control plane at once.