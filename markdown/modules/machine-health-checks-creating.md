{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a machine health check resource {id="machine-health-checks-creating_{{ context }}"}

You can create a `MachineHealthCheck` resource to monitor and automatically remediate unhealthy machines in a machine set. {._abstract}


:::note

You can only apply a machine health check to machines that are managed by compute machine sets or control plane machine sets.

:::


**Prerequisites**

*   Install the `oc` command-line interface.

**Procedure**

1.  Create a `healthcheck.yml` file that contains the definition of your machine health check.
1.  Apply the `healthcheck.yml` file to your cluster:
    ```terminal
    $ oc apply -f healthcheck.yml
    ```