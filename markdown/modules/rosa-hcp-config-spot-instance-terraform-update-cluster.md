{%- set _mod_docs_content_type = "PROCEDURE" %}

# Update an existing {{ product_title }} cluster with Spot machine pools (Day 2) using Terraform {id="rosa-hcp-config-spot-instance-terraform-update-cluster_{{ context }}"}

You can add Spot machine pools to an existing {{ product_title }} cluster managed by Terraform. {._abstract}

**Procedure**

1.  Add a new `rhcs_hcp_machine_pool` resource to your existing Terraform configuration:
    ```text
    resource "rhcs_hcp_machine_pool" "spot_pool" {
      cluster = rhcs_cluster_rosa_hcp.cluster.id
      name    = "spot-pool"

      aws_node_pool = {
        instance_type      = "m5.xlarge"
        use_spot_instances = true
        max_spot_price     = 2.0
      }

      subnet_id   = var.private_subnet_id
      replicas    = 2
      auto_repair = true
      # ...
    }
    ```
1.  Apply the configuration:
    ```terminal
    $ terraform plan && terraform apply
    ```

    :::warning

    If the cluster does not have the `termination_handler_queue_url` attribute configured, the Spot machine pool operates in simple mode. This means nodes will not be gracefully drained upon interruption.
    
    :::