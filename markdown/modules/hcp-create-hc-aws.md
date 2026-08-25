{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating a hosted cluster on {{ aws_short }} {id="hcp-create-hc-aws_{{ context }}"}

On {{ aws_short }}, you can create a hosted cluster by using the command-line interface, `hcp`, or by providing {{ aws_short }} STS credentials. You can also create a hosted cluster in multiple zones on {{ aws_short }}. {._abstract}

A _hosted cluster_ is an {{ product_title }} cluster with its API endpoint and control plane hosted on a management cluster. The hosted cluster includes the control plane and its corresponding data plane.

The hosted cluster is automatically imported as a managed cluster. If you want to disable this automatic import feature, see "Disabling the automatic import of hosted clusters into {{ mce_short }}".

By default for {{ hcp }} on {{ aws_short }}, you use an AMD64 hosted cluster. However, you can enable {{ hcp }} to run on an ARM64 hosted cluster. For more information, see "Running hosted clusters on an ARM64 architecture".

For compatible combinations of node pools and hosted clusters, see the following table:

**Compatible architectures for node pools and hosted clusters**

| Hosted cluster | Node pools |
| --- | --- |
| AMD64 | AMD64 or ARM64 |
| ARM64 | ARM64 or AMD64 |