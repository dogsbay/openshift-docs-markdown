{%- set _mod_docs_content_type = "CONCEPT" %}
# Additional custom security groups {id="mos-checklist-add-custom-sgs_{{ context }}"}

During cluster creation, you can add additional custom security groups to a cluster that has an existing non-managed VPC. To do so, complete these prerequisites before you create the cluster: {._abstract}

*   Create the custom security groups in AWS before you create the cluster.
*   Associate the custom security groups with the VPC that you are using to create the cluster. Do not associate the custom security groups with any other VPC.
*   You may need to request additional AWS quota for `Security groups per network interface`.