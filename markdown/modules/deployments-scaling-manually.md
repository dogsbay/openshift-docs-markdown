{%- set _mod_docs_content_type = "PROCEDURE" %}
# Scaling manually {id="deployments-scaling-manually_{{ context }}"}

To control how many pod replicas run for a `DeploymentConfig` object in {{ product_title }}, you can scale manually. Use the `oc scale` command to set the desired number of replicas. {._abstract}


:::note

Pods can also be auto-scaled using the `oc autoscale` command.

:::


**Procedure**

1.  To manually scale a `DeploymentConfig` object, use the `oc scale` command. For example, the following command sets the replicas in the `frontend` `DeploymentConfig` object to `3`.
    ```terminal
    $ oc scale dc frontend --replicas=3
    ```

    The number of replicas eventually propagates to the desired and current state of the deployment configured by the `DeploymentConfig` object `frontend`.