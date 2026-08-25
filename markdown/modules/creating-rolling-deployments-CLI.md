{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a rolling deployment {id="deployments-creating-rolling-deployment_{{ context }}"}

To update an application with minimal downtime in {{ product_title }}, you can create a rolling deployment. Use the CLI to deploy an application, expose it, and trigger a new rollout so pods are gradually replaced. {._abstract}

**Procedure**

1.  Create an application based on the example deployment images found in [Quay.io](https://quay.io/repository/openshifttest/deployment-example):
    ```terminal
    $ oc new-app quay.io/openshifttest/deployment-example:latest
    ```

    :::note

    This image does not expose any ports. If you want to expose your applications over an external LoadBalancer service or enable access to the application over the public internet, create a service by using the `oc expose dc/deployment-example --port=<port>` command after completing this procedure.
    
    :::

1.  If you have the router installed, make the application available via a route or use the service IP directly.
    ```terminal
    $ oc expose svc/deployment-example
    ```
1.  Browse to the application at `deployment-example.<project>.<router_domain>` to verify you see the `v1` image.
1.  Scale the `DeploymentConfig` object up to three replicas:
    ```terminal
    $ oc scale dc/deployment-example --replicas=3
    ```
1.  Trigger a new deployment automatically by tagging a new version of the example as the `latest` tag:
    ```terminal
    $ oc tag deployment-example:v2 deployment-example:latest
    ```
1.  In your browser, refresh the page until you see the `v2` image.
1.  When using the CLI, the following command shows how many pods are on version 1 and how many are on version 2. In the web console, the pods are progressively added to v2 and removed from v1:
    ```terminal
    $ oc describe dc deployment-example
    ```

    During the deployment process, the new replication controller is incrementally scaled up. After the new pods are marked as `ready` (by passing their readiness check), the deployment process continues. If the pods do not become ready, the process aborts, and the deployment rolls back to its previous version.