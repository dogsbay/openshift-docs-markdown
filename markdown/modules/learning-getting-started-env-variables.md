{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating additional environment variables {id="learning-getting-started-env-variables_{{ context }}"}

To simplify your command-line execution and reduce repetitive typing, configure environment variables for your cluster deployments. Using these variables makes it faster and more efficient to run the command to create a {{ product_title }} cluster. {._abstract}

**Procedure**

*   Run the following command to set up environment variables:
    ```terminal
    $ export CLUSTER_NAME=<cluster_name>
    $ export REGION=<VPC_region>
    ```

    :::tip

    Run `rosa whoami` to find the VPC region.
    
    :::