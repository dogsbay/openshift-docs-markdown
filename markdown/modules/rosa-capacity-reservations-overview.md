{%- set _mod_docs_content_type = "CONCEPT" %}
# Overview of AWS Capacity Reservations {id="rosa-capacity-reservations-overview_{{ context }}"}

If you have AWS Capacity Reservations for an instance type and Availability Zone (AZ), you can apply them to {{ product_title }} worker nodes. On-Demand Capacity Reservations and Capacity Blocks for machine learning (ML) workloads are supported. {._abstract}

Purchase and manage a Capacity Reservation directly with AWS. After reserving the capacity, add a Capacity Reservation ID to a new machine pool when you create it in your {{ product_title }} cluster. You can also use a Capacity Reservation shared with you from another AWS account within your AWS Organization.

After you configure Capacity Reservations in {{ product_title }}, you can use your AWS account to monitor reserved capacity usage across all workloads in the account.

Using Capacity Reservations on machine pools in {{ product_title }} clusters has the following prerequisites and limitations:

*   You installed and configured the latest {{ rosa_cli }}.
*   Your {{ product_title }} cluster is version 4.19 or later.
*   The cluster already has a machine pool that is not using a Capacity Reservation or taints. The machine pool must have at least two worker nodes.
*   You have purchased a Capacity Reservation for the instance type required in the AZ of the machine pool that you are creating.
*   You can only add a Capacity Reservation ID to a new machine pool.
*   You cannot use autoscaling with Capacity Reservations if you create a machine pool using the {{ rosa_cli }}. However, you can enable both autoscaling and Capacity Reservations on machine pools created using {{ cluster_manager }}.

You can create a machine pool with a Capacity Reservation by using either {{ cluster_manager }} or the {{ rosa_cli }}.