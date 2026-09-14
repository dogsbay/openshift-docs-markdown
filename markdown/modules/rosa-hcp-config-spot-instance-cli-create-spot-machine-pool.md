{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a Spot machine pool {id="rosa-hcp-config-spot-instance-cli-create-spot-machine-pool_{{ context }}"}

You can create Spot machine pools for new clusters, or existing ones. This process is identical for both simple and enhanced modes. {._abstract}

**Procedure**

*   Create a Spot machine pool with fixed replicas:
    ```terminal
    $ rosa create machinepool --cluster=<cluster-name> \
      --name spot-workers \
      --instance-type m5.xlarge \
      --replicas 3 \
      --use-spot-instances \
      --spot-max-price 0.50
    ```
*   Alternatively, create a Spot machine pool with autoscaling:
    ```terminal
    $ rosa create machinepool --cluster=<cluster-name> \
      --name spot-workers \
      --instance-type m5.xlarge \
      --enable-autoscaling \
      --min-replicas 2 \
      --max-replicas 10 \
      --use-spot-instances \
      --spot-max-price 0.75
    ```

    :::note

    Omitting the `--spot-max-price` flag defaults to the on-demand price.
    
    :::